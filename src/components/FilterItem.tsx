import { useState } from "react";
import DropDownIcon from "../assets/svgs/DropDownIcon";
import DropUpIcon from "../assets/svgs/DropUpIcon";
import { Button } from "./commons/Button";
import CheckBoxComponent from "./commons/CheckBoxComponent";
import { Container } from "./commons/Container";
import { Typography } from "./commons/Typography";

interface FilterItemProps {
  title?: string;
  onChangeTextArea?: ({
    value,
    key,
  }: {
    value: string | string[];
    key: string;
  }) => void;
  name?: string;
  placeholder?: string;
}
const FilterItem = ({
  title = "Order #",
  onChangeTextArea,
  name = "order",
  placeholder = "Order ID (Ex. “673444”)",
}: FilterItemProps) => {
  const [showDropDownMenuState, setShowDropDownMenuState] = useState(false);
  const [textAreaInputState, setTextAreaInputState] = useState<string>("");

  const handleShowDropDownMenu = () => {
    setShowDropDownMenuState((prevState) => !prevState);
  };

  const handleTextAreaChange = ({
    value,
    key,
  }: {
    value: string;
    key: string;
  }) => {
    setTextAreaInputState(value);
    onChangeTextArea?.({ value, key });
  };

  const handleCheckBox = ({ value, key }: { value: string[]; key: string }) => {
    onChangeTextArea?.({ value, key });
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
            <CheckBoxComponent
              onChange={(items) => {
                handleCheckBox({
                  value: items,
                  key: name,
                });
              }}
            />
          ) : (
            <textarea
              style={{
                padding: "5px",
                border: "1px solid #E9EEF1",
                width: "100%",
                minHeight: "70px",
              }}
              placeholder={placeholder}
              value={textAreaInputState}
              onChange={(e) =>
                handleTextAreaChange({
                  value: e.target.value,
                  key: name,
                })
              }
            />
          ))}
      </Container>
    </Container>
  );
};

export default FilterItem;
