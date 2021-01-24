import { Collapse } from "antd";
import React, { FC } from "react";
import styled from "styled-components";
import { P } from "./typography";

const { Panel } = Collapse;

const StyledPanel = styled(Panel)`
  background-color: white;
  margin: 1rem;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  & .ant-collapse-content-box {
    padding: 0;
    padding-bottom: 0 !important;
  }
`;

const SinglePanel = (item: accordionProp, state: any) => (
  <StyledPanel
    header={
      <div>
        <P bold>
          {typeof item.title === "string" ? item.title : item.title(state)}
        </P>
      </div>
    }
    key={item.key}
    collapsible={item.collapsible ? "disabled" : "header"}
  >
    <div style={item.style && item.style}>{item.component}</div>
  </StyledPanel>
);

const Accordion: FC<AccordionProps> = ({ data, state }) => {
  return (
    <Collapse
      ghost
      className="bg-white"
      style={{ border: "none" }}
      accordion
      expandIconPosition="right"
    >
      {data &&
        data!.map((item) =>
          typeof item.disabled === "boolean"
            ? !item.disabled && SinglePanel(item, state)
            : !item.disabled(state) && SinglePanel(item, state)
        )}
    </Collapse>
  );
};

interface AccordionProps {
  data?: accordionProp[];
  state?: any;
}

export interface accordionProp {
  title: string | Function;
  component: JSX.Element;
  key: string;
  disabled: boolean | Function;
  style?: React.CSSProperties;
  collapsible?: boolean;
}

export default Accordion;
