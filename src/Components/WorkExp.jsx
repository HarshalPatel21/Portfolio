import React from "react";
import ExpUI from "./ExpUI";
import logo from "../assets/Lemnisk.jpg";

function WorkExp() {
  return (
    <div>
      <div className="font-bold text-lg mb-2">Work Experience</div>
      <ExpUI
        logo={logo}
        companyName={"Lemnisk"}
        Designation={"Full Stack intern"}
        startDate={"November 2023"}
        endDate={"July 2024"}
      />
    </div>
  );
}

export default WorkExp;
