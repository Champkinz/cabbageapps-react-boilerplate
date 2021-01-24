import React from "react";

interface templateProps {
  navbar: JSX.Element;
  header: JSX.Element;
  router: JSX.Element;
}

function MainTemplate(props: templateProps) {
  return (
    <div className="relative flex h-full w-full">
      {props.navbar}
      <div className="relative w-full h-screen flex flex-col">
        <header className="relative bg-white w-full" style={{ height: "5vh" }}>
          {props.header}
        </header>
        <div className="relative flex flex-col fill">{props.router}</div>
      </div>
    </div>
  );
}

export default MainTemplate;
