import React, { useState } from 'react'

const Search = (props) => {
  const { query, setQuery, setPage, setItems } = props;
  const [tempQuery, setTempQuery] = useState("london");

  const handleChange = (e) => {
    setTempQuery(e.target.value)
  }

  // Clear array of posts upon new search
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query !== tempQuery) {
      setQuery(tempQuery);
      setPage(1);
      setItems([]);
    }
  }
  
  return (
    <div>
      <form className="search-form d-grid d-sm-flex my-2" onChange={handleChange} onSubmit={handleSubmit}>
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  )
}

export default Search
