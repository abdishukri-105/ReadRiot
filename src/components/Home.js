import {Link} from "react-router-dom"

const Home = () => {

return (
   <div className="">
      <div className="jumbotron card">
       <img src="./images/bg.jpg " className="card-img img-fluid" alt="bookshelf" />
      <div className="card-img-overlay ">
       <p className="text-center mt-4 text-warning" style={{ fontFamily: 'Open Sans', fontSize: '3rem',fontWeight: 'bold'}}>
         READRIOT -  your no. 1  book discovery platform
       </p>
       <div className="d-flex justify-content-around">
        <div className="mt-4 p-3 card  col-5">
         <p className="  fs-5 fw-bold" style={{lineHeight: "3rem", fontSize: "1rem" }}>
           Our app is built on the Google Books API, which means you have access to millions of books, including best sellers, classic literature, and new releases.
         </p>
      
        </div>
     <div className="card col-4 mt-4 justify-content-center">
       <h4 className="ms-5 m-3 mt-4 fw-bold">please sign In to continue</h4>
        <form className="col-8  ms-5">
         <div class="form-group mb-3">
          <label for="username">Username</label>
          <input type="text" class="form-control" id="username" placeholder="Enter username" required/>
        </div>
        <div class="form-group mb-3">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" placeholder="Enter password" required/>
        </div>
        <Link to ="/search">
           <button className="btn btn-outline-warning mb-4"> SIGN IN</button> 
         </Link>
         
         <p>Dont have account? 
            <Link to="/register">
              <button className="btn btn-outline-warning">sign up</button> 
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

