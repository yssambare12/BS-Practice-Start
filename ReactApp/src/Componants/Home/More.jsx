import React, { useRef, useState } from "react";
import ControlPanel from "./ControlPanel";
import "./Home.css";
function More({ song, url, artists, cover_image }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();
  const getCurrDuration = (e) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);
    const time = e.currentTarget.currentTime;
  };
  const play = () => {
    const audio = audioRef.current;
    audio.volume = 0.1;

    if (!isPlaying) {
      setIsPlaying(true);
      audio.play();
    }

    if (isPlaying) {
      setIsPlaying(false);
      audio.pause();
    }
  };
  return (
    <div className="moreCont">
      <img src={cover_image} alt="Img" />
      <h1>{song}</h1>
      <h2>{artists}</h2>
      <audio ref={audioRef} onTimeUpdate={getCurrDuration} src={url}></audio>
      <ControlPanel play={play} isPlaying={isPlaying} />
    </div>
  );
}

export default More;
