import '../App.css';

const Shelf = ({shelf, removeFromShelf}) => {

    return ( 
         
    <div className=" pt-5 ml-4 mr-4 grid grid-cols-5 gap-2   ">
          {/* <h2 className="fw-bold text-center mt-4"> Your Shelf</h2> */}
          {shelf.length > 0 ? ( 
            shelf.map((book) => (
              <div key={book.id} className="p-2 relative w-56 max-w-sm rounded overflow-hidden shadow-lg bg-amber-400" >
                  <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} className=" w-56 rounded-xl h-64  transform  hover:scale-105 transition duration-150 ease-in-out" />
                  <div className="p-1">
                     
                        <p className='font-bold'>{book.volumeInfo.title}</p>
                     
                     
                      <p className=' p-1 italic '> { book.volumeInfo.authors}</p>
                   
                    <button className="inline-block px-3 py-1 bg-yellow-700 text-white  font-medium text-xs leading-tight uppercase rounded hover:bg-yellow-600  hover:text-black" onClick={() => removeFromShelf(book.id)}>remove from shelf</button>
                  </div>
              </div>
              ))
             ) : (
            <h5 className="font-bold  uppercase ">You don't have any books.</h5>
          )}
    </div>
      
     );
}
 
export default Shelf;

