import React, { ReactNode, Component } from "react";
import styled from "styled-components";

type StyleProps = Partial<Props>;

const Text = styled.p<StyleProps>`
  color: ${({ color }) => color ?? "black"};
  font-size: ${({ fontSize }) => fontSize ?? "16px"};
  font-weight: ${({ fontWeight }) => fontWeight ?? "400"};
  text-transform: ${({ textTransform }) => textTransform ?? "capitalize"};
  background: transparent;
  line-height: ${({ lineHeight }) => lineHeight ?? ""};
`;

interface Props {
  children: ReactNode;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  textTransform?: string;
  lineHeight?: string;
}

export function Typography(props: Props): JSX.Element {
  return (
    <Text
      color={props.color}
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
      textTransform={props.textTransform}
      lineHeight={props.lineHeight}
    >
      {props.children}
    </Text>
  );
}
