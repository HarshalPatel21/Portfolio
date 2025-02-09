import React from "react";
import StardrewValleyImg from "../assets/StardrewValley.png";
import MovieRecommenderImg from "../assets/Movie Recommender .png";
import RedditCloneImg from "../assets/RedditClone.png";
import { Icons } from "./Svgs/Icons";

function Projects() {
  const projectStacks = [
    {
      title: "Reddit Clone Website",
      techStack: ["NextJS", "MySQL", "Prisma", "Tailwind","React"],
      img: RedditCloneImg,
      githubLink:"https://github.com/HarshalPatel21/Reddit-Clone",
    },
    {
      title: "Movie Recommender",
      techStack: ["Python", "Scikit", "Pandas","Streamlit"],
      img: MovieRecommenderImg,
      githubLink:"https://github.com/HarshalPatel21/Movie_recommender",
    },
    {
      title: "Stardrew Valley Clone",
      techStack: ["Python", "Pygame"],
      img: StardrewValleyImg,
      githubLink:"https://github.com/HarshalPatel21/Stardew-Valley-in-python",
    },
  ];

  return (
    <div className="flex justify-center items-center flex-col text-5xl gap-4 ">
      <span className="  bg-black rounded-md py-1 px-4 text-white mr-2 text-xs">
        Projects
      </span>
      <span className="font-bold"> Check out my latest work</span>
      <span className="text-xl text-gray-400">
        I've worked on a variety of projects, from simple websites to complex
        web applications. Here are a few of my favorites.
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectStacks.map((project, i) => {
          return (
            <div
              key={i}
              className="py-4 px-2 bg-[#F5E2DA] rounded-xl shadow-md flex justify-center items-center flex-col gap-4"
            >
              <div className="px-4 rounded-xl">
                <img src={project.img} alt="photo" />
              </div>
              <div className="text-[#BA7866] font-custom ">{project.title}</div>
              <div className="flex gap-2 flex-wrap ">
                {project?.techStack?.map((p) => (
                  <span className="text-xs bg-[#BA7866] rounded-md py-1 px-4 text-white">
                    {p}
                  </span>
                ))}
              </div>
              <div className=""> 
                <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1 bg-[#BA7866] text-white py-1 px-4 rounded-md items-center"
            >
              <div className="w-4 h-4">
                  <Icons.github />
                </div>
                <div className="text-xs">Github</div>
            </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
