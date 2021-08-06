import React from "react"
import logo from './logo.svg';
import './App.css';
import { Button, Col, Container, Row } from 'reactstrap';
import {ToastContainer,toast} from 'react-toastify';
import Home from "./components/Home";
import Course from "./components/Course";
import Allcourses from "./components/Allcourses";
import Addcourses from "./components/Addcourses";
import Header from "./components/Header";
import Menu from "./components/Menu";
import {BrowserRouter as Router,Route,Link,withRouter} from "react-router-dom";
import Aboutus from "./components/Aboutus";


function App() {
  const notify = () => {
    toast("This is Lit!!!!")
  };
  return (
    
    <div>
      
      <Router>
         <ToastContainer />
               <Container>
                    <Header />
                          <Row>
                            <Col md={4}>
                                 <Menu />
         </Col>
         <Col md ={8}>
           <switch>
         
          < Route exact path="/add-courses" component={withRouter(Addcourses)} />
          <Route path="/" component={Home} exact  />
          < Route exact path="/all-courses" component={withRouter(Allcourses)} />
          < Route exact path ="/about-us" component={withRouter(Aboutus)}  />
          </switch>
         </Col>
         </Row>
       </Container>
       </Router>
      
    </div>
  );
}

export default App;
