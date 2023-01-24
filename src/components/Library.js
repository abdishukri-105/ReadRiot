import Search from "./Search";
import Display from "./Display";
import Form from "./Form";
import Shelf from "./Shelf";


const Library = () => {
    return ( 
        <div className="container-fluid ">
       
          <div className="d-flex justify-content-between mt-4">
           <div className="col-6  ">
             <Search />
             <Display />
            </div>
            <div className="col-3 d-flex">
                <Shelf />
            </div>
            <div className=" col-3">
                <h3 className="text-center text-warning">add new book</h3>
              <Form />
            </div>
           </div>
        </div>
     );
}
 
export default Library;