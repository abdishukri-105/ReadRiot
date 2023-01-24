
import '../App.css';

import NavBar from './NavBar';
// import Home from './Home'
import Library from './Library';


function App() {
  return (
    <div className="container-fluid">
         <NavBar />
        {/* <Home /> */}
         <Library /> 
    </div>
  );
}

export default App;
