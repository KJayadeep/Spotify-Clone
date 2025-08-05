import React from "react";
import { useState, useEffect, useRef } from "react";
import Player from "./Components/player";
import "./css/App.css";
import Nav from "./Components/Nav";
import LeftBar from "./Components/leftBar";
import RightBar from "./Components/rightbar";
import LikedSongs from "./pages/likedSongs";
import LocalAlbum from "./pages/LocalAlbum";
import { Routes, Route } from "react-router-dom";

import {
  imgContext,
  textContext,
  artistContext,
  contetnContext,
  playContext,
  songContext,
} from "./Context/context";
import img1 from "./assets/ab67616d00001e02f978b9cd754ead061bc3fcb9.jpeg";

function App() {
  const [size, setSize] = useState(400);
  const [size2, setSize2] = useState(350);
  const [img, setImg] = useState(img1);
  const [Title, setTitle] = useState();
  const [Artist, setArtist] = useState();
  const [content, setContent] = useState();
  const [play, setPlay] = useState(false);
  const [songId, setSongId] = useState(0);

  function resize(e) {
    const newSize = Math.min(400, Math.max(e.clientX, window.innerWidth * 0.2));
    setSize(newSize);
  }

  function resize2(e) {
    const newSize2 = Math.min(
      350,
      Math.min(window.innerWidth - e.clientX, window.innerWidth * 0.3)
    );
    setSize2(newSize2);
  }

  const handleMouseDown = (resizef) => {
    document.addEventListener("mousemove", resizef);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", resizef);
    });
  };

  return (
    <>
      <songContext.Provider value={{ songId, setSongId }}>
        <playContext.Provider value={{ play, setPlay }}>
          <contetnContext.Provider value={{ content, setContent }}>
            <artistContext.Provider value={{ Artist, setArtist }}>
              <textContext.Provider value={{ Title, setTitle }}>
                <imgContext.Provider value={{ img, setImg }}>
                  <div
                    className=" grid  rounded-xl gap-[8px]"
                    style={{ gridTemplateColumns: `${size}px 1fr ${size2}px` }}
                  >
                    <div className="bg-black min-h-[64px] rounded-md col-span-3">
                      <Nav />
                    </div>

                    <div className="h-[calc(100vh-152px)]  rounded-md">
                      <LeftBar />
                    </div>

                    <div className="h-[calc(100vh-152px)] min-w-[20%] bg-gray-950 rounded-md relative">
                      <div
                        className="h-full w-1 rounded-md absolute active:bg-white transition-all ease-in-out -left-1.5 cursor-grab"
                        onMouseDown={() => handleMouseDown(resize)}
                      ></div>
                      <Routes>
                        <Route path="/" element={<LocalAlbum />} />
                        <Route path="/LikedSongs" element={<LikedSongs />} />
                      </Routes>
                    </div>
                    <div className="h-[calc(100vh-152px)]  rounded-md relative">
                      <div
                        className="h-full w-1 rounded-md absolute hover:bg-blue active:bg-white cursor-ew-resize transition-all ease-in-out -left-1.5 cursor-grab"
                        onMouseDown={() => handleMouseDown(resize2)}
                      ></div>
                      <RightBar />
                    </div>
                    <div className="col-span-3">
                      <Player />
                    </div>
                  </div>
                </imgContext.Provider>
              </textContext.Provider>
            </artistContext.Provider>
          </contetnContext.Provider>
        </playContext.Provider>
      </songContext.Provider>
    </>
  );
}

export default App;
