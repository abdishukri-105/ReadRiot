const Shelf = ({shelf}) => {
    return ( 
        <div>
             <div>
      {shelf.map((book, index) => (
        <div key={index}>
          <h3>{book.volumeInfo.title}</h3>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
          <p>{book.volumeInfo.description}</p>
        </div>
      ))}
    </div>
       </div>
     );
}
 
export default Shelf;