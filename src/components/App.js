import {BrowserRouter, Routes , Route} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import '../App.css';
import NavBar from './NavBar';
import Home from './Home'
import Shelf from "./Shelf"
import Search from "./Search"
import Regester from "./Regester"


function App() {

  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);
  const [allResults, setAllResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


 
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=books+&key=AIzaSyAbr_mnO88bXbeseUjO5aX1L2xXQCoVr_c`
      );
      const data = await response.json();
      setAllResults(data.items);
      setResults(data.items);
      setIsLoading(false);
    };
    fetchData();
  }, []);
   

  const handleSearchInput = async event => {
    setSearchInput(event.target.value);
    setIsLoading(true);
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${event.target.value}&key=AIzaSyAbr_mnO88bXbeseUjO5aX1L2xXQCoVr_c`);
    const data = await response.json();
    setAllResults(data.items);
    setResults(data.items);
    setIsLoading(false);
  }


    
useEffect(() => {
  const filteredResults = allResults
    .filter(result =>
      result.volumeInfo.title.toLowerCase().includes(searchInput.toLowerCase())
    )
    .sort((a, b) => {
      const titleA = a.volumeInfo.title.toLowerCase();
      const titleB = b.volumeInfo.title.toLowerCase();
      const search = searchInput.toLowerCase();
      if (titleA.startsWith(search) && !titleB.startsWith(search)) {
        return -1;
      }
      if (!titleA.startsWith(search) && titleB.startsWith(search)) {
        return 1;
      }
      return 0;
    });
  setResults(filteredResults);
}, [searchInput, allResults]);




  return (
    <div className="">
      <BrowserRouter>
    
        <NavBar />
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/Shelf" element={<Shelf />} />
           <Route path="/search" element={<Search results={results} searchInput={searchInput} handleSearchInput = {handleSearchInput}  isLoading = {isLoading}/>} />
           <Route path="/regester" element={<Regester />} />
        </Routes>
     
      </BrowserRouter>
     
      
      
    </div>
  );
}
export default App;






