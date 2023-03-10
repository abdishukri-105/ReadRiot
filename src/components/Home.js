import {Link , useNavigate} from "react-router-dom"

const Home = ({setIsAuthenticated}) => {
   const navigate = useNavigate()
   const handleSubmit=(e)=>{
       e.preventDefault()
       navigate('/search')
      console.log("go to home now")
      setIsAuthenticated(true)
    }
    
return (
  <div className="">
      <div className="jumbotron card">
        <img src="./images/bg.jpg " className="card-img img-fluid" alt="bookshelf" />
        <div className="card-img-overlay ">
            <div className="d-flex justify-content-around mt-5">
               <div className="mt-4 p-5 card  col-5">
                 <p className=" text-3xl  fs-5 fw-bold" style={{lineHeight: "3rem" }}>
                    Our app is built on the Google Books API, which means you have access to millions of books, including best sellers, classic literature, and new releases.
                 </p>
                </div>
             <div className="card col-4 mt-4 justify-content-center">
                <h4 className="ms-5 m-3 mt-4 fw-bolder">please sign In to continue</h4>
                <form className="col-8  ms-5" onSubmit={handleSubmit} >
                    <div class="form-group mb-3">
                      <label for="username " className="mb-2 fw-bold">Username</label>
                      <input type="text" class="form-control" id="username" placeholder="Enter username"
                       required/>
                    </div>
                    <div class="form-group mb-3">
                      <label for="password" className="mb-2 fw-bold">Password</label>
                      <input type="password" class="form-control" id="password" placeholder="Enter password" 
                      required/>
                    </div>
                  
                      <button type="submit" className="btn btn-outline-warning me-4 mb-4"  > SIGN IN</button> 
                  
                    <p className="fw-bold">Don't have account? 
                    <Link to="/register">
                      <button className="btn btn-outline-warning ms-3">sign up</button> 
                    </Link>
                    </p>
                </form>
              </div>
           </div>
         </div>
      </div>
   </div>

);
};

export default Home;

