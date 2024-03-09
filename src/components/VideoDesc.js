import React from "react";

const VideoDesc = ({ mainMovie }) => {
  const { original_title, overview } = mainMovie;
  return (
    <div className="absolute top-0 pl-12 bg-gradient-to-b from-black aspect-video w-full">
      <div className="absolute top-2/4">
        <p className="text-white font-bold text-5xl">{original_title}</p>
        <p className="text-white text-sm pt-5 w-1/4">{overview}</p>

        <div className="flex pt-5 gap-2">
          <button className="text-black px-10 py-3 bg-white rounded-md font-semibold text-xl cursor-pointer hover:bg-opacity-80">
            Play
          </button>
          <button className="text-white px-10 py-3 bg-white rounded-md font-semibold text-xl cursor-pointer bg-opacity-40 hover:bg-opacity-20">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoDesc;
