import React from "react";

function UserItem({ user, onDelete }) {
  console.log(user);
  return (
    <div className="admin-panel">
      <div className="user-list">
        <p>Username: {user.username}</p>
        <p>Role: {user.role}</p>
        <button onClick={() => onDelete(user.id)}>Delete</button>
      </div>
    </div>
  );
}

export default UserItem;
