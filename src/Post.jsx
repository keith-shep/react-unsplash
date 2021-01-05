import React, { Component } from 'react';

class Post extends Component {
  render() {

  const { item } = this.props;

    return(
      <div className="post card shadow-sm py-2 my-2 text-center">
        <img src={item.urls.small} className="card-img-top" alt={item.alt_description} />
        {item.description}
      </div>
    )
  }
}

export default Post
