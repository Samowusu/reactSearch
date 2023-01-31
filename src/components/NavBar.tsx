import React from "react";
import ForwardIcon from "../assets/svgs/ForwardIcon";
import { Container } from "./commons/Container";
import { Typography } from "./commons/Typography";

const NavBar = () => {
  return (
    <Container
      bg="#E0E9F7"
      alignItems="center"
      gap="5px"
      pV="10px"
      height="fit-content"
      paddingLeft="15px"
    >
      <Typography fontSize="14px">Home</Typography>
      <Container width="15px" height="15px">
        <ForwardIcon />
      </Container>
      <Typography fontSize="14px">OC</Typography>
      <Container width="15px" height="15px">
        <ForwardIcon />
      </Container>
      <Typography fontSize="12px" color="#778FAB">
        Item Search
      </Typography>
    </Container>
  );
};

export default NavBar;
