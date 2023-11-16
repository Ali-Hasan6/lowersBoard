import React, { useState, useEffect } from "react";
import { BsMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";


function Navbar() {
  const [icon, setIcon] = useState(false)
  function darkMode() {

    document.documentElement.classList.add('dark')

    setIcon(!icon)
  }

  function lightMode() {
    document.documentElement.classList.remove('dark')
    setIcon(!icon)
  }
  return (
    <div className=" bg-white dark:bg-black flex justify-between px-10 py-6">
      <Link to="/logged">
        <div className=" p-1 border-2 border-black rounded bg-indigo-400 text-white cursor-pointer hover:scale-105 duration-150  ">LogIn</div>
      </Link>
      {/* Toggle Button */}
      {icon ?
        <div className=" text-indigo-400 cursor-pointer"><BsMoonFill className="" size={30} onClick={lightMode} /> </div>
        :
        <div> <BsFillSunFill className=" text-indigo-400 cursor-pointer" size={30} onClick={darkMode} /> </div>}
    </div>
  )
}

export default Navbar;
