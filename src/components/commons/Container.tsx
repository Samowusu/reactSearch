import React, { Children, ReactNode } from "react";
import styled from "styled-components";

type StyleProps = Partial<Props>;
const Box = styled.div<StyleProps>`
  display: flex;
  border: ${({ border }) => border && "1px solid red"};
  border-width: ${({ borderWidth }) => borderWidth ?? ""};
  border-color: ${({ borderColor }) => borderColor ?? ""};
  border-radius: ${({ borderRadius }) => borderRadius ?? ""};
  background: ${({ bg }) => bg ?? "transparent"};
  width: ${({ width }) => width ?? "100%"};
  max-width: ${({ maxWidth }) => maxWidth ?? ""};
  min-width: ${({ minWidth }) => minWidth ?? ""};
  height: ${({ height }) => height ?? ""};
  min-height: ${({ minHeight }) => minHeight ?? ""};
  max-height: ${({ maxHeight }) => maxHeight ?? ""};
  flex-direction: ${({ flexDirection }) => flexDirection ?? "row"};
  justify-content: ${({ justifyContent }) => justifyContent ?? ""};
  align-items: ${({ alignItems }) => alignItems ?? ""};
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
  position: ${({ position }) => position ?? ""};
  top: ${({ top }) => top ?? ""};
  bottom: ${({ bottom }) => bottom ?? ""};
  right: ${({ right }) => right ?? ""};
  left: ${({ left }) => left ?? ""};
  z-index: ${({ zIndex }) => zIndex ?? ""};
  gap: ${({ gap }) => gap ?? ""};
  cursor: ${({ cursor }) => cursor ?? ""};
  overflow: ${({ overflow }) => overflow ?? ""};
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  & ::-webkit-scrollbar {
    display: none;
  }

  box-shadow: ${({ boxShadow }) =>
    boxShadow && "0px 3px 6px  rgba(0, 0, 0, 0.161)"};
  -webkit-box-shadow: ${({ boxShadow }) =>
    boxShadow && "0px 3px 6px  rgba(0, 0, 0, 0.161)"};
  -moz-box-shadow: ${({ boxShadow }) =>
    boxShadow && "0px 3px 6px  rgba(0, 0, 0, 0.161)"};

  ${({ hover }) =>
    hover ? `&:hover { background: #064A71 ; cursor: pointer}` : ""}

  ${({ style }) => style};
`;

interface Props {
  children?: ReactNode;
  style?: any;
  width?: string;
  maxWidth?: string;
  minWidth?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingRight?: string;
  paddingLeft?: string;
  pV?: string;
  pH?: string; //pV and pH stand for padding vertical and padding horizontal respectively
  height?: string;
  maxHeight?: string;
  minHeight?: string;
  marginTop?: string;
  marginBottom?: string;
  margintRight?: string;
  marginLeft?: string;
  mH?: string;
  mV?: string; //mH and mV stand for margin horizontal and margin vertical respectively
  position?: string;
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  zIndex?: string;
  padding?: string;
  margin?: string;
  boxShadow?: boolean;
  overflow?: string;
  gap?: string;
  border?: boolean;
  borderRadius?: string;
  bg?: string;
  borderColor?: string;
  cursor?: string;
  borderWidth?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function Container(props: Props): JSX.Element {
  return (
    <Box
      width={props.width}
      maxWidth={props.maxWidth}
      minWidth={props.minWidth}
      height={props.height}
      minHeight={props.minHeight}
      maxHeight={props.maxHeight}
      flexDirection={props.flexDirection}
      justifyContent={props.justifyContent}
      alignItems={props.alignItems}
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
      position={props.position}
      top={props.top}
      bottom={props.bottom}
      right={props.right}
      left={props.left}
      zIndex={props.zIndex}
      boxShadow={props.boxShadow}
      overflow={props.overflow}
      gap={props.gap}
      border={props.border}
      borderRadius={props.borderRadius}
      borderColor={props.borderColor}
      bg={props.bg}
      cursor={props.cursor}
      borderWidth={props.borderWidth}
      hover={props.hover}
      style={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </Box>
  );
}
