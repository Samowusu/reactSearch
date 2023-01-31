import React, { useState } from "react";

import { Container } from "./commons/Container";
import { Typography } from "./commons/Typography";
import logo from "../assets/images/logo.png";
import ListItem from "./ListItem";
import { SIDE_PANEL_FOOTER_MENU } from "../config/utils";

const SidePanel = () => {
  return (
    <Container width="250px" height="100vh" bg="#00152f" flexDirection="column">
      <Container width="150px" marginLeft="15px">
        <img src={logo} alt="logo" />
      </Container>
      <Container
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <Container flexDirection="column" gap="10px">
          <ListItem />
          <ListItem />
          <ListItem />
        </Container>
        <Container flexDirection="column">
          {SIDE_PANEL_FOOTER_MENU.map((menuItem, index) => (
            <ListItem key={index} title={menuItem.title} icon={menuItem.icon} />
          ))}
        </Container>
      </Container>
    </Container>
  );
};

export default SidePanel;
