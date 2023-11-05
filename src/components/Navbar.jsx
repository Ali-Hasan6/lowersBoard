import React, { useState, useEffect } from "react";

function Navbar() {
  
  return <div className=" border-2 border-red-500 dark:to-blue-500 rounded-md w-fit p-2 cursor-pointer">
    <button onClick={handleThemeSwitch}>Clcik Me</button>
  </div>;
}

export default Navbar;
