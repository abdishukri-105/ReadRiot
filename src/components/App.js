import { Routes , Route, useNavigate} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import '../App.css';
import NavBar from './NavBar';
import Home from './Home'
import Shelf from "./Shelf"
import Search from "./Search"
import Register from "./Register"


function App() {

  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);
  const [shelf, setShelf] = useState([]);
  
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(searchInput === '') return;
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=books+${searchInput}&key=AIzaSyAbr_mnO88bXbeseUjO5aX1L2xXQCoVr_c`
    );
    const data = await response.json();
    setResults(data.items);
  }





  const addToShelf = (result) => {
    const oldresult = [...shelf]
    const newresult = [...oldresult, result]
    setShelf(newresult)
    console.log(newresult)

  }

  const removeFromShelf =(id) => {
    const oldresult = [...shelf]
    const newresult = oldresult.filter(result => result.id !== id)
    setShelf(newresult)
    console.log(newresult)
  }
 
 

  
  const navigate = useNavigate()

  const handleLogout = (e) => {
    e.preventDefault()
    setIsAuthenticated(false)
    navigate('/')
  }

  return (
    <div className="">
      
    
        <NavBar isAuthenticated={isAuthenticated} handleLogout={handleLogout}  />
        
        <Routes>
           <Route path="/" element={<Home setIsAuthenticated={setIsAuthenticated} />} />
           <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated}  />} />
           {isAuthenticated && (
            <>
              <Route path="/shelf" element={<Shelf shelf={shelf} removeFromShelf ={ removeFromShelf} />} />
              <Route path="/search" element={<Search results={results} searchInput={searchInput} setSearchInput={setSearchInput} handleSubmit={handleSubmit} isLoading = {isLoading} addToShelf={addToShelf}/>} />
            </>
           )}
          
          
        </Routes>
       
   
      
    </div>
  );
}
export default App;






