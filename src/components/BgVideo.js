import React, { useRef }  from "react";
import YouTube from 'react-youtube';


const BgVideo = ({ trailerVideoKey }) => {
  const playerRef = useRef(null);

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
      rel: 0,
      controls: 0,
      showinfo: 0,
      color: "white",
      iv_load_policy: 3,
    },
  };


  const onReady = (event) => {
    playerRef.current = event.target;
  };

  const onEnd = () => {
    // When the video ends, seek to the beginning to create a loop
    playerRef.current.seekTo(0);
  };
  return (
    <div>
      {/* <iframe
        className="w-full aspect-video -mt-[7%] pointer-events-none"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideoKey +
          "?&autoplay=1&mute=1&loop=1&rel=0&amp;controls=0&showinfo=0&color=white&iv_load_policy=3"
        }
        title="YouTube video player"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      ></iframe> */}

      <YouTube
        className="w-full aspect-video -mt-[7%] pointer-events-none"
        videoId={trailerVideoKey}
        opts={opts}
        onReady={onReady}
        onEnd={onEnd}
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
};

export default BgVideo;
