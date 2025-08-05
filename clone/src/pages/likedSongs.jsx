import React from "react";
import SongCard from "../Components/songCard";
import { songs } from "../assets/assets";

function LikedSongs() {
  return (
    <div className="h-full bg-gray-900 rounded-md  overflow-auto">
      <div className="h-[186px] p-5  flex flex items-end gap-3 bg-gradient-to-t from-indigo-950 to-indigo-800 sticky top-0 relative">
        <div className="h-[128px] w-[128px] bg-gradient-to-tl from-white to-indigo-600 rounded-md flex items-center justify-center text-xl">
          🤍
        </div>
        <div className="text-white flex flex-col items-start justify-center">
          <h3 className="font-bold text-white-400 text-[8vmin]">Liked Songs</h3>
          <p>Playlist</p>
        </div>
        <svg
          className="absolute right-10 bottom-11 fill-green-400"
          width="64"
          height="64"
          viewBox="0 0 110 110"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M55.0039 0C85.3633 0 110.008 24.6441 110.008 54.9995C110.008 85.3559 85.3633 110 55.0039 110C24.6446 110 0 85.3559 0 54.9995C0 24.6441 24.6446 0 55.0039 0ZM48.5749 33.0133C48.5749 31.7902 47.5034 30.7965 46.3426 30.7965H37.0562C35.8061 30.7965 34.8239 31.7902 34.8239 33.0133V76.7162C34.8239 77.9402 35.8061 78.9339 37.0562 78.9339H46.3426C47.5034 78.9339 48.5749 77.9402 48.5749 76.7162V33.0133ZM76.0769 33.0133C76.0769 31.7902 75.0947 30.7965 73.8446 30.7965H64.5582C63.3081 30.7965 62.3259 31.7902 62.3259 33.0133V76.7162C62.3259 77.9402 63.3081 78.9339 64.5582 78.9339H73.8446C75.0947 78.9339 76.0769 77.9402 76.0769 76.7162V33.0133Z"
          />
        </svg>
      </div>
      <div className="h-full bg-gradient-to-t to-indigo-950 p-3">
        {songs.map((song) =>
          song.liked === true ? <SongCard song={song} key={song.id} /> : null
        )}
      </div>
    </div>
  );
}

export default LikedSongs;
