import React, { useState } from "react";

import { UilPlusSquare } from '@iconscout/react-unicons'
import { UilDatabase } from '@iconscout/react-unicons'
import { UilLock } from '@iconscout/react-unicons'
import { UilAirplay } from '@iconscout/react-unicons'
import { UilFilePlus } from '@iconscout/react-unicons'
import { UilAngleDown } from '@iconscout/react-unicons'
import ModalEditor from "./components/ModalEditor";
function MainPage() {

    const [openModal, setOpenModal] = useState(false);
    return (
        <div className=" w-full h-screen px-10 py-14 space-y-10 flex flex-col justify-center items-center bg-white dark:bg-black dark:text-white ">
            
            {/* Heading */}
            <h2 className=" p-3 text-2xl font-bold w-full text-left dark:text-white dark:ring-1 ring-slate-50 rounded">Documentation center - admin</h2>

            {/* Dimentions */}
            <div className=" w-full h-fit flex justify-between items-center py-4 px-8  shadow-sm shadow-black dark:ring-1 ring-slate-50 rounded">
                <p>Select Dimentions</p>
                <div><UilAngleDown /></div>
            </div>

            {/* Content Folders and Editors Container */}
            <div className=" w-full h-4/6 flex justify-between items-center space-x-4 ">

                {/* Folders Container */}
                <div className=" w-[40%] h-full flex flex-col shadow-sm shadow-black dark:ring-1 ring-slate-50 rounded">

                    {/* Header and Add */}
                    <div className="bg-[#EDEDED] dark:bg-none dark:text-black flex justify-between items-center px-5 py-2">
                        <p className="">Content Groups</p>

                        {/* Will be used to add folders */}
                        <div className=" bg-white px-1 rounded-sm"><UilPlusSquare className="cursor-pointer" width={20} /></div>
                    </div>

                    {/* Root Content */}
                    <div className=" bg-[#EDEDED]/40 flex items-center px-5 py-2">
                        <div className=" -ml-1 pr-2"><UilDatabase className="text-blue-600" /></div>
                        <p className=" font-light">Root content for dimension</p>
                    </div>

                    {/* Folder and Secret folders */}
                    <div className=" pt-10 ">
                        <p className=" w-full px-5">Folders</p>
                        <hr />

                        {/* Folders Section  */}
                        <div className=" w-full py-3">
                            <p className=" text-sm text-black/40 bg-yellow-200 w-fit rounded-sm px-2 ml-5">No folders here yet</p>
                        </div>

                        <hr />

                        {/* Secret Folder */}
                        <div className=" w-full flex py-3">
                            <p className=" pl-5 pr-2">Secret folder</p>
                            <div><UilLock width={20} /></div>
                        </div>
                        <hr />

                        <p className=" text-sm text-black/40 bg-yellow-200 w-fit rounded-sm px-2 ml-5 mt-2">No folders here yet</p>
                    </div>


                </div>

                {/* Editors Container */}
                <div className=" w-[60%] h-full  text-black shadow-sm shadow-black dark:ring-1 ring-slate-50 rounded">

                    {/* Header and Form */}
                    <div className="bg-[#EDEDED] flex justify-between items-center px-5 py-2" >
                        <p>Photos and Folders</p>

                        <form className="flex justify-center items-center" action="">

                            {/* Uploader */}
                            <div className=" bg-white px-2 py-1 rounded-sm  flex justify-center items-center space-x-1  border-2">

                                <div>
                                    <UilAirplay className="cursor-pointer" width={20} />
                                </div>
                                <div>
                                    <label htmlFor="file-input" className="  rounded-md cursor-pointer">Upload</label>
                                    <input type="file" name="file-input" id="file-input" className=" hidden" />
                                </div>
                            </div>

                            {/* Editor */}
                            <div onClick={() => setOpenModal(true)} className=" bg-white flex space-x-1 px-2 py-1 border-2 cursor-pointer">
                                <UilFilePlus />
                                <p className="flex"> Add new web document </p>
                            </div>
                        </form>
                    </div>

                    {/* Main Content  */}

                    <div>
                        <ModalEditor openModal={openModal} setOpenModal={setOpenModal} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage;
