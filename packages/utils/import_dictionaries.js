const { map, reduce } = require("lodash");
const fs = require("fs");
const parse = require("csv-parse/lib/sync");

const DICTIONARIES_DIR = "../web-app/dictionaries";

const buildKeysFileData = array =>
  map(array, ({ key }) => `export const ${key} = "${key}";\n`).join("");

const buildDictionaryFileData = (records, lang) =>
  `import * as KEYS from './keys';

export default {
  ${map(records, row => `[KEYS.${row.key}]: "${row[lang]}"`).join(",\n  ")}
};
`;

const buildDictionaryFile = (records, lang) => {
  fs.writeFile(
    `${DICTIONARIES_DIR}/${lang}.js`,
    buildDictionaryFileData(records, lang),
    err => {
      if (err) throw err;
      console.log("The file has been saved!");
    }
  );
};

fs.readFile("./translations.csv", { encoding: "utf-8" }, (err, data) => {
  if (!err) {
    const records = parse(data, { columns: header => header });

    fs.writeFile(
      `${DICTIONARIES_DIR}/keys.js`,
      buildKeysFileData(records),
      err => {
        if (err) throw err;
        console.log("The file has been saved!");
      }
    );

    buildDictionaryFile(records, "ru");
    buildDictionaryFile(records, "tt");
  } else {
    console.log(err);
  }
});
