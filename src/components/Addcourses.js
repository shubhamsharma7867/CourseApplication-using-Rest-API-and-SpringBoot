import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Button, Form, FormGroup, Label, Input, FormText ,Col} from 'reactstrap';
import boot_url from '../bootapi/url';



function Addcourses(){
   useEffect(()=>{
      document.title="Add Courses"
   },[])

   const [course,setCourse] = useState({});

   //creating handler functions
      
   const handleForm = (e)=>{
      console.log(course);
     postdatatosever(course);
      e.preventDefault();

   } 


   //creating function to send data to server.
   const postdatatosever = (data)=>{
      axios.post(`${boot_url}/courses`,data).then(
         (response)=>{
          console.log(response);
          console.log("success");
          toast.success("course added succesfully");
         },
         (error)=>{
          console.log(error);
          console.log("something went wrong");
          toast.error("bhaia hamara gaand phat gya");
         }
      )

      
   }




    return(  
    <Fragment>
        <h1>Add Courses</h1>
     <Form onSubmit={handleForm}>
      <FormGroup>
         <Label for="course Id">Course Id</Label>
         <Input  type="text"   name="course id" id ="course id" placeholder="Enter here"
         onChange={(e)=>{
            setCourse({...course, id:e.target.value})
         }}
         />
      </FormGroup>        
      <FormGroup>
         <Label for="course Name">Course Name</Label>
         <Input  type="text"   name="course Name" id ="course Name" placeholder="Enter here"
          onChange={(e)=>{
            setCourse({...course, name:e.target.value})
         }}
         />
      </FormGroup> 
      <FormGroup>
         <Label for="course Description">Course Description</Label>
         <Input  type="text"   id ="course Description" placeholder="Enter here"
          style = {{height:100}} 
          onChange={(e)=>{
            setCourse({...course, description:e.target.value})
         }} 
            />
         
      </FormGroup>   
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button 
          type ="submit"
          color="success">Add Course</Button>{" "}
          <Button type = "reset" color="warning">Clear</Button>
        </Col>
      </FormGroup>     

    </Form>
    </Fragment>


    )
}
export default Addcourses;