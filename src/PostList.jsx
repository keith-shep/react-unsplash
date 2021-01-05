import React, { Component } from 'react';
import Post from './Post'

class PostList extends Component {
  render() {
    const { items } = this.props;

    return(
      <div className="post-list">
        {items.map((item) => <Post item={item} key={item.id}/>)}
      </div>
    )
  }
}

export default PostList
