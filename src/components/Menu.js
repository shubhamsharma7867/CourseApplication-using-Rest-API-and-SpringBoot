import  { React }from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Menu(){
    return(
        <ListGroup>
            <Link className="list-group-item  list-group-item-action"  tag='a' to="/" action>Home</Link>
            <Link className="list-group-item  list-group-item-action"  tag='a' to="add-courses"action>Addcourses</Link>
            <Link className="list-group-item  list-group-item-action"  tag='a' to="all-courses"action>ViewCourse</Link>
            <Link className="list-group-item  list-group-item-action"  tag='a' to="about-us"action>About</Link>
            <Link className="list-group-item  list-group-item-action"  tag='a' to='#'action>Contact Us</Link>
    
        </ListGroup>
    )
}

export default Menu;
