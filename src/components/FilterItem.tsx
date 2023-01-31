import React, { useState } from "react";
import DropDownIcon from "../assets/svgs/DropDownIcon";
import DropUpIcon from "../assets/svgs/DropUpIcon";
import { Button } from "./commons/Button";
import CheckBoxComponent from "./commons/CheckBoxComponent";
import { Container } from "./commons/Container";
import { Typography } from "./commons/Typography";

interface FilterItemProps {
  title?: string;
}
const FilterItem = ({ title = "Order #" }: FilterItemProps) => {
  const [showDropDownMenuState, setShowDropDownMenuState] = useState(false);

  const handleShowDropDownMenu = () => {
    setShowDropDownMenuState((prevState) => !prevState);
  };
  return (
    <Container
      flexDirection="column"
      border
      borderColor="#E9EEF1"
      padding="15px"
      height="fit-content"
    >
      <Container
        justifyContent="space-between"
        alignItems="center"
        marginBottom="10px"
      >
        <Typography
          fontSize="14px"
          fontWeight="600"
          color="#10243C"
          textTransform="inherit"
        >
          {title}
        </Typography>
        <Button width="16px" onClick={handleShowDropDownMenu}>
          {showDropDownMenuState ? <DropUpIcon /> : <DropDownIcon />}
        </Button>
      </Container>
      <Container>
        {showDropDownMenuState &&
          (title === "Type" ? (
            <CheckBoxComponent />
          ) : (
            <textarea
              style={{
                padding: "5px",
                border: "1px solid #E9EEF1",
                width: "100%",
                minHeight: "100px",
              }}
              placeholder="Order ID (Ex. “673444444383”)"
            />
          ))}
      </Container>
    </Container>
  );
};

export default FilterItem;
