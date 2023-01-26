import React, { useState, useEffect } from 'react';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);
  const [allResults, setAllResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=books+&key=AIzaSyAbr_mnO88bXbeseUjO5aX1L2xXQCoVr_c`
      );
      const data = await response.json();
      setAllResults(data.items);
      setResults(data.items);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handleSearchInput = async event => {
    setSearchInput(event.target.value);
    setIsLoading(true);
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${event.target.value}&key=AIzaSyAbr_mnO88bXbeseUjO5aX1L2xXQCoVr_c`);
    const data = await response.json();
    setAllResults(data.items);
    setResults(data.items);
    setIsLoading(false);
  }

  useEffect(() => {
    const filteredResults = allResults
      .filter(result =>
        result.volumeInfo.title.toLowerCase().includes(searchInput.toLowerCase())
      )
      .sort((a, b) => {
        const titleA = a.volumeInfo.title.toLowerCase();
        const titleB = b.volumeInfo.title.toLowerCase();
        const search = searchInput.toLowerCase();
        if (titleA.startsWith(search) && !titleB.startsWith(search)) {
          return -1;
        }
        if (!titleA.startsWith(search) && titleB.startsWith(search)) {
          return 1;
        }
        return 0;
      });
    setResults(filteredResults);
  }, [searchInput, allResults]);


  return (
    <div>
      <form className="d-flex mt-4 justify-content-center mb-5">
        <div className="form-group col-8 m-2">
          <input
            type="text"
            className="form-control"
            id="searchInput"
            placeholder="Enter book name e.g harry potter"
            value={searchInput}
            onChange={handleSearchInput}
          />
        </div>
        <button
          type="button"
          className="btn btn-outline-warning m-2"
          onClick={() => setResults(allResults)}
        >
          Search
        </button>
      </form>
      <div className='container'>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className=' d-flex  row mb-3 '>
            {results.map((result) => (
              <div key={result.id}  className= "card mb-5 me-3 bg-warning" style={{width: "21rem"}} >
                  {result.volumeInfo.imageLinks && (
                  <img src={result.volumeInfo.imageLinks.smallThumbnail  } alt={result.volumeInfo.title} className="card-img-top  img-fluid"  />
                )}
              <div className='card-body '>
                <h5 className='card-title'>{result.volumeInfo.title}</h5>
                <p className='card-text'> Author: :{ result.volumeInfo.authors}</p>
<p className='card-text'> {result.volumeInfo.description}</p>
                <div className='d-flex justify-content-between'>
                <a className='card-text btn btn-outline-dark' target='_blank' href={result.volumeInfo.previewLink}>buy book</a>
                <button className='btn btn-outline-dark'>add to shelf</button>
            </div>
          </div>
          </div>
        ))}
      </div>
    )}
  </div>
</div>
);
};

export default Search;