import React, { Component } from 'react';

class Post extends Component {
  render() {

  const { item } = this.props;

    return(
      <div className="card text-white my-2 shadow">
        <img src={item.urls.small} className="card-img" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title">{item.user.username}</h5>
          <p className="card-text">{item.alt_description}</p>
        </div>
      </div>
    )
  }
}

export default Post
