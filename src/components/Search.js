const Search = () => {
    return ( 
    <form className="d-flex ">
     <div class="form-group col-6 m-2 ">
      <input type="text" class="form-control" id="searchInput" placeholder="Enter book name"/>
     </div>
     <button type="submit" class="btn btn-outline-warning m-2">Submit</button>
    </form>
     );
}
 
export default Search;