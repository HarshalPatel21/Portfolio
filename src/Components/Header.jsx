import React from "react";
import profilePhoto from "../assets/Harshal.jpeg";

function Header() {
  return (
    <div className="flex gap-8 ">
      <div>
        <h1 className="text-6xl font-bold mb-4">
          Hi, I'm <span className="text-[#8082f8] font-custom ">Harshal</span>{" "}
          👋
        </h1>

        <h3 className="text-l">
Full-Stack Developer with 8+ months of experience in scalable web applications, automation, and performance optimization. Proficient in Python, Django, Flask, ReactJS, Node.js.
        </h3>
      </div>
      <div
        className="w-24 h-24 bg-cover bg-center rounded-full overflow-hidden flex-shrink-0"
        style={{ backgroundImage: `url(${profilePhoto})` }}
      ></div>
    </div>
  );
}

export default Header;
