import React,{useState} from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap'
import {FaShareSquare,FaFacebook,FaTwitter,FaLink} from "react-icons/fa"

export default function Collapsy() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
     <Button outline color="success" onClick={toggle} style={{ marginBottom: '1rem' }}><FaShareSquare size={28}/></Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
              <h5>Sharable properties</h5>
           <Button className="fsh" outline color="success"><FaFacebook size={28}/></Button>
           <Button className="fsh" outline color="success"><FaTwitter size={28}/></Button>
           <Button className="fsh" outline color="success"><FaLink size={28}/></Button>
          </CardBody>
        </Card>
      </Collapse>
        </div>
    )
}
