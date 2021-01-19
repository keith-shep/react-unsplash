import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './App.css';
import PostList from './PostList'
import Navbar from './Navbar'
import Search from './Search'
import Loader from './Loader'

const App = () => {
  //TODO: 
  //make search bar collapse when mobile,
  // experiment with bootstrap colors

  //Unsplash Dotenv api key
  const accessKeyUnsplash = process.env.REACT_APP_ACCESS_KEY_UNSPLASH;
  const baseUrlUnsplash = 'https://api.unsplash.com';
// add static spinner
  // States to build url to fetch from
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('london');
  const [dataLength, setDataLength] = useState(0);
  const [isLoading, setIsLoading] = useState(false)

  // Init first 10 posts and
  // Reset posts for new query with Search.jsx component
  useEffect(() => {
    console.log("Sending new query...")
    loadMoreData();
  }, [query])

  // Init more posts after the initial 10
  const loadMoreData = () => {
    setIsLoading(true)
    setPage(page+1)

    const url = `${baseUrlUnsplash}/search/photos?query=${query}&page=${page}&client_id=${accessKeyUnsplash}`

    fetch(url, { headers :
      { 'Content-Type': 'application/json',
        'Accept': 'application/json' }
      })
      .then(response => response.json())
      .then(data => {
        console.log('loading next 10 posts...')
        setItems(items.concat(data.results))
        setDataLength(dataLength + data.results.length)
        setIsLoading(false)
      })
  }

  return (
    <>
      <Navbar />
      {isLoading ? <Loader /> : ""}
      <div className="container col-md-6">
        <Search setQuery={setQuery} setPage={setPage} setItems={setItems} query={query}/>
        <h2 className="text-secondary">Pictures of "{query}"</h2>
        <InfiniteScroll
          dataLength={dataLength}
          next={loadMoreData}
          hasMore={true}
          >
          <PostList items={items} />
        </InfiniteScroll>
      </div>
    </>
  );
}

export default App;
