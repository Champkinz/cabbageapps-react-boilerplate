import React, { ReactNode } from "react";

interface ChequeProps {
  divsContainer: ReactNode;
  information: ReactNode;
}

export const ChequeTemplate: React.FC<ChequeProps> = ({
  divsContainer,
  information
}) => {
  return (
    <div
      style={{
        background: "#EEEEEE",
        height: "82vh",
        gridTemplateColumns: "repeat(20,1fr)"
      }}
      className="relative grid"
    >
      <div
        className="relative bg-white"
        style={{ gridColumn: "span 17", marginRight: ".35rem" }}
      >
        {divsContainer}
      </div>
      <div className="relative bg-white" style={{ gridColumn: "span 3" }}>
        {information}
      </div>
    </div>
  );
};
