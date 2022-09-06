import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="pb-60 w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-7">
         I'm doing Master Computer Science from Technical University of Berlin. I have done all of my
         Course Work, but only Theses left to be done to complete my Master degree.
        </p>

        <br />

        <p className="text-xl">
          I have some field experience in different IT sectors. After completion of my Bachelor degree in Computer
          Science, I have been working as a Manager (IT), Network Technician, & a Network Administrator for
          about 4 years.
        </p>

        <br />

        <p className="text-xl">
          Then i switched my career towards Web/Mobile Applications Development. I gained full-time training about three months 
          at WBS Coding School Berlin as a Full Stack Developer.
          I am very passionate towards learning new tools & technologies.
        </p>
      </div>
    </div>
  );
};

export default About;