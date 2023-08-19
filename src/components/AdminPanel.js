import React, { useState } from "react";
import UserItem from "./UserItem";
import "./AdminPanel.css";
import BlogList from "./BlogList";

const hardcodedUsers = [
  { id: 1, username: "admin", role: "ADMIN" },
  { id: 2, username: "contentwriter1", role: "CONTENT_WRITER" },
];

const hardcodedBlogs = [
  { id: 1, title: "Blog 1 Title", content: "Blog 1 Content" },
  { id: 2, title: "Blog 2 Title", content: "Blog 2 Content" },
];

function AdminPanel() {
  const [users, setUsers] = useState(hardcodedUsers);
  const [blogs, setBlogs] = useState(hardcodedBlogs);
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showBlogs, setShowBlogs] = useState(false);
  const [showAddContentWriter, setShowAddContentWriter] = useState(false);

  const handleAddContentWriter = () => {
    if (newUsername && newPassword) {
      const newContentWriter = {
        id: Date.now(),
        username: newUsername,
        password: newPassword,
        role: "CONTENT_WRITER",
      };
      setUsers([...users, newContentWriter]);
      setNewUsername("");
      setNewPassword("");
    }
  };
  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  const handleDeleteBlog = (blogId) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== blogId);
    setBlogs(updatedBlogs);
  };

  const handleUpdateBlog = (updatedBlog) => {
    const updatedBlogs = blogs.map((blog) =>
      blog.id === updatedBlog.id ? updatedBlog : blog
    );
    setBlogs(updatedBlogs);
  };
  return (
    <div>
      <div className="admin-panel">
        <h2>Admin Panel - Users</h2>
        {users.length > 0 ? (
          <div className="user-list">
            {users.map((user) => (
              <UserItem key={user.id} user={user} onDelete={handleDeleteUser} />
            ))}
          </div>
        ) : (
          <>
            <div>
              <p> No active users available</p>
            </div>
          </>
        )}

        <div className="admin-actions">
          <button
            className="add-button"
            onClick={() => setShowBlogs(!showBlogs)}
          >
            View Blogs
          </button>{" "}
          <button
            className="add-button"
            onClick={() => setShowAddContentWriter(!showAddContentWriter)}
          >
            Add Content Writer
          </button>
        </div>
        {showBlogs && (
          <BlogList
            blogs={blogs}
            onDeleteBlog={handleDeleteBlog}
            onUpdateBlog={handleUpdateBlog}
          />
        )}
        {showAddContentWriter && (
          <div>
            <div className="input-container">
              <label>Username:</label>
              <input
                type="text"
                placeholder="Enter username"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label>Password:</label>
              <input
                type="password"
                placeholder="Enter password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <button className="add-button" onClick={handleAddContentWriter}>
              Add Content Writer
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPanel;
