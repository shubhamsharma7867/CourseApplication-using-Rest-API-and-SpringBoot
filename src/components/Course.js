import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';
import boot_url from '../bootapi/url';

function Course({course,update}){
    const notify = () => {
        toast("Your Course is deleted successfully")
      };
      const notify1 = ()=>{
          toast("your Course is updated successfully ")
      }


    const deleteCourse=(id)=>{
        axios.delete(`${boot_url}/courses/${id}`).then(
            (response)=>{
            console.log(response);
            console.log("success")
            toast.success("deleted successfully");
            update(id);
            },
            (error)=>{
            console.log(error);
            console.log("error");
            toast.error("something went wrong");
            }
        )
    }

     return(
    <div>
     <Card className="text-center">
    
    <CardBody>
        <CardSubtitle className="h5">{course.name}</CardSubtitle>         
        <CardText>{course.description}</CardText>
    
    <Container className="text-center">
        <Button  outline color="danger"  onClick={notify} onClick={()=>{
            deleteCourse(course.id);
        }} >Delete</Button>{"  "}
        <Button outline color ="warning"  onClick={notify1}>Update</Button>
    </Container>
    </CardBody>
     </Card>



     </div>   

    )
}


export default Course; 