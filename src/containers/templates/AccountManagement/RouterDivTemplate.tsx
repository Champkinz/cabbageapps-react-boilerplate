import React, { useRef, useState } from "react";
import TabPane from "../../molecules/TabPane";

interface divProps {
  tab: Array<string>;
  content: JSX.Element;
  nav?: JSX.Element;
}

function RouterDivTemplate(props: divProps) {
  const [activeKey, setActiveKey] = useState(0);
  const ref: any = useRef(null);

  const getScroll = (e: any) => {
    for (let i = 0; i < e.target.children.length; i++) {
      const currentElement = e.target.children[i]?.getBoundingClientRect();
      // const tabScreenOffsetY = 180;
      // const lastElement = e.target.children[i - 1]?.getBoundingClientRect();
      // const isLastElementHiddden =
      //   i === 0 ? true : lastElement.y < lastElement.height - tabScreenOffsetY;

      // const isCurrentElementHidden =
      //   currentElement.y > currentElement.height - tabScreenOffsetY;
      // console.log(
      //   "Activate",
      //   i,
      //   isLastElementHiddden,
      //   isCurrentElementHidden,
      //   currentElement
      // );
      // if (isLastElementHiddden && !isCurrentElementHidden) {
      //   setActiveKey(i);
      // }
      // Todo: Could improve based on parent reference. right now offset is calculates as thorugh screen offset
      if (currentElement.y < 250) {
        setActiveKey(i);
      }
    }
  };

  const scrollToElement = (e: any) => {
    setActiveKey(e);
    ref.current.scrollTo(0, ref.current.children[e].offsetTop - 55);
  };

  return (
    <div className="relative h-full w-full">
      <TabPane
        activeKey={activeKey}
        onTabClick={scrollToElement}
        tabNames={props.tab}
      />
      <div
        className="absolute top-0 w-full pt-12 pr-4 pl-4 z-10 overflow-y-auto  h-full bg-white"
        onScroll={getScroll}
        ref={ref}
      >
        {props.content}
      </div>
      <div className="absolute flex justify-end pr-4 pb-3 pt-2 z-10 bottom-0 right-0 w-full bg-white">
        {props.nav}
      </div>
    </div>
  );
}

export default RouterDivTemplate;
