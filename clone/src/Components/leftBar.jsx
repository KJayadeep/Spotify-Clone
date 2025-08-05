import React from "react";
import { useState, useRef } from "react";
import { VscLibrary } from "react-icons/vsc";
import { Link, NavLink } from "react-router-dom";
import "../css/App.css";

function LeftBar() {
  const scrollRef = useRef(null);
  const searchLeftRef = useRef(null);
  const searchLeftDivRef = useRef(null);

  const handleScroll = (e) => {
    if (scrollRef.current) {
      console.log(e);
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  const handleLeftSearch = () => {
    if (searchLeftRef.current) {
      searchLeftRef.current.style.width =
        searchLeftRef.current.style.width === "0px" ? "100%" : "0px";

      searchLeftDivRef.current.style.width =
        searchLeftDivRef.current.style.width === "0px" ? "200px" : "0px";
    }
  };

  return (
    <div className="h-full w-full bg-gray-900 rounded-md p-4  flex flex-col gap-3">
      {/*mini-Nav*/}
      <div className="sticky z-1 flex flex-col gap-1 shadow-cyan-500/50">
        <div className="h-10 text-white text-2xl font-Poppins font-bold flex items-center gap-2">
          <VscLibrary className="text-white" />
          <h1>Your Library</h1>
        </div>
        {/*scroll*/}
        <div
          className="text-white flex gap-3 overflow-x-auto whitespace-nowrap scrollbar-hide cursor-grab active:cursor-grabbing scroll-smooth "
          ref={scrollRef}
          onWheel={handleScroll}
        >
          <span className="p-2 px-3 bg-gray-800 rounded-full ">Playlists</span>
          <span className="p-2 px-3 bg-gray-800 rounded-full">Podcast</span>
          <span className="p-2 px-3 bg-gray-800 rounded-full">Albums</span>
          <span className="p-2 px-3 bg-gray-800 rounded-full">Artists</span>
          <span className="p-2 px-3 bg-gray-800 rounded-full">Genres</span>
          <span className="p-2 px-3 bg-gray-800 rounded-full">
            New Releases
          </span>
          <span className="p-2 px-3 bg-gray-800 rounded-full">Favorites</span>
        </div>
      </div>

      <div className="h-auto overflow-auto bg-gray-900 flex flex-col gap-1 text-white">
        <div
          className="gap-2 flex bg-gray-800 transition-all ease-in-out rounded-md"
          ref={searchLeftDivRef}
          style={{
            width: "0px",
          }}
        >
          <div
            className="h-[32px] min-w-[32px] hover:bg-gray-600 rounded-full flex items-center justify-center"
            onClick={handleLeftSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="20px"
              height="20px"
              fill="white"
            >
              <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
            </svg>
          </div>

          <input
            type="text"
            placeholder="Search in Your Library"
            id="left-search"
            className=" text-white focus:outline-none transition-all ease-in-out "
            ref={searchLeftRef}
            style={{
              width: "0px",
            }}
          ></input>
        </div>
        <NavLink
          to="/"
          className="h-[64px] p-2 hover:bg-gray-800  rounded-md flex flex gap-3"
        >
          <div className="h-[48px] w-[48px] bg-gradient-to-tl from-white to-indigo-600 rounded-md flex items-center justify-center text-xl">
            <svg
              class="SVGBGI"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="22px"
              height="22px"
              fill="white"
            >
              <path class="accent" d="M3 11h18v8H3z"></path>

              <path
                class="solid"
                d="M4.41 10h15.17c.87 0 1.7.25 2.41.72V8.5a2.5 2.5 0 0 0-2.5-2.5H12.2a.47.47 0 0 1-.35-.15l-1.12-1.12A2.49 2.49 0 0 0 8.96 4H4.5A2.5 2.5 0 0 0 2 6.5v4.22A4.34 4.34 0 0 1 4.41 10ZM19.59 12H4.41a2.43 2.43 0 0 0-2.42 2.42v3.09a2.5 2.5 0 0 0 2.5 2.5h15a2.5 2.5 0 0 0 2.5-2.5v-3.09A2.43 2.43 0 0 0 19.57 12Z"
              ></path>
            </svg>
          </div>
          <div className="text-white flex flex-col items-start justify-center">
            <h3 className="font-bold text-green-400">Local Album</h3>
            <p>Playlist</p>
          </div>
        </NavLink>

        <NavLink
          to="/LikedSongs"
          className="h-[64px] p-2 hover:bg-gray-800  rounded-md flex flex gap-3"
        >
          <div className="h-[48px] w-[48px] bg-gradient-to-tl from-white to-indigo-600 rounded-md flex items-center justify-center text-xl">
            🤍
          </div>
          <div className="text-white flex flex-col items-start justify-center">
            <h3 className="font-bold text-green-400">Liked Songs</h3>
            <p>Playlist</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default LeftBar;
