import React, { useState } from "react";
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

const BoxItem = ({ title }: { title: string }) => {
  const [checkedState, setCheckedState] = useState(false);

  const checkBoxHandler = () => {
    setCheckedState((prevState) => !prevState);
  };

  return (
    <Container onClick={checkBoxHandler} gap="10px">
      <BoxIcon val={checkedState} />
      <Typography fontSize="12px" fontWeight="400">
        {title}
      </Typography>
    </Container>
  );
};

interface CheckBoxComponentProps {
  options?: string[];
}
const CheckBoxComponent = ({
  options = ["Show all", "CAO", "EDF", "SAO"],
}: CheckBoxComponentProps) => {
  return (
    <Container>
      <Container flexDirection="column" gap="15px">
        {options?.map((item, index) => {
          return <BoxItem key={index} title={item} />;
        })}
      </Container>
    </Container>
  );
};

export default CheckBoxComponent;
