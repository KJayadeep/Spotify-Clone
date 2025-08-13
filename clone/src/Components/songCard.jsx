import React from "react";

function songCard({ song,onClick,color}) {
  return (
    <div onClick={onClick} className={`${color ? "bg-gray-700" : "hover:bg-gray-600"}  h-[56px] flex items-center  px-2 py-8 rounded-md`}>
      <p className="text-white font-bold w-[16px]">{song.id + 1}</p>
      <div className="flex gap-3 items-center m-5">
        <img src={song.img} alt="" className="h-[50px] rounded-md" />
        <div>
          <h3 className="font-bold text-white">{song.name}</h3>
          <p className="text-white text-[10px]">{song.artist}</p>
        </div>
      </div>
    </div>
  );
}

export default songCard;
