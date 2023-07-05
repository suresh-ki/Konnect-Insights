import React from "react";
import Button from "../UI/Button";

const VideoSection = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="container pt-16">
        {/* <div className="text-[#404040] text-center font-bold text-xl md:text-2xl lg:text-3xl">
          4 Pillars of Customer Experience Management
        </div> */}
        <iframe
          src="https://www.youtube.com/embed/oSsfGcgzX0o"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="w-full aspect-video"
        ></iframe>

        <div className="flex items-center justify-center flex-col mt-10 lg:mt-14">
          <Button />
          <p className="mt-2 text-sm font-medium mb-9 text-center">
            No CC Required
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
