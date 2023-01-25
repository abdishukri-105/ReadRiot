 const Shelf = () => {
    return ( 
        <div>
     <h3 className="text-warning"> create book shelf</h3>
  <form className="w-100 d-flex  justify-content-between mt-3">
         <div class="form-group  col-6">
        <input type="text" class="form-control mt-1" id="bookName" placeholder="shelf name"/>
      </div>
       <div className="col-5">
         <button className=" btn btn-outline-warning mt-1">add shelf</button>
       </div>
      
     </form>
   </div>
      );
 }
 
export default Shelf;
