import { Button } from "antd";
import React, { ReactNode, useRef, useState } from "react";
import TabPane from "../molecules/TabPane";

interface ScrollableTabs {
  Tabs: { name: string; node: ReactNode }[];
  handlePrevClick: () => void;
  handleNextClick: () => void;
  lastStep?: boolean;
  handleConfirmClick?: () => void;
  handleRejectClick?: () => void;
  handleApproveClick?: () => void;
  isPending?: boolean;
}

const ScrollableTabs: React.FC<ScrollableTabs> = ({
  Tabs,
  handleNextClick,
  handlePrevClick,
  lastStep,
  handleConfirmClick,
  handleRejectClick,
  handleApproveClick,
  isPending,
}) => {
  const [activeKey, setActiveKey] = useState(0);

  const ref = useRef<HTMLDivElement>(null!);

  //   useEffect(() => {
  //     ref.current.scrollTo(0, 0);
  //   }, []);

  const handleScroll = () => {
    for (let i = 0; i < ref.current.children.length; i++) {
      if (
        (ref.current.children[i] as HTMLDivElement).offsetTop <=
        ref.current.scrollTop + 120
      ) {
        setActiveKey(i);
      }
    }
  };
  const scrollToElement = (key: String) => {
    setActiveKey(Number(key));
    ref.current.scrollTo(
      0,
      (ref.current.children[Number(key)] as HTMLDivElement).offsetTop - 120
    );
  };
  return (
    <div className="h-full flex flex-col">
      <TabPane
        onTabClick={scrollToElement}
        tabNames={Tabs.map((item) => item.name)}
        activeKey={activeKey}
      />

      <div
        className="rounded overflow-auto h-full"
        onScroll={handleScroll}
        ref={ref}
      >
        {Tabs.map((item, index) => (
          <div key={index} className=" mx-4 my-4 overflow-auto p-4">
            {item.node}
          </div>
        ))}
        {Tabs.map((item, index) => (
          <div
            key={index.toString() + "2"}
            className=" mx-4 my-4 overflow-auto p-4 invisible"
          >
            {item.node}
          </div>
        ))}
      </div>
      {isPending && lastStep ? (
        <div key="1" className="m-4 flex justify-between">
          <Button
            onClick={handlePrevClick}
            style={{ width: "100px" }}
            children="Previous"
          />
          <div className="flex">
            <Button
              onClick={handleRejectClick}
              style={{ width: "100px" }}
              className="mr-2"
              children="Reject"
            />
            <Button
              onClick={handleApproveClick}
              style={{ width: "100px" }}
              type="primary"
              children="Approve"
            />
          </div>
        </div>
      ) : (
        [
          lastStep ? (
            <div key="2" className=" m-4 flex justify-end">
              <Button
                onClick={handlePrevClick}
                style={{ width: "100px" }}
                className="mr-2"
                children="Previous"
              />

              <Button
                onClick={handleConfirmClick}
                style={{ width: "100px" }}
                type="primary"
                children={"Confirm"}
              />
            </div>
          ) : (
            <div key="3" className=" m-4 flex justify-end">
              <Button
                onClick={handlePrevClick}
                style={{ width: "100px" }}
                className="mr-2"
                children="Previous"
              />

              <Button
                onClick={handleNextClick}
                style={{ width: "100px" }}
                type="primary"
                children={"Next"}
              />
            </div>
          ),
        ]
      )}
    </div>
  );
};

export default ScrollableTabs;
