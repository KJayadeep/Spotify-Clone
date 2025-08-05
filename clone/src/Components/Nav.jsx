import React from "react";
import folder from "../assets/folder.png";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

function Nav() {
  const notify = () => toast("Home");

  return (
    <>
      {/* navbar */}
      <div className="flex items-center justify-between h-full px-[20px]">
        <img src="/spotify-icon.svg" className="h-[32px] w-[32px]" />

        <div className="flex gap-3">
          <Link to="/"
            className="relative p-2 bg-gray-900 text-white rounded-[50px] hover:bg-gray-800 
  after:content-['Home'] after:absolute after:-bottom-8 after:bg-gray-900 after:text-white 
  after:z-10 after:left-0 after:w-full after:rounded-md after:text-center 
  after:opacity-0 hover:after:opacity-100 after:transition-opacity ease-in "
            onClick={notify}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32px"
              height="32px"
              fill="white"
            >
              <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 10 21 L 10 14 L 14 14 L 14 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z" />
            </svg>
          </Link>
          <div className="flex items-center bg-gray-900  rounded-full px-3 gap-2">
            <label for="input">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="32px"
                height="32px"
                fill="white"
              >
                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
              </svg>
            </label>
            <input
              id="input"
              type="text"
              placeholder="What do you want to play?  "
              className="w-100 bg-gray text-white border-r-2 p-1 focus:outline-none"
            />
            <span className="bg-white p-2 rounded-full">
              <img src={folder} className="h-[20px] w-[20px]" />
            </span>
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <span className="h-[48px] w-[48px] rounded-full hover:bg-gray-800 flex items-center justify-center">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              fill="white"
              width="16px"
              height="16px"
              viewBox="0 0 120.641 122.878"
              enable-background="new 0 0 120.641 122.878"
              xml:space="preserve"
            >
              <g>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M68.16,6.889c18.129,3.653,31.889,19.757,31.889,38.921 c0,22.594-2.146,39.585,20.592,54.716c-40.277,0-80.366,0-120.641,0C22.8,85.353,20.647,68.036,20.647,45.81 c0-19.267,13.91-35.439,32.182-38.979C53.883-2.309,67.174-2.265,68.16,6.889L68.16,6.889z M76.711,109.19 c-1.398,7.785-8.205,13.688-16.392,13.688c-8.187,0-14.992-5.902-16.393-13.688H76.711L76.711,109.19z"
                />
              </g>
            </svg>
          </span>
          <div className="h-[48px] w-[48px] bg-orange-400 rounded-full flex items-center justify-center">
            <h1 className="text-1xl">J</h1>
          </div>
        </div>
      </div>
      <ToastContainer theme="dark" />
    </>
  );
}

export default Nav;
