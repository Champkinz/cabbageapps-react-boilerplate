import React from "react";

interface accMngPros {
  stepsNav: JSX.Element;
  divsContainer: JSX.Element;
  information: JSX.Element;
}

function AccountManagementTemplate(props: accMngPros) {
  const grid = {
    gridTemplateColumns: "repeat(27,1fr)",
    gridColumn: "span 17"
  };
  return (
    <div
      style={{
        background: "#EEEEEE",
        gridTemplateColumns: "repeat(20,1fr)"
      }}
      className="relative grid fill"
    >
      <div
        className="relative bg-white flex flex-col"
        style={{ gridColumn: "span 3", marginRight: ".35rem" }}
      >
        {props.stepsNav}
      </div>

      <div className="relative grid bg-white border h-full" style={grid}>
        <div className="relative bg-white" style={{ gridColumn: "span 22" }}>
          {props.divsContainer}
        </div>
        <div className="relative bg-white" style={{ gridColumn: "span 5" }}>
          {props.information}
        </div>
      </div>
    </div>
  );
}

export default AccountManagementTemplate;
