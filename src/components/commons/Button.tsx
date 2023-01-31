import React, { Component, ReactNode } from "react";
import styled from "styled-components";

type StyleProps = Partial<Props>;
const CustomButton = styled.button<StyleProps>`
  border: ${({ border }) => (border ? "1px solid" : "none")};
  border-color: ${({ borderColor }) => borderColor ?? "blue"};
  border-radius: ${({ borderRadius }) => borderRadius ?? ""};
  width: ${({ width }) => width ?? "fit-content"};
  max-width: ${({ maxWidth }) => maxWidth ?? "250px"};
  height: ${({ height }) => height ?? ""};
  background-color: ${({ bg }) => bg ?? "transparent"};
  color: ${({ color }) => color ?? "black"};
  /* padding vertical */
  padding: ${({ padding }) => padding ?? ""};
  padding: ${({ pV }) => pV ?? ""} ${({ pV, pH }) => (pV ? pH ?? 0 : "")};
  /* padding horizontal */
  padding: ${({ pH, pV }) => (pH ? pV ?? 0 : "")} ${({ pH }) => pH ?? ""};
  padding-top: ${({ paddingTop }) => paddingTop ?? ""};
  padding-bottom: ${({ paddingBottom }) => paddingBottom ?? ""};
  padding-right: ${({ paddingRight }) => paddingRight ?? ""};
  padding-left: ${({ paddingLeft }) => paddingLeft ?? ""};
  /* margin vertical */
  margin: ${({ margin }) => margin ?? ""};
  margin: ${({ mV }) => mV ?? ""} ${({ mV, mH }) => (mV ? mH ?? 0 : "")};
  /* margin horizontal */
  margin: ${({ mH, mV }) => (mH ? mV ?? 0 : "")} ${({ mH }) => mH ?? ""};
  margin-top: ${({ marginTop }) => marginTop ?? ""};
  margin-bottom: ${({ marginBottom }) => marginBottom ?? ""};
  margin-right: ${({ margintRight }) => margintRight ?? ""};
  margin-left: ${({ marginLeft }) => marginLeft ?? ""};
  cursor: pointer;

  ${({ style }) => style};
`;

interface Props {
  children: ReactNode;
  style?: any;

  bg?: string;
  width?: string;
  maxWidth?: string;
  color?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingRight?: string;
  paddingLeft?: string;
  pV?: string;
  pH?: string; //pV and pH stand for padding vertical and padding horizontal respectively
  padding?: string;
  marginTop?: string;
  marginBottom?: string;
  margintRight?: string;
  marginLeft?: string;
  mH?: string;
  mV?: string; //mH and mV stand for margin horizontal and margin vertical respectively
  margin?: string;
  border?: boolean;
  borderColor?: string;
  borderRadius?: string;
  onClick?: () => void;
  height?: string;
}

export function Button(props: Props) {
  return (
    <CustomButton
      bg={props.bg}
      width={props.width}
      maxWidth={props.maxWidth}
      color={props.color}
      paddingTop={props.paddingTop}
      paddingBottom={props.paddingBottom}
      paddingRight={props.paddingRight}
      paddingLeft={props.paddingLeft}
      padding={props.padding}
      pV={props.pV}
      pH={props.pH}
      marginTop={props.marginTop}
      marginBottom={props.marginBottom}
      margintRight={props.margintRight}
      marginLeft={props.marginLeft}
      margin={props.margin}
      mV={props.mV}
      mH={props.mH}
      border={props.border}
      borderColor={props.borderColor}
      borderRadius={props.borderRadius}
      onClick={props.onClick}
      height={props.height}
      style={props.style}
    >
      {props.children}
    </CustomButton>
  );
}
