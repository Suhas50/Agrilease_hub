import React from "react";
import image1 from "../asset/image1.png";
import image2 from "../asset/image2.png";
import image3 from "../asset/image3.png";
import image4 from "../asset/image4.png";

function About() {
  return (
    <div className="flex flex-row justify-center items-center my-[200px]">
      {/* Image Content */}
      <div className="w-1/2 flex gap-10 justify-center items-center">
        {/* Image 1 and Hover Effect */}
        <div className="relative w-[300px] h-[300px] rounded-md overflow-hidden">
          <img
            src={image1}
            alt="the machine img"
            className="absolute w-full h-full object-cover transition-opacity duration-500 ease-in-out"
          />
          <img
            src={image2}
            alt="the machine img"
            className="absolute w-full h-full object-cover rounded-md opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out"
          />
        </div>

        {/* Image 2 and Hover Effect */}
        <div className="relative w-[300px] h-[300px] rounded-md overflow-hidden">
          <img
            src={image3}
            alt="the machine img"
            className="absolute w-full h-full object-cover transition-opacity duration-500 ease-in-out"
          />
          <img
            src={image4}
            alt="the machine img"
            className="absolute w-full h-full object-cover rounded-md opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="w-1/2 text-justify mr-8  text-xl">
      <span className="text-green-500 text font-bold text-[2rem] font-Sans-serif">Agrilease Hub </span>
      
        is a forward-thinking platform dedicated to empowering
        farmers by providing access to advanced agricultural machinery and
        technology on a rental basis. We bridge the gap between farmers and
        modern innovations, making high-efficiency equipment affordable and
        accessible. By renting instead of buying, farmers can utilize the latest
        tools to boost productivity without the burden of ownership costs.
      </div>
    </div>
  );
}

export default About;