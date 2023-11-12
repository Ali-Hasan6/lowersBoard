import React, { useState, useEffect } from "react";
import {BsMoonFill} from "react-icons/bs";
import {BsFillSunFill} from "react-icons/bs";
function Navbar() {
  const [icon, setIcon] = useState(false)
  function darkMode() {
    document.documentElement.classList.remove('dark')
    setIcon(!icon)
  }

  function lightMode() {
    document.documentElement.classList.add('dark')
    setIcon(!icon)
  }
  return(
    <div className=" bg-white dark:bg-black flex justify-end px-10 py-6">
      {/* Toggle Button */}
      {icon ? 
      <div className=" text-indigo-400 cursor-pointer"><BsMoonFill className="" size={30} onClick={lightMode} /> </div>
       : 
       <div> <BsFillSunFill className=" text-indigo-400 cursor-pointer" size={30} onClick={darkMode} /> </div>}
    </div>
  )
}

export default Navbar;
