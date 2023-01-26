import React, { useState } from 'react';
import Home from './Home';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


const userDetails = {}


function Login({setLogIn}) {
  const [signUpDetails, setSignUpDetails] = useState(userDetails);
  const [showSignUp, setShowSignUp] = useState(false);

  function handleSignUpDetails(e){
   userDetails[e.target.name]= e.target.value
    setSignUpDetails(userDetails)
    console.log(signUpDetails)
    

  }
  function sendToDatabase(){
    console.log(signUpDetails)
    fetch("http://localhost:3002/users", {
      method: "POST",
      body: JSON.stringify(signUpDetails),
      headers: {
        "Content-Type": "application/json"
      }


    })
    .then(res=>res.json())
    .then(res=>console.log(res))

    
  }

  function submitLogIn(e) {
    e.preventDefault()
    let username = e.target.username.value;
    let password = e.target.password.value;

    fetch('http://localhost:3002/users')
      .then(res => res.json())
      .then(res => {
        const filteredResults = res.filter(element => {
          return element.username == username && element.password == password;
        })

        if (!filteredResults.length) {
          console.log("Username or password incorrect");
        } else {
          setLogIn(true);
        }
      })
  }
  

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
  

  // const newUser = {username: "newUser", password: "newPass"};

//fetch('/db.json', {
 // method: 'POST',
  //body: JSON.stringify(newUser),
 // headers: { 'Content-Type': 'application/json' }
//})
//.then(res => res.json())
//.then(data => console.log(data))
//.catch(err => console.log(err));


//fetch('/db.json')
  //.then(res => res.json())
  //.then(data => console.log(data))
 // .catch(err => console.log(err));




  return (
    <>
      <Container>
      <Row>
        <Col xs="12" md={{ size: 6, offset: 3 }} className={showSignUp ? "d-none" : ""}>
          <Form onSubmit={(e)=> submitLogIn(e)}>
            <h2 className="text-center">Sign In</h2>
            <FormGroup>
              <Label for="username"></Label>
              <Col xs="12" md={{ size: 6, offset: 3 }}>
               <Input type="text" name="username" placeholder="username" required onChange={e => setUsername(e.target.value)} />
              </Col>
            </FormGroup>
            <FormGroup>
              <Label for="password"></Label>

              <Col xs="12" md={{ size: 6, offset: 3 }}>
              <Input type="password" name="password" placeholder="password" id="password" required onChange={e => setPassword(e.target.value)} />
              </Col>
              
            </FormGroup>
            <FormGroup className="text-center">
              <Label check>
                <Input type="checkbox" /> Remember me
              </Label>
            </FormGroup>

            <div className="d-flex justify-content-center">
  <Button color="primary" className="btn-block" >Sign In</Button>
</div>

            <br></br>
            
            <div className="text-center">
              <a href="#1">Forgot password?</a>
              <p>Not a member yet? <a href="#1" onClick={handleClick}>Sign Up here</a></p>
            </div>
          </Form>
        </Col>
      </Row>

      { showSignUp ? (
        <Row>
          <Col xs="12" md={{ size: 6, offset: 3 }}>
            <Form>
              <h3 className="text-center">Sign Up</h3>
              <FormGroup>
                <Label for="username"></Label>

                <Col xs="12" md={{ size: 6 }}>
                <Input type="text" name="username" placeholder="User Name" id="username" required className='form-control' onChange={(e)=>handleSignUpDetails(e)} />
                </Col>
               
              </FormGroup>
              <FormGroup>
                <Label for="email"></Label>

                <Col xs="12" md={{ size: 6 }}>
                <Input type="email" name="email" placeholder="Email" id="email" required className='form-control' onChange={(e)=>handleSignUpDetails(e)}/>
                </Col>
                
              </FormGroup>
              <FormGroup>
                <Label for="password"></Label>

                <Col xs="12" md={{ size: 6 }}>
                <Input type="password" name="password" placeholder="Password" id="password" required className='form-control' onChange={(e)=>handleSignUpDetails(e)} />
                </Col>
                
              </FormGroup>

              
              <Button color="success" className="btn-block" onClick={()=>sendToDatabase()}>Sign Up</Button>
              
            </Form>
          </Col>
        </Row>
      ) : null }

      </Container>
    </>
    
  );
      }

export default Login;

