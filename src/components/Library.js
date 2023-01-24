import Search from "./Search";
import Display from "./Display";
import Form from "./Form";


const Library = () => {
    return ( 
        <div className="container-fluid ">
            <h1 className="text-center text-warning">READRIOT </h1>
          <div className="d-flex justify-content-between">
           <div className="col-8  ">
             <Search />
             <Display />
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