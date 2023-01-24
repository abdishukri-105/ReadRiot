import React from 'react';
import App from './App';
const Home = () => {
return (

<div className="card">
<img src="./images/bg.jpg" className="card-img" alt="" />
<div className="card-img-overlay">
<div className="d-flex justify-content-end">
<img src="./images/logo.png" alt="logo" style={{ width: "150px", height: "150px" }} />
</div>
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
</div>
);
};
export default Home;