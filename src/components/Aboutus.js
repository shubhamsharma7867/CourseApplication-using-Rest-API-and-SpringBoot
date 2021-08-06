import React, { useEffect } from 'react';
import {Card,CardBody, CardTitle,Button,CardText,CardHeader,CardFooter} from 'reactstrap';


function Aboutus(){
    useEffect(()=>{
        document.title="AboutUs"
    },[])
    return(
     <div>
         <Card>
        <CardHeader tag="h3">About Us</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>Shubham sharma will own a company real soon.</CardText>
          
        </CardBody>
        <CardFooter className="text-muted">Footer</CardFooter>
      </Card>
         
     </div>
    )
}

export default Aboutus;