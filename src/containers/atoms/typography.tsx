import styled, { css } from "styled-components";

export const P = styled.p<PProps>`
  margin: 0px;
  font-size: 18px;
  color: #262626;

  ${(props: PProps) =>
    props.white &&
    css`
      color: white !important;
    `}
  ${(props: PProps) =>
    props.color &&
    css`
      color: ${props.color} !important;
    `}

  ${(props: PProps) =>
    props.bold &&
    css`
      font-weight: bold;
    `}
  ${(props: PProps) =>
    props.fontSize &&
    typeof props.fontSize === "number" &&
    css`
      font-size: ${props.fontSize}px;
    `}
  ${(props: PProps) =>
    props.fontSize &&
    typeof props.fontSize === "string" &&
    css`
      font-size: ${props.fontSize};
    `}
`;

export interface PProps {
  bold?: boolean;
  fontSize?: number | string;
  white?: boolean;
  color?: string;
}
