import React, { Component } from 'react';

class Post extends Component {
  render() {

  const { item } = this.props;
    return(
      <div className="post card shadow-sm py-2 my-2 text-center">
        Hello from a post! my id is {item.id}
      </div>
    )
  }
}

export default Post
