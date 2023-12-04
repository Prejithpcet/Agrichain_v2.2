import React from "react";

export default function UserCard({ user }) {
  return (
    <div className="flex gap-2">
      <h3>{user.name}</h3>
      <p>Email: {user.location}</p>
      <p>Status: {user.stage}</p>
      <button>Accept</button>
      <button>Reject</button>
    </div>
  );
}
