import React from "react";

function CustomDiv({ data }) {
  return (
    <span className="bg-black rounded-md py-1 px-4 text-white mr-2 text-xs">
      {data}
    </span>
  );
}
const skills = [
  "Python",
  "Django",
  "Flask",
  "Machine Learning",
  "MySQL",
  "MongoDB",
  "React.js",
  "Javascript",
  "C++",
  "Spring Boot",
  "Java",
  "Git/Github",
];
function Skills() {
  return (
    <div>
      <div className="font-bold text-lg  ">Skills</div>
      <div className="flex flex-wrap gap-1 max-w-full">
        {skills.map((skill, i) => (
          <CustomDiv data={skill} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
