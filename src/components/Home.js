import React, { useEffect } from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';


function Home(){
    useEffect(()=>{
        document.title="Home"
    },[])
    return(
        <div>
        <Jumbotron className="text-center  bg-secondary" >
           <h1>Courses Application</h1>
           <p1 className="lead">
               This application is made of spring boot and the frontend is made on react js
           </p1>
           <Container>
           <Button  outline color="primary">submit</Button> 
           </Container>
           <hr />
        </Jumbotron>
        </div>
    )
}

export default Home;