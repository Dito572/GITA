import React, {useState} from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./Products";
import {v4 as uuid} from "uuid";
import {Link, useNavigate} from 'react-router-dom'
import NavBar from "./Navbar";

const Add=()=>{

    const [ProductName, setName] = useState('')
    const [Product_Number, setNumber] = useState('')
    const [ProductColor, serColor] = useState('')
    const [Product_Price, setPrice] = useState('')
    const [ProductSize, setSize] = useState('')
    const [ProductWeight, setWeight] = useState('')
    const [Date, setDate] = useState('')

    let history = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();

        let uniqueId = ids.slice(0,8);

        let a = ProductName,
        b= Product_Number,
        c=ProductColor,
        d=Product_Price,
        g=ProductSize,
        j=ProductWeight,
        s=Date;

        Products.push({Id: uniqueId,ProductName : a, Product_Number:b,ProductColor:c,Product_Price:d, ProductSize:g,ProductWeight:j, Date:s });

        history("/");
    }

    const [form, setform] = useState({})
    const [errors, setErrors] = useState({})
    return(
        <div>
            <style type="text/css">

            </style>
            <NavBar/>
            <h3 style={{margin:'1rem'}}>Create New Product</h3>
            <hr></hr>
            <Form  style={{margin:'2rem'}}>
                <Form.Group className="col-md-6 mb-10" style={{margin:'1rem'}}   >
                    <InputGroup style={{margin:'10px'}}   >
                        <Form.Label>Name : </Form.Label>
                        <Form.Control className="input" type="text" id='validationCustom01' required  onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                    </InputGroup> 
                    <InputGroup style={{margin:'10px'}} >          
                        <Form.Label >Product Number : </Form.Label>
                        <Form.Control  className="input"  type="text" required onChange={(e) => setNumber(e.target.value)}>
                        </Form.Control>
                    </InputGroup>    
                    <InputGroup style={{margin:'10px'}}>
                        <Form.Label >Color : </Form.Label>
                        <Form.Control className="input" type="text" required onChange={(e) => serColor(e.target.value)}>
                        </Form.Control>
                    </InputGroup>
                    <InputGroup style={{margin:'10px'}}>
                        <Form.Label>List Price : </Form.Label>
                        <Form.Control className="input" type="number" required onChange={(e) => setPrice(e.target.value)}>
                        </Form.Control>
                    </InputGroup>
                    <InputGroup style={{margin:'10px'}}>
                        <Form.Label>Size : </Form.Label>
                        <Form.Control className="input" type="number" required onChange={(e) => setSize(e.target.value)}>
                        </Form.Control>
                    </InputGroup>
                    <InputGroup style={{margin:'10px'}}>    
                        <Form.Label>Weight : </Form.Label>
                        <Form.Control className="input" type="number" required onChange={(e) => setWeight(e.target.value)}>
                        </Form.Control>
                    </InputGroup>     
                    <InputGroup style={{margin:'10px'}}>
                        <Form.Label>Sell Start Date : </Form.Label>
                        <Form.Control className="input" type="date" required onChange={(e) => setDate(e.target.value)}>
                        </Form.Control>
                    </InputGroup>    
                </Form.Group>
                <Button className="btn btn-success" onClick={(e) => handleSubmit(e)} type="submit">Save</Button>
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


export default Add;