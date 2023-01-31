import React from "react";
import ItemIcon from "../assets/svgs/ItemIcon";
import { Container } from "./commons/Container";
import { Typography } from "./commons/Typography";

interface ListItemProps {
  title?: string;
  icon?: JSX.Element;
}

const ListItem = ({ title = "item", icon = <ItemIcon /> }: ListItemProps) => {
  return (
    <Container alignItems="center" gap="10px" hover padding="15px">
      <Container width="25px" height="25px">
        {icon}
      </Container>
      <Typography color="#F0F5F7" fontSize="14px">
        {title}
      </Typography>
    </Container>
  );
};

export default ListItem;
