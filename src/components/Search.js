const Search = () => {
    return ( 
    <form className="d-flex ">
     <div class="form-group col-7 m-2 ">
      <input type="text" class="form-control" id="searchInput" placeholder="Enter book name"/>
     </div>
     <button type="submit" class="btn btn-outline-primary m-2">Submit</button>
     <button className=" btn btn-outline-warning m-2">add shelf</button>
    </form>
     );
}
 
export default Search;