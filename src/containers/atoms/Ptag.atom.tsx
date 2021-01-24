import React from "react";

interface pProps {
  title: string | JSX.Element;
  className?: string;
  style?: Object;
  //   size: string;
}

function Ptag(props: pProps) {
  return (
    <p
      style={props.style}
      className={`${props.className ? `${props.className} ` : ""} mb-1`}
    >
      {props.title}
    </p>
  );
}

export default Ptag;
