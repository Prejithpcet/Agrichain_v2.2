//import React from 'react'
import { useNavigate } from "react-router-dom";
export default function Logout() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <p className="mt-20 text-[32px] font-bold text-[#00714F]">
          Confirm Logout
        </p>
        <p className="text-[16px] font-semibold text-gray-400 text-center">
          Are you sure you want to logout
        </p>
        <div className="bg-[#00714F] text-white px-4 py-2 w-fit mt-4 rounded-md font-semibold hover:scale-105 hover:opacity-90 transition-all">
          <button onClick={handleClick}>Logout</button>
        </div>
      </div>
    </>
  );
}
