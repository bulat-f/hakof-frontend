import { omit, map, forEach, reduce, flow, trim, keys } from "lodash";
import GoogleSpreadsheet from "google-spreadsheet";
import fs from "fs";
import configs from "./g-suite-configs.json";

const { SPREADSHEET_ID, CREDENTIALS } = configs;

// index starts with 1
const TAB_INDEX = 1;

const PATH_TO_DICTIONARIES_DIR = "../web-app/dictionaries";
const DICTIONARY_FILE_START =
  "import * as KEYS from './keys';\n\nexport default {";
const DICTIONARY_FILE_END = "\n};\n";

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

const cleanRows = rows =>
  map(rows, row =>
    omit(row, ["app:edited", "_xml", "id", "save", "del", "_links"])
  );

const getLocales = rows => flow(items => omit(items[0], ["key"]), keys)(rows);

const buildKeysAndText = (rows, locale) =>
  reduce(rows, (prev, row) => [...prev, [row.key, row[locale]]], []);

const rowsToMap = rows => {
  const locales = getLocales(rows);
  const dictionariesMap = {};
  forEach(locales, locale => {
    dictionariesMap[locale] = buildKeysAndText(rows, locale);
  });
  return dictionariesMap;
};

const prepareRows = rows => flow(cleanRows, rowsToMap)(rows);

const prepareText = flow(
  trim,
  string => string.replace(/\n/, ""),
  string => string.replace(/'/g, "\\'")
);

const getKeys = rows =>
  flow(
    items => items.map(({ key }) => key),
    items => items.sort()
  )(rows);

const writeDictionariesMapToFiles = dictionariesMap =>
  forEach(dictionariesMap, (data, locale) => {
    const pathToDictionaryFile = `${PATH_TO_DICTIONARIES_DIR}/${locale}.js`;
    fs.writeFile(
      pathToDictionaryFile,
      reduce(
        data,
        (content, [key, text], index) => {
          const isLast = data.length - 1 === index;
          const rowWithContent = `${content}\n  [KEYS.${key}]: '${prepareText(
            text
          )}',`;
          if (isLast) {
            return `${rowWithContent}${DICTIONARY_FILE_END}`;
          }
          return rowWithContent;
        },
        DICTIONARY_FILE_START
      ),
      writeError => {
        if (writeError) {
          throw writeError;
        }
        console.log("The file has been saved!");
      }
    );
  });

const writeKeysToFile = rowKeys => {
  const pathToKeys = `${PATH_TO_DICTIONARIES_DIR}/keys.js`;
  fs.writeFile(
    pathToKeys,
    reduce(
      rowKeys,
      (content, key, index) => {
        const isLast = rowKeys.length - 1 === index;
        const isFirst = index === 0;
        const row = `export const ${key} = '${key}';`;
        const rowWithContent = `${content}\n${row}`;
        if (isFirst) {
          return row;
        }
        if (isLast) {
          return `${rowWithContent}\n`;
        }
        return rowWithContent;
      },
      ""
    ),
    writeError => {
      if (writeError) {
        throw writeError;
      }
      console.log("The file has been saved!");
    }
  );
};

if (!CREDENTIALS) {
  throw new Error(
    "You should define GOOGLE_SPREADSHEET_CREDENTIALS variable in `g-suite-config.json`"
  );
}

doc.useServiceAccountAuth(CREDENTIALS, err => {
  if (err) {
    throw err;
  }
  doc.getRows(TAB_INDEX, (error, rows) => {
    if (error) {
      return null;
    }

    const dictionariesMap = prepareRows(rows);
    const rowKeys = getKeys(rows);
    writeKeysToFile(rowKeys);
    writeDictionariesMapToFiles(dictionariesMap);
  });
});
