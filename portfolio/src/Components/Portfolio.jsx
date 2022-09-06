import React from "react";
import arrayDestruct from "../assets/myPortfolio/arrayDestruct.jpg";
import installNode from "../assets/myPortfolio/installNode.jpg";
import navbar from "../assets/myPortfolio/navbar.jpg";
import reactParallax from "../assets/myPortfolio/reactParallax.jpg";
import reactSmooth from "../assets/myPortfolio/reactSmooth.jpg";
import usestate from "../assets/myPortfolio/usestate.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
    },
    {
      id: 2,
      src: reactParallax,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactSmooth,
    },
    {
      id: 5,
      src: installNode,
    },

    {
      id: 6,
      src: usestate,
    },
  ];

  return (
    <div
      name="portfolio"
      className="pt-5 pb-60 bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my projects on Github:</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;