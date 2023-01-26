// import React, { useState } from 'react';
// import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Link} from "react-router-dom"


// function Register() {
//   const [showSignUp, setShowSignUp] = useState(false);

//   const handleClick = () => {
//     setShowSignUp(!showSignUp);
//   }

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     // check if the entered username and password match any saved details
//     if (username === "savedUsername" && password === "savedPassword") {
//       // allow the user to login
//     } else {
//       setShowSignUp(true);
//     }
//   }

//   const newUser = {username: "newUser", password: "newPass"};

// fetch('/db.json', {
//   method: 'POST',
//   body: JSON.stringify(newUser),
//   headers: { 'Content-Type': 'application/json' }
// })
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.log(err));


// fetch('/db.json')
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err));




//   return (
//     <Container>
//       <Row>
//         <Col xs="12" md={{ size: 6, offset: 3 }} className={showSignUp ? "d-none" : ""}>
//           <Form>
//             <h2 className="text-center">Sign In</h2>
//             <FormGroup>
//               <Label for="username"></Label>
//               <Col xs="12" md={{ size: 6, offset: 3 }}>
//                <Input type="text" placeholder="username" required onChange={e => setUsername(e.target.value)} />
//               </Col>
//             </FormGroup>
//             <FormGroup>
//               <Label for="password"></Label>
//               <Col xs="12" md={{ size: 6, offset: 3 }}>
//               <Input type="password" placeholder="password" id="password" required onChange={e => setPassword(e.target.value)} />
//               </Col>
              
//             </FormGroup>
//             <FormGroup className="text-center">
//               <Label check>
//                 <Input type="checkbox" /> Remember me
//               </Label>
//             </FormGroup>

//             <div className="d-flex justify-content-center">
//   <Button color="primary" className="btn-block" onClick={handleLogin}>Sign In</Button>
// </div>

//             <br></br>
            
//             <div className="text-center">
//               <a href="#1">Forgot password?</a>
//               <p>Not a member yet? <a href="#1" onClick={handleClick}>Sign Up here</a></p>
//             </div>
//           </Form>
//         </Col>
//       </Row>

//       { showSignUp ? (
//         <Row>
//           <Col xs="12" md={{ size: 6, offset: 3 }}>
//             <Form>
//               <h3 className="text-center">Sign Up</h3>
//               <FormGroup>
//                 <Label for="username"></Label>

//                 <Col xs="12" md={{ size: 6 }}>
//                 <Input type="text" placeholder="User Name" id="username" required className='form-control' />
//                 </Col>
               
//               </FormGroup>
//               <FormGroup>
//                 <Label for="email"></Label>

//                 <Col xs="12" md={{ size: 6 }}>
//                 <Input type="email" placeholder="Email" id="email" required className='form-control'/>
//                 </Col>
                
//               </FormGroup>
//               <FormGroup>
//                 <Label for="password"></Label>

//                 <Col xs="12" md={{ size: 6 }}>
//                 <Input type="password" placeholder="Password" id="password" required className='form-control' />
//                 </Col>
                
//               </FormGroup>

//               <Link to = "/search">
//                 <Button color="success" className="btn-block">Sign Up</Button>
//               </Link>
//             </Form>
//           </Col>
//         </Row>
//       ) : null }

//     </Container>
//   );
// }

// export default Register;
 
import {Link} from "react-router-dom"
const Register = () => {
  return ( 
    <div className="container mt-5">
        <h2 className="ms-5 mt-5 text-center ">Sign up </h2>
        <div className="d-flex justify-content-center">
          <form className="col-4  ms-5">
         <div class="form-group mb-3">
          <label for="username">Username</label>
          <input type="text" class="form-control" id="username" placeholder="Enter username" required/>
         </div>
        <div class="form-group mb-3">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" placeholder="Enter password" required/>
        </div>
        <div class="form-group mb-3">
          <label for="password"> confirm Password</label>
          <input type="password" class="form-control" id="password" placeholder="Enter password" required/>
        </div>
        <Link to ="/search">
           <button className="btn btn-outline-warning mb-4"> SIGN UP</button> 
         </Link>
        
       </form>
       </div>
    </div>
   );
}
 
export default Register;