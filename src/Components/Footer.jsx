import React from "react";

function Footer() {
  return (
    <div className="flex justify-center items-center flex-col text-5xl gap-4 ">
      <span className="  bg-black rounded-md py-1 px-4 text-white mr-2 text-xs">
        Contact
      </span>
      <span className="text-5xl font-bold ">Get in Touch</span>
      <span className="text-2xl text-gray-400">
        Want to chat? Just shoot me a dm with a direct question on <br />
      </span>
      <a
        href="https://www.linkedin.com/in/harshal-patel-8a389126a/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 text-base underline"
      >
        LinkedIn
      </a>
    </div>
  );
}

export default Footer;
