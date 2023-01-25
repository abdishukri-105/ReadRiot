

const Home = () => {

return (
   <div className="">
      <div className="jumbotron card">
       <img src="./images/bg.jpg" className="card-img" alt="bookshelf" />
      <div className="card-img-overlay ">
       <p className="text-center mt-4 text-warning" style={{ fontFamily: 'Open Sans', fontSize: '3rem',fontWeight: 'bold'}}>
         READRIOT -  your no. 1  book discovery platform
       </p>
       <div className="d-flex justify-content-between">
        <div className="col-6 me-4" style={{width: "20rem"}}>
         <img src="./images/bg2.png" className="card-img-top" alt="..." />
       </div>
       <div>
         <p className=" col-6 fw-2 mt-5 fw-bold" style={{lineHeight: "2rem", }}>
           Our app is built on the Google Books API, which means you have access to millions of books, including best sellers, classic literature, and new releases.
         </p>
         <p className="fw-bold " style={{fontSize: "1.5rem"}}> So, why wait? <button className="btn btn-dark"> SIGN UP!</button> now  <br></br>and start discovering the books you'll love!"</p>
        </div>
        </div>
     </div>
      </div>
   </div>




);
};

export default Home;

{/* <div className="card">
  <img src="./images/bg.jpg" className="card-img" alt="bookshelf" />
  <div className="card-img-overlay">

     <h1 className="text-center text-black" style={{ fontFamily: 'Open Sans', fontSize: '4rem',fontWeight: 'bold'}}>
      Welcome to ReadRiot!
     </h1>
     <div className="card" style={{ width: "25rem" }}>
      <img src="./images/bg2.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text" style={{fontFamily: 'Open Sans'}}>
          We are thrilled to offer you a wide range of books, periodicals, and other resources to help you learn, explore, and expand your knowledge. Whether you're a student, researcher, or just someone who loves to read, we have something for you. We hope you enjoy.
        </p>
      </div>
      </div>
  </div>
</div> */}