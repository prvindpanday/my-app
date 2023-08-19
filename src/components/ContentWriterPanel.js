import React, { useState } from 'react';
import BlogForm from './BlogForm';
import './ContentWriterPanel.css'; // Import the CSS file

function ContentWriterPanel({ onAddBlog }) {
  const [blogs, setBlogs] = useState([]);
  const [editingBlogId, setEditingBlogId] = useState(null);
  const [updatedContent, setUpdatedContent] = useState('');

  const handleAddBlog = (newBlog) => {
    // Generate a unique ID for the new blog
    newBlog.id = Date.now();
    setBlogs([...blogs, newBlog]);
  };

  const handleUpdateBlog = (blogId) => {
    const updatedBlogs = blogs.map((blog) =>
      blog.id === blogId ? { ...blog, content: updatedContent } : blog
    );
    setBlogs(updatedBlogs);
    setEditingBlogId(null);
    setUpdatedContent('');
  };

  const handleDeleteBlog = (blogId) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== blogId);
    setBlogs(updatedBlogs);
  };

  return (
    <div className="content-writer-panel">
      <h2>Content Writer Panel</h2>
      <BlogForm onAddBlog={handleAddBlog} />
      <div className="blog-list">
        <h3>Your Blogs</h3>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id} className="blog-item">
              <h4>{blog.title}</h4>
              {editingBlogId === blog.id ? (
                <div>
                  <textarea
                    value={updatedContent}
                    onChange={(e) => setUpdatedContent(e.target.value)}
                  />
                  <button onClick={() => handleUpdateBlog(blog.id)}>
                    Save
                  </button>
                </div>
              ) : (
                <p>{blog.content}</p>
              )}
              {editingBlogId !== blog.id && (
                <div>
                  <button onClick={() => setEditingBlogId(blog.id)}>
                    Edit
                  </button>
                  <button onClick={() => handleDeleteBlog(blog.id)}>
                    Delete
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ContentWriterPanel;
