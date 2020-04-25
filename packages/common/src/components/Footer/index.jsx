import React from "react";
import { Grid } from "@hakof/ui";
import * as Styles from "./styles";

const Footer = () => (
  <Styles.Wrapper>
    <Grid>
      <Styles.Container>
        <Styles.Copyrights>Hakof.ru 2018 (c)</Styles.Copyrights>
        <Styles.Contacts>
          <Styles.ContactsItem>
            <Styles.Mail href="mailto:hakof@mail.ru">
              <Styles.MailIcon />
            </Styles.Mail>
          </Styles.ContactsItem>
          <Styles.ContactsItem>
            <a target="_blank" href="https://vk.com/id1">
              <Styles.SocialLogo social="vk" />
            </a>
          </Styles.ContactsItem>
          <Styles.ContactsItem>
            <a target="_blank" href="https://facebook.com/id1">
              <Styles.SocialLogo social="facebook" />
            </a>
          </Styles.ContactsItem>
        </Styles.Contacts>
      </Styles.Container>
    </Grid>
  </Styles.Wrapper>
);

export default Footer;
