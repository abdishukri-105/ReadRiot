import {Link} from "react-router-dom"
import {useState} from 'react'

const Home = () => {

  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formValid, setFormValid] = useState(false);


  const validateForm = () => {
    if (username.length > 0 && password.length > 0) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }
  



return (
   <div className="">
      <div className="jumbotron card">
       <img src="./images/bg.jpg " className="card-img img-fluid" alt="bookshelf" />
      <div className="card-img-overlay ">
       {/* <p className="text-center mt-4 text-dark" style={{ fontFamily: 'Open Sans', fontSize: '3rem',fontWeight: 'bold'}}>
         READRIOT -  your no. 1  book discovery platform
       </p> */}
       <div className="d-flex justify-content-around mt-5">
        <div className="mt-4 p-5 card  col-5">
         <p className="  fs-5 fw-bold" style={{lineHeight: "3rem" }}>
           Our app is built on the Google Books API, which means you have access to millions of books, including best sellers, classic literature, and new releases.
         </p>
      
        </div>
     <div className="card col-4 mt-4 justify-content-center">
       <h4 className="ms-5 m-3 mt-4 fw-bolder">please sign In to continue</h4>
        <form className="col-8  ms-5">
         <div class="form-group mb-3">
          <label for="username " className="mb-2 fw-bold">Username</label>
          <input type="text" class="form-control" id="username" placeholder="Enter username"
            value={username}
            onChange={e => {setUsername(e.target.value); validateForm()}} required/>
        </div>
        <div class="form-group mb-3">
          <label for="password" className="mb-2 fw-bold">Password</label>
          <input type="password" class="form-control" id="password" placeholder="Enter password" 
            value={password}
            onChange={e => {setPassword(e.target.value); validateForm()}}required/>
        </div>
          

       <div className="d-flex">  
        <button className="btn btn-outline-warning me-4 mb-4" disabled={!formValid}> SIGN IN</button> 

        <Link to ="/search">
          <p>  <a className=" btn-outline-warning " disabled={!formValid}> dive in</a> </p>
         
        </Link>
        </div> 
         <p className="fw-bold">Dont have account? 
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

