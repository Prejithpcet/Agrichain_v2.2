import React from "react";
import UserCard from "./UserCard";

export default function VerifyUser() {
  const userList = [
    {
      name: "Prejith P",
      location: "Trivandrum",
      stage: "Farmer",
    },
    {
      name: "Prejin P",
      location: "Kollam",
      stage: "Processor",
    },
  ];
  return (
    <>
      <div className="flex flex-col item-center h-screen w-full">
        <p className="text-[32px] font-bold text-[#00714F]">Admin Dashboard</p>
        {userList.map((user) => (
          <div
            key={user.name}
            className="flex flex-col gap-2 border-2 border-green-500"
          >
            <UserCard key={user.name} user={user} />
          </div>
        ))}
      </div>
    </>
  );
}
