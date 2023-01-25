import {Link} from 'react-router-dom'

const Home = () => {
    return ( 
        <div>
             <Link to="/signin">
                <button>Sign In</button>
            </Link>
        </div>
     );
}
 
export default Home;