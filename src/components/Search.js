import '../App.css';
import {Link} from "react-router-dom"

const Search = ({addToShelf,results,isLoading,handleSearchInput,searchInput}) => {

  return (
    <div>
        <form className="d-flex mt-4 justify-content-center mb-5">
            <div className="form-group d-flex  col-9 m-2">
              <input
                type="text"
                className="form-control me-3"
                id="searchInput"
                placeholder="Enter book name e.g harry potter"
                value={searchInput}
                onChange={handleSearchInput}
              />
              <button className="btn btn-outline-warning">search</button>
            </div>
        </form>
        <div className='container justify-content-center'>
            {isLoading ? (
              <div>Loading...</div>
            ) : (
            <div className=' card-section ms-4 row   card-section '>
             {results.map((result) => (
              <div key={result.id}  className= "card book-holder mb-5 me-4 bg-warning"  >
                      {result.volumeInfo.imageLinks && (
                      <img src={result.volumeInfo.imageLinks.smallThumbnail  } alt={result.volumeInfo.title} className="card-img-top card-image img-fluid"  />
                    )}
                  <div className='card-body '>
                    <div className="d-flex justify-content-between">
                      <h6 className='card-title fw-bold'>{result.volumeInfo.title}</h6>
                      {/* <p className="badge  bg-dark text-light"> pages: {result.volumeInfo.pageCount}</p> */}
                     </div>
                      <p className='card-text'> { result.volumeInfo.authors}</p>
                      {/* <p className='card-text'> {result.searchInfo.textSnippet}</p> */}
                      <div className=' d-flex justify-content-between'>
                        <a className=' btn btn-outline-dark' target='_blank' href={result.volumeInfo.previewLink}>see more</a>
                        <Link to="/shelf">
                          <button className=' btn btn-outline-dark' onClick={() => addToShelf(result)}>add to shelf</button>
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

