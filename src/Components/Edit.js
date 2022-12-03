import React, {useState, useEffect} from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./Products";
import {Link, useNavigate} from 'react-router-dom'
import NavBar from "./Navbar";


const Edit = () => {

    const [ProductName, setName] = useState('')
    const [Product_Number, setNumber] = useState('')
    const [ProductColor, serColor] = useState('')
    const [Product_Price, setPrice] = useState('')
    const [ProductSize, setSize] = useState('')
    const [ProductWeight, setWeight] = useState('')
    const [Date, setDate] = useState('')

    

   
    return(
        <div>
        <NavBar/>

                    <Form  style={{margin:'2rem'}}>
                <Form.Group className="col-md-6 mb-10"   >
                    <InputGroup >
                        <Form.Label>Name : </Form.Label>
                        <Form.Control className="input" type="text" value={ProductName} required  onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                    </InputGroup> 
                    <InputGroup >          
                        <Form.Label>Product Number : </Form.Label>
                        <Form.Control className="input"  type="text" value={Product_Number} required onChange={(e) => setNumber(e.target.value)}>
                        </Form.Control>
                    </InputGroup>    
                    <InputGroup>
                        <Form.Label >Color : </Form.Label>
                        <Form.Control className="input" type="text" value={ProductColor} required onChange={(e) => serColor(e.target.value)}>
                        </Form.Control>
                    </InputGroup>
                    <InputGroup>
                        <Form.Label>List Price : </Form.Label>
                        <Form.Control className="input" type="text" value={Product_Price} required onChange={(e) => setPrice(e.target.value)}>
                        </Form.Control>
                    </InputGroup>
                    <InputGroup>
                        <Form.Label>Size : </Form.Label>
                        <Form.Control className="input" type="text" value={ProductSize} required onChange={(e) => setSize(e.target.value)}>
                        </Form.Control>
                    </InputGroup>
                    <InputGroup>    
                        <Form.Label>Weight : </Form.Label>
                        <Form.Control className="input" type="text" value={ProductWeight} required onChange={(e) => setWeight(e.target.value)}>
                        </Form.Control>
                    </InputGroup>     
                    <InputGroup>
                        <Form.Label>Sell Start Date : </Form.Label>
                        <Form.Control className="input" type="date" value={Date} required onChange={(e) => setDate(e.target.value)}>
                        </Form.Control>
                    </InputGroup>    
                </Form.Group>
                <Button  className="btn btn-success" >Save</Button>
                &nbsp;
                <Link to='/'>
                <Button  style={{background:"Gray"}}>Back to List</Button>
                </Link>
                &nbsp;
                <Button className="btn btn-danger" type="reset">Cancel</Button>
            </Form>
            </div>

    )

}

export default Edit;