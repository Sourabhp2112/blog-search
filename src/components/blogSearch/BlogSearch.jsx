import React, { useState } from "react";
import './blogSearch.css'
// import React from 'react'
import FilterBar from "../filterBar/FilterBar";
import BlogList from "../blogList/BlogList";

function BlogSearch() {
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("All");
  
    const blogs = [
      { id: 1, title: "React Basics", category: "React", content: "Learn React basics here." },
      { id: 2, title: "React Hooks", category: "React", content: "How React hooks work" },
      { id: 3, title: "Node.js Overview", category: "Node.js", content: "Introduction to Node.js." },
      { id: 4, title: "CSS Tricks", category: "CSS", content: "Tips and tricks for CSS." },
      { id: 5, title: "MongoDB Guide", category: "MongoDB", content: "Guide to MongoDB basics." },
      { id: 6, title: "MongoDB Database", category: "MongoDB", content: "Guide to MongoDB Database." },
      { id: 7, title: "Props Concepts", category: "React", content: "Working with the props" },
    ];
  
    const filteredBlogs = blogs.filter((blog) => {
      return (
        (category === "All" || blog.category === category) &&
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  
    return (
      <div className="blog-search">
        <h1>Search Blogs</h1>
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-box"
        />
        <FilterBar category={category} setCategory={setCategory} />
        <BlogList blogs={filteredBlogs} />
      </div>
    );
}
export default BlogSearch;
