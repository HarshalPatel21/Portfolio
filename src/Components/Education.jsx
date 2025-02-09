import React from "react";
import logo from "../assets/Indus-Logo.jpg";
import ExpUI from "./ExpUI";

function Education() {
  return (
    <div>
      <div className="font-bold text-lg mb-2">Education </div>
      <ExpUI
        logo={logo}
        companyName={"Indus University"}
        Designation={"Information and Technology (B.Tech)"}
        startDate={"2021"}
        endDate={"2025"}
      />
    </div>
  );
}

export default Education;
