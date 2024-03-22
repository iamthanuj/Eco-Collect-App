import React from "react";

function RewardPage() {
  return (
    <div className="flex flex-col gap-3 ml-[300px] font-inter">
      <div className="w-[600px] h-[300px] bg-mainColor rounded-md">
        <h1 className="text-center font-bold text-white text-3xl mt-5">
          Manage Rewards
        </h1>
        <div className="flex flex-col gap-3 p-[20px]">
          <input type="text" name="" id="" placeholder="Reward name" />
          <input type="text" name="" id="" placeholder="Reward type" />
          <input type="text" name="" id="" placeholder="Other details" />
        </div>
        <div className="flex justify-center">
          <button className="px-[20px] py-[5px] bg-white rounded-sm">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default RewardPage;
