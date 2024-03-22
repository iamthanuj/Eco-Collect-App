import React from "react";

function SideBar({handleTab}) {
  return (
    <div className="w-[300px] bg-mainColor fixed top-[80px] bottom-0 left-0 flex justify-center items-center">
      <div className=" flex flex-col gap-5">
        <button 
        onClick={()=>{handleTab("collection")}}
        className="bg-white font-semibold w-[150px] h-[40px] rounded-md hover:bg-secendoryColor hover:text-white">Collection</button>
        <button
        onClick={()=>{handleTab("clients")}}
        className="bg-white font-semibold w-[150px] h-[40px] rounded-md hover:bg-secendoryColor hover:text-white">Clients</button>
        <button
        onClick={()=>{handleTab("reward")}}
        className="bg-white font-semibold w-[150px] h-[40px] rounded-md hover:bg-secendoryColor hover:text-white">Reward Score</button>
        <button className="bg-white font-semibold w-[150px] h-[40px] rounded-md hover:bg-secendoryColor hover:text-white">Special Notices</button>
      </div>
    </div>
  );
}

export default SideBar;
