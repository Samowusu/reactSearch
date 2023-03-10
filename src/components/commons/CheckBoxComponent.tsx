import { useEffect, useState } from "react";
import CheckedBox from "../../assets/svgs/CheckedBox";
import UncheckedBox from "../../assets/svgs/UncheckedBox";
import { Container } from "./Container";

import { Typography } from "./Typography";

const BoxIcon = ({ val }: { val: boolean }) => {
  if (val) {
    return <CheckedBox />;
  }

  return <UncheckedBox />;
};

const BoxItem = ({
  title,
  onCheck,
  value,
}: {
  title: string;
  onCheck: (val: string) => void;
  value: boolean;
}) => {
  const [checkedState, setCheckedState] = useState(false);

  useEffect(() => {
    if (value !== undefined) {
      setCheckedState(value);
    }
  }, [value]);

  const checkBoxHandler = (title: string) => {
    setCheckedState((prevState) => !prevState);
    onCheck(title);
  };

  return (
    <Container onClick={() => checkBoxHandler(title)} gap="10px">
      <BoxIcon val={checkedState} />
      <Typography fontSize="12px" fontWeight="400">
        {title}
      </Typography>
    </Container>
  );
};

interface CheckBoxComponentProps {
  options?: string[];
  onChange?: (items: string[]) => void;
}
const CheckBoxComponent = ({
  options = ["Show all", "CAO", "EDF", "SAO"],
  onChange,
}: CheckBoxComponentProps) => {
  const [checkedItemsState, setCheckedItemsState] = useState<string[]>([]);

  useEffect(() => {
    onChange?.(checkedItemsState);
  }, [checkedItemsState]);

  const handleCheckedItems = (item: string) => {
    const showAllIndex = checkedItemsState.indexOf("Show all");
    if (item === "Show all" && showAllIndex === -1) {
      setCheckedItemsState(options);
      return;
    } else if (item === "Show all" && showAllIndex !== -1) {
      setCheckedItemsState([]);
    } else {
      setCheckedItemsState((prevState) => {
        const selectedArr = [...prevState];
        const showAllIndex = selectedArr.indexOf("Show all");
        if (showAllIndex !== -1) {
          selectedArr.splice(showAllIndex, 1);
        }

        const typeIndex = selectedArr.indexOf(item);
        if (typeIndex === -1) {
          return [...selectedArr, item];
        }
        selectedArr.splice(typeIndex, 1);
        return selectedArr;
      });
    }
  };

  return (
    <Container>
      <Container flexDirection="column" gap="15px">
        {options?.map((item, index) => {
          return (
            <BoxItem
              key={index}
              value={checkedItemsState.some((i) => i === item)}
              title={item}
              onCheck={handleCheckedItems}
            />
          );
        })}
      </Container>
    </Container>
  );
};

export default CheckBoxComponent;
