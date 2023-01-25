import {BrowserRouter, Routes , Route} from 'react-router-dom'
import '../App.css';
import NavBar from './NavBar';
import Home from './Home'
import Shelf from "./Shelf"
import Search from "./Search"
import Regester from "./Regester"



function App() {
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
    <div className="">
      <BrowserRouter>
        <NavBar />
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/Shelf" element={<Shelf />} />
           <Route path="/search" element={<Search />} />
           <Route path="/regester" element={<Regester />} />
        </Routes>
      
      
      
      </BrowserRouter>
     
      
      
    </div>
  );
}
export default App;






