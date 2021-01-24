// import "animate.css/animate.css";
import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="flex flex-col justify-start py-32 items-center h-full px-16">
      <div className=" text-8xl my-10">Welcome</div>

      <Button size="large" type="primary">
        <Link to="/tenant">Go To Dashboard</Link>{" "}
      </Button>
    </div>
  );
};

export default WelcomePage;
