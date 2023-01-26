
import '../App.css';
// import { Route, Routes } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home'
// import Library from './Library';
import Login from './Login';



function App() {
  return (
    <div className="">
        <NavBar />
         <Home />
         < Login />
         {/* <Library /> */}
         
    </div>
  );
}

export default App;
