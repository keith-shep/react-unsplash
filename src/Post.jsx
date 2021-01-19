import React from 'react';
import Animatecss from 'animate.css'

const Post = (props) => {
  const { item } = props;
  
  return(
    <div className="card text-white my-2 shadow animate__animated animate__fadeIn">
      <img src={item.urls.small} className="card-img" alt="..." />
      <div className="card-img-overlay">
        <a href={item.links.html} className="text-white text-decoration-none stretched-link" rel="noopener noreferrer" target="_blank">
          <h5 className="card-title">{item.user.username}</h5>
        </a>
        <p className="card-text">{item.alt_description}</p>
      </div>
    </div>
  )
}

export default Post
