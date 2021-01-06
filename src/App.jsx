import { useState, useEffect } from 'react';
// import { createApi } from 'unsplash-js';
import './App.css';
import PostList from './PostList'
import Navbar from './Navbar'

const App = () => {
  const [items, setItems] = useState([]);

  const accessKeyUnsplash = '6c446b49b72a4c559d9b9d67183d5c1de1981d16f309063c3b994086e6ce1a26';
  const baseUrlUnsplash = 'https://api.unsplash.com';
  let query = 'london'
  const url = `${baseUrlUnsplash}/search/photos?query=${query}&client_id=${accessKeyUnsplash}`


  useEffect(() => {
    fetch(url, { headers : { 'Content-Type': 'application/json','Accept': 'application/json' } })
      .then(response => response.json())
      .then(data => setItems(data.results))
  }, [])

  return (
    <div>
      <Navbar />
      <div className="container w-25">
        <PostList items={items} />
      </div>
    </div>
  );
}

export default App;
