
import '../App.css';
// import { Route, Routes } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home'
// import Library from './Library';


function App() {
  const [showSignUp, setShowSignUp] = useState(false);
  const handleClick = () => {
    setShowSignUp(!showSignUp);
  }
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    // check if the entered username and password match any saved details
    if (username === "savedUsername" && password === "savedPassword") {
      // allow the user to login
    } else {
      setShowSignUp(true);
    }
  }
  return (
    <div className="">
        <NavBar />
         <Home />
         {/* <Library /> */}
    </div>
  );
}
export default App;






