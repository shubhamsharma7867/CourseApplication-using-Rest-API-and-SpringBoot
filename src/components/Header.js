import React from 'react';
import { Card, CardBody } from 'reactstrap';

function Header(){

    return(
     <div>
     <Card className="bg-warning  my-1">
         <CardBody className="my-3" className="text-center">
             <h2>Welcome to the Course Application</h2>
         </CardBody>
     </Card>



     </div>

    )
}

export default Header;