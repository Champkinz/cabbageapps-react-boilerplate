import React from "react";

interface tabProps {
  tabArr: Array<JSX.Element>;
  gridClass?: string;
  colClass?: string;
}

function ScrollTabTemplate(props: tabProps) {
  return (
    <>
      {props.tabArr.map((item, index) => {
        return props.tabArr.length - 1 === index ? (
          <div key={index} className={`${props.gridClass}`}>
            <div
              className={`${props.colClass}`}
              style={{ marginBottom: "55vh" }}
            >
              {item}
            </div>
          </div>
        ) : (
          <div key={index} className={`${props.gridClass}`}>
            <div className={`${props.colClass} mb-8 mt-4`}>{item}</div>
          </div>
        );
      })}
      {/* </div> */}
    </>
  );
}

export default ScrollTabTemplate;
