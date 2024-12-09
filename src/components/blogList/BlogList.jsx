import React from 'react'
import './blogList.css'

function BlogList({blogs}) {
    return (
        <div className="blog-list">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <div key={blog.id} className="blog-item">
                <h2>{blog.title}</h2>
                <p>{blog.content}</p>
                <small>Category: {blog.category}</small>
              </div>
            ))
          ) : (
            <p className='NoBlogPara'>No blogs found.</p>
          )}
        </div>
      );
}

export default BlogList