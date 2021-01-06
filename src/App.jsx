import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
// import { createApi } from 'unsplash-js';
import './App.css';
import PostList from './PostList'
import Navbar from './Navbar'

const App = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('hi');
  const [page, setPage] = useState('1');
  // const [dataLength, setDataLength] = useState(0);

  const accessKeyUnsplash = '6c446b49b72a4c559d9b9d67183d5c1de1981d16f309063c3b994086e6ce1a26';
  const baseUrlUnsplash = 'https://api.unsplash.com';
  const url = `${baseUrlUnsplash}/search/photos?query=${query}&page=${page}&client_id=${accessKeyUnsplash}`

  useEffect(() => {
    fetch(url, { headers :
      { 'Content-Type': 'application/json',
        'Accept': 'application/json' }
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setItems(data.results)
        // setDataLength(data.total)
        // setPage(page+1)
      })
  }, [])

  return (
    <>
      <Navbar />
      <div className="container w-25">
        <PostList items={items} />
      </div>

    </>
  );
}

export default App;
