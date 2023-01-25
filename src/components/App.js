import {Router, Routes , Route} from 'react-router-dom'
import '../App.css';

import NavBar from './NavBar';
import Home from './Home'
import Library from './Library';
import Login from './Login';


function App() {
  return (
    <div className="">
       <Router>

         <NavBar />

         <Routes>
            <Route  exact path='/'>
              <Home /> 
            </Route>

            <Route path = '/Login'>
              <Login />
            </Route>

            <Route path = '/Library'>
              <Library  />
            </Route>
         </Routes> 

         </Router> 
    </div>
  );
}

export default App;
