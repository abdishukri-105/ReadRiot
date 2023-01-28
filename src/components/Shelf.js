const Shelf = ({shelf, removeFromShelf}) => {
    return ( 
         
    <div className="container d-flex column mt-4">
          {/* <h2 className="fw-bold text-center mt-4"> Your Shelf</h2> */}
          {shelf.length > 0 ? ( 
            shelf.map((book) => (
              <div key={book.id} className="card bg-warning  me-4" style={{width: "20rem" }}>
                  <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} className="card-img-top img-fluid" style={{height: "15rem", width: "20rem"}}/>
                  <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <p className='card-title'>{book.volumeInfo.title}</p>
                        <p className="badge  bg-dark text-light"> pages: {book.volumeInfo.pageCount}</p>
                      </div>
                      <p className='card-text'> { book.volumeInfo.authors}</p>
                      <p className='card-text'> {book.searchInfo.textSnippet}</p>
                    <button className="btn btn-dark border-0" onClick={() => removeFromShelf(book.id)}>remove from shelf</button>
                  </div>
              </div>
              ))
             ) : (
            <h2 className="fw-bold text-center mt-4">You don't have any books here.</h2>
          )}
    </div>
      
     );
}
 
export default Shelf;