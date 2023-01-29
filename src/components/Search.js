import '../App.css';
import {Link} from "react-router-dom"

const Search = ({addToShelf,results,isLoading, setSearchInput, handleSubmit, searchInput}) => {

  return (
    <div className='bg-yellow-100 pt-3'>
          <h1 className='text-center text-xl font-bold'>search for your favourite books here</h1>
        <form className="  d-flex  justify-content-center mb-3" onSubmit={handleSubmit}>
        
            <div className="form-group d-flex  col-9 m-2">
              <input
                type="text"
                className="form-control me-3"
                id="searchInput"
                placeholder="Enter book name e.g harry potter"
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
              />
              <button className="btn btn-outline-dark">search</button>
            </div>
        </form>
        <div className=''>
            {isLoading ? (
              <div>Loading...</div>
            ) : (
            <div className=' grid grid-cols-5 gap-2 mr-5 ml-7  '>
             {results.map((result) => (
              <div key={result.id}  className= " p-2 relative w-56 max-w-sm rounded overflow-hidden shadow-lg bg-amber-400"  >
                      {result.volumeInfo.imageLinks && (
                      <img src={result.volumeInfo.imageLinks.smallThumbnail  } alt={result.volumeInfo.title} className="w-56 rounded-xl h-64  transform hover:scale-105 transition duration-150 ease-in-out"  />
                    )}
                  <div className=' p-1'>
                      <h6 className='font-bold p-1'>{result.volumeInfo.title}</h6>
                      <p className='py-1'> { result.volumeInfo.authors}</p>
                      <div className=' d-flex justify-between '>
                        <a className='inline-block px-1 py-1 bg-yellow-700 text-white  font-medium text-xs leading-tight uppercase rounded hover:bg-yellow-600  hover:text-black' target='_blank' href={result.volumeInfo.previewLink}>see more</a>
                        <Link to="/shelf">
                          <button type = "button" className='inline-block px-3 py-1 bg-yellow-700 text-white  font-medium text-xs leading-tight uppercase rounded hover:bg-yellow-600  hover:text-black' onClick={() => addToShelf(result)}>add to shelf</button>
                        </Link>
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


