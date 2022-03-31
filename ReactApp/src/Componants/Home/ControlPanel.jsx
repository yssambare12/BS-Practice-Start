import React from "react";
import "./Home.css";
function ControlPanel({ play, isPlaying }) {
  return (
    <div className="control-panel">
      {isPlaying ? (
        <button onClick={play}>
          <img
            className="playPause"
            src="https://user-images.githubusercontent.com/91772445/158011578-79cdf107-3295-4543-84dc-e8e94f104daf.png"
            alt="pause"
          />
        </button>
      ) : (
        <button onClick={play}>
          <img
            className="playPause"
            src="https://user-images.githubusercontent.com/91772445/158011490-35a17b1b-5ea7-4527-9434-5a10d8f2269d.png"
            alt="play"
          />
        </button>
      )}
    </div>
  );
}

export default ControlPanel;
