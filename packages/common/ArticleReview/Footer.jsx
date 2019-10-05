import * as React from "react";
import * as Styles from "./styles";

const Footer = ({ source_href, source_title }) => (
  <Styles.Footer>
    <Styles.SourceLink href={source_href}>{source_title}</Styles.SourceLink>
    <Styles.Statistics />
  </Styles.Footer>
);

export default Footer;
