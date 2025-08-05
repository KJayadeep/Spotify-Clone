import React, { useContext } from "react";
import { MdQueuePlayNext } from "react-icons/md";
import weeknd from "../assets/ab67616d0000b273f0f6528e4eb6588b48d5128e.jpeg";
import {
  imgContext,
  textContext,
  artistContext,
  contetnContext,
} from "../Context/context";

function rightBar() {
  const Value = useContext(imgContext);
  const value2 = useContext(textContext);
  const value3 = useContext(artistContext);
  const value4 = useContext(contetnContext);

  return (
    <div className="h-full w-full bg-gray-900 rounded-md px-4 py-2 flex flex-col gap-3 ">
      <div className="flex  items-center z-1 gap-2 sticky top-0 bg-gray-900">
        <MdQueuePlayNext fill="white" className="h-[20px] w-[20px]" />
        <h1 className="text-xl text-white font-bold">Queue</h1>
      </div>
      <div className="overflow-auto">
        <div>
          <img src={Value.img} className="rounded-md" />
        </div>
        <div className="my-3">
          <h1 className="text-white font-bold text-3xl">{value2.Title}</h1>
          <h3 className="text-white font-bold text-md">{value3.Artist}</h3>
        </div>
        <div className="flex flex-col bg-black relative  rounded-md">
          <img src={Value.img} className="rounded-md"></img>.
          <h3 className=" absolute top-2 left-2 text-white font-bold">
            About The Artist
          </h3>
          <div className="text-white px-3">
            <h1 className="text-xl font-bold m-0">{value3.Artist}</h1>
            <p className="py-1 text-[0.9rem]">{value4.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default rightBar;
