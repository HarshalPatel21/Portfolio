import React from "react";

function ExpUI(props) {
  const { logo, companyName, Designation, startDate, endDate, current } = props;
  return (
    <div className="flex gap-6 mb-5">
      <div
        className="w-12 h-12  rounded-full bg-center bg-cover  "
        style={{ backgroundImage: `url(${logo})` }}
      ></div>
      <div className="flex-1">
        <span className="font-bold text-sm">{companyName}</span>
        {current && (
          <span className="bg-gray-100 rounded-md py-1 px-2 ml-2 text-xs">
            current
          </span>
        )}
        <div className="text-sm">{Designation}</div>
      </div>
      <div>
        <span className="text-gray-500">
          {startDate} - {endDate}
        </span>
      </div>
    </div>
  );
}

export default ExpUI;
