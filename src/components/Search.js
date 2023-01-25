import React, { useState } from 'react';
import {Link} from "react-router-dom"

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(searchInput === '') return;
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=books+${searchInput}&key=AIzaSyAbr_mnO88bXbeseUjO5aX1L2xXQCoVr_c`
    );
    const data = await response.json();
    console.log(data)
    setResults(data.items);
  }

  const card = <div className=' d-flex  row mb-3 '>
      {results.map((result) => (
        <div key={result.id}  className= "card mb-5 me-3 bg-warning" style={{width: "21rem"}} >
            {result.volumeInfo.imageLinks && (
            <img src={result.volumeInfo.imageLinks.smallThumbnail  } alt={result.volumeInfo.title} className="card-img-top  img-fluid"  />
          )}
        <div className='card-body'>
          <h5 className='card-title'>{result.volumeInfo.title}</h5>
          <p className='card-text'> author: { result.volumeInfo.authors}</p>
          <p className='card-text'> {result.searchInfo.textSnippet}</p>
          <div className='d-flex justify-content-between'>
          <a className='card-text btn btn-outline-dark' target='_blank' href={result.volumeInfo.previewLink}>buy book</a>
           <Link to = "/shelf"><button className='btn btn-outline-dark'>add to shelf</button></Link> 
          </div>
        </div>
        </div>
      ))}
    </div>
  

  return (
    <div>
    <form className="d-flex mt-4 justify-content-center mb-5" onSubmit={handleSubmit}>
      <div className="form-group col-8 m-2">
        <input
          type="text"
          className="form-control"
          id="searchInput"
          placeholder="Enter book name e.g harry potter"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-outline-warning m-2">
        Submit
      </button>
    </form>
    <div className='container'>
      {card}
    </div>
      

  </div>
  );
};

export default Search;


