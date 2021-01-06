import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
// import { createApi } from 'unsplash-js';
import './App.css';
import PostList from './PostList'
import Navbar from './Navbar'

const App = () => {
  const accessKeyUnsplash = '6c446b49b72a4c559d9b9d67183d5c1de1981d16f309063c3b994086e6ce1a26';
  const baseUrlUnsplash = 'https://api.unsplash.com';

  const [dataLength, setDataLength] = useState(0);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('london');
  const [page, setPage] = useState(1);

  // Init first 10 posts
  useEffect(() => {
    setPage(page+1)
    const url = `${baseUrlUnsplash}/search/photos?query=${query}&page=${page}&client_id=${accessKeyUnsplash}`

    fetch(url, { headers :
      { 'Content-Type': 'application/json',
        'Accept': 'application/json' }
      })
      .then(response => response.json())
      .then(data => {
        console.log('init data')
        setItems(data.results)
        setDataLength(data.results.length)
      })
  }, [])

  // Init more posts after the initial 10
  const loadMoreData = () => {
    setPage(page+1)
    const url = `${baseUrlUnsplash}/search/photos?query=${query}&page=${page}&client_id=${accessKeyUnsplash}`

    fetch(url, { headers :
      { 'Content-Type': 'application/json',
        'Accept': 'application/json' }
      })
      .then(response => response.json())
      .then(data => {
        console.log('loading next 10 posts...')
        setDataLength(dataLength + data.results.length)
        setItems(items.concat(data.results))
      })
  }

  return (
    <React.Fragment>
      <Navbar />
        <div className="container col-md-6">
          <h2 className="text-secondary">Pictures of "{query}"</h2>
          <InfiniteScroll
            dataLength={dataLength}
            next={loadMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            >
              <PostList items={items} />
          </InfiniteScroll>
        </div>
    </React.Fragment>
  );
}

export default App;
