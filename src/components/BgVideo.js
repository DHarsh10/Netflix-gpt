import React from "react";

const BgVideo = ({ trailerVideoKey }) => {
  return (
    <div>
      <iframe
        className="w-full aspect-video -mt-[7%] pointer-events-none"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideoKey +
          "?&autoplay=1&mute=1&loop=1&rel=0&controls=0&showinfo=0&color=white&iv_load_policy=3"
        }
        title="YouTube video player"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div> 
  );
};

export default BgVideo;
