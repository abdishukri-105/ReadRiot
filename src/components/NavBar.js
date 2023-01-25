import { NavLink } from "react-router-dom";
const NavBar = () => {
    return ( 
      
        
      <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-warning d-flex justify-content-between">
        <div className="d-flex">
          <img src="./images/logo.png" alt="logo" className="ms-5 me-3" style={{ width: "60px", height: "40px" }} />
          <a class="navbar-brand  fw-bolder" href="#">READRIOT</a>
          <div className="ms-5 d-flex m-2 fw-bold">
          <NavLink to="/"  exact className="nav-link me-5">HOME</NavLink>
          <NavLink to="/search"  exact className="nav-link me-5">Search</NavLink>
          <NavLink to="/shelf"  exact className="nav-link">Shelf</NavLink>
          </div>
        </div>
        <div class=" me-5" id=""> 
        
           <button class="btn btn-outline-dark" href="#">Logout</button>
        </div>
      </nav>
        
        
     );
}
 
export default NavBar;