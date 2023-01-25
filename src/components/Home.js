import {Link} from "react-router-dom"

const Home = () => {

return (
   <div className="">
      <div className="jumbotron card">
       <img src="./images/bg.jpg" className="card-img" alt="bookshelf" />
      <div className="card-img-overlay ">
       <p className="text-center mt-4 text-warning" style={{ fontFamily: 'Open Sans', fontSize: '3rem',fontWeight: 'bold'}}>
         READRIOT -  your no. 1  book discovery platform
       </p>
       <div className="d-flex justify-content-around">
        <div className="col-5 me-4" style={{width: "20rem"}}>
         <img src="./images/bg2.png" className="card-img-top" alt="..." />
       </div>
       <div className="mt-4 p-3 card  col-5">
         <p className="   fw-bold" style={{lineHeight: "2rem", fontSize: "1rem" }}>
           Our app is built on the Google Books API, which means you have access to millions of books, including best sellers, classic literature, and new releases.
         </p>
         <p className="fw-bold " style={{fontSize: "1.5rem"}}> So, why wait? 
         <Link to ="/Regester">
           <button className="btn btn-outline-dark"> SIGN UP!</button> 
         </Link>
         now  <br></br>and start discovering the books you'll love!"</p>
        </div>
     </div>
     </div>
      </div>
   </div>




);
};

export default Home;

