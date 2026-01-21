import React from "react";
import IndusLogo from "../assets/Indus-Logo.jpg";
import SVNITLogo from "../assets/SVNIT_logo.webp";
import ExpUI from "./ExpUI";

function Education() {
  return (
    <div>
      <div className="font-bold text-lg mb-2">Education </div>
      <ExpUI
        logo={IndusLogo}
        companyName={"Indus University"}
        Designation={"Information and Technology (B.Tech)"}
        startDate={"2021"}
        endDate={"2025"}
      />
    
      <ExpUI
        logo={SVNITLogo}
        companyName={"Sardar Vallabhbhai National Institute of Technology (SVNIT)"}
        Designation={"Masters of Technology in Computer Science and Engineering (Data Science)"}
        startDate={"2025"}
        endDate={"2027"}
      />
    </div>
  );
}

export default Education;
