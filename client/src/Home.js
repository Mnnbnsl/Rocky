import { useRef } from "react";
import "./App.css";

export default function Home() {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  };

  return (
    <>
      {/* 🔷 NAVBAR */}
      <div className="navbar">
        <div className="logo">ISL </div>
        <div className="nav-links">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </div>

      {/*  MAIN CONTENT */}
      <div className="container">

        {/*  VIDEO */}
        <div className="video-box">
          <video ref={videoRef} className="video" src="/avatar.mp4" />
        </div>

        {/* RIGHT SIDE */}
        <div className="right-panel">

          {/*  BUTTON */}
          <div className="play-box">
            <button className="play-btn" onClick={handlePlay}>
              <img src="/music.png" alt="play" className="play-icon" />
            </button>
          </div>

          {/*  TEXT */}
          <div className="text-box">
            The avatar is performing ISL gestures.
          </div>

        </div>

      </div>
    </>
  );
}