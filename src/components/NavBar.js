import {  Link } from "react-router-dom";

const NavBar = ({isAuthenticated, handleLogout}) => {
    return ( 

      <nav class="navbar sticky-top  navbar-light bg-warning d-flex justify-content-between">
        <div className="d-flex">
          <img src="./images/logo.png" alt="logo" className="ms-5 me-3" style={{ width: "60px", height: "40px" }} />
          <a class="navbar-brand  fw-bolder" >READRIOT</a>
          <div className="ms-5 d-flex m-2 fw-bold">
            <Link to="/"  exact className="nav-link me-5">HOME</Link>
            {isAuthenticated? (
              <>
                <Link to="/search"  exact className="nav-link me-5">Search</Link>
                <Link to="/shelf"  exact className="nav-link me-5">Shelf</Link>
                <Link  onClick={handleLogout}  exact className="nav-link">logout</Link>
              </>
            ):(
              <Link to="/register" className="nav-link">Register</Link>
            )
          }
          
          </div>
        </div>
      
      </nav>
        
        
     );
}
 
export default NavBar;