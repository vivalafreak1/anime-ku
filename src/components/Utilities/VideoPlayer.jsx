"use client";

import { useState } from "react";
import Youtube from "react-youtube";

export default function VideoPlayer({ youtubeId }) {
  const [playing, setPlaying] = useState(true);

  const handleVideoPlayer = () => {
    setPlaying((prevState) => !prevState);
  };

  const option = {
    width: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          onClick={handleVideoPlayer}
          className="float-right px-3 mb-1 rounded-full text-color-primary bg-color-secondary"
        >
          X
        </button>
        <Youtube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          onError={() => alert("Video rusak, silahkan refresh halaman")}
        />
      </div>
    );
  };

  const ButtonOpenPlayer = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className="fixed w-32 text-xl transition-all rounded shadow-xl bottom-5 right-5 bg-color-primary text-color-dark hober:bg-color-accent"
      >
        Tonton Trailer
      </button>
    );
  };

  return playing ? <Player /> : <ButtonOpenPlayer />;
}
