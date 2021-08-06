import React, { useEffect, useState } from "react";
import Course from "./Course";
import boot_url from "../bootapi/url";
import axios from 'axios'; 
import { toast } from "react-toastify";
function Allcourses(){
     useEffect(()=>{
           document.title="All Course"
           Getallcourse();
     },[])


     //function for getCourse
     const Getallcourse = ()=>{
      axios.get(`${boot_url}/courses`).then(
            (response) => {
                  console.log(response.data);
                  toast.success("courses are loaded");
                  setcourses(response.data)
            },
            (error) =>{
                  console.log(error);
                  toast.error("Something went wrong");
            }
      )

     }


     const [courses,setcourses]=useState([]) 



     const updatecourse=(id)=>{
      setcourses(courses.filter((c)=> c.id != id));
     };
     
return(
      <div>
            <h1 className="text-center">All Courses</h1>

            {
             
             courses.length>0 ? courses.map((item) => <Course  course={item} update={updatecourse} />):"No courses"      


            }
      </div> 


     ) 
}

export default Allcourses;

