
import '../App.css';

import NavBar from './NavBar';
// import Home from './Home'
import Library from './Library';
import Login from './Login';


function App() {
  return (
    <div className="">
         <NavBar />
         <Login />
        {/* <Home /> */} 
         <Library /> 
    </div>
  );
}

export default App;
