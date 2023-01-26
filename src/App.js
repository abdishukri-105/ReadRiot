// import { Routes , Route} from 'react-router-dom'
// import { Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home'
import Shelf from "./components/Shelf"
// import Library from './Library';
import Search from "./components/Search"
import Login from './components/Login';
import {Route, Routes, useNavigate } from 'react-router-dom';
import {useState} from 'react'


function App() {

  const [logIn, setLogIn] = useState(false);
  const navigate = useNavigate();
  function navigateToHome() {
    if (logIn) {
      navigate('/home', {replace: true});
    }
  }

  navigateToHome();
  // const [showSignUp, setShowSignUp] = useState(false);
  // const handleClick = () => {
  //   setShowSignUp(!showSignUp);
  // }
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const handleLogin = () => {
  //   // check if the entered username and password match any saved details
  //   if (username === "savedUsername" && password === "savedPassword") {
  //     // allow the user to login
  //   } else {
  //     setShowSignUp(true);
  //   }
  // }
  return (
    
    <>
       {/* <NavBar />
       <Home/>
       <Search /> */}
      <Routes>
        <Route element={<Login setLogIn={setLogIn} />} path='/'></Route>
        <Route element={<Home/>} path="/home"></Route>
      </Routes>
      
      
    </>
  );
}
export default App;






