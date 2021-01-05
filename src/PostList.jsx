import React, { Component } from 'react';
import Post from './Post'

class PostList extends Component {
  render() {
    return(
      <div className="post-list bg-gray">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    )
  }
}

export default PostList
