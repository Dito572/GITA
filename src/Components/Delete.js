import React, {useState} from "react";
import { Button } from "react-bootstrap"
import Products from "./Products";
import {Link, useNavigate} from 'react-router-dom'
import NavBar from "./Navbar";



const Delete = () =>{
    
    let history = useNavigate();

const handleDelete = (Id) => {
    let index = Products.map(function (e) {
        return e.Id
    }).indexOf(Id);

    Products.splice(index, 1)
    
    history('/')
}

const [ProductName, setName] = useState('')
const [Product_Number, setNumber] = useState('')
const [ProductColor, serColor] = useState('')
const [Product_Price, setPrice] = useState('')
const [ProductSize, setSize] = useState('')
const [ProductWeight, setWeight] = useState('')
const [Date, setDate] = useState('')

const handleSubmit = (e) => {
    e.preventDefault();



    let a = ProductName,
    b= Product_Number,
    c=ProductColor,
    d=Product_Price,
    g=ProductSize,
    j=ProductWeight,
    s=Date;

}
return(
    <>
    <NavBar/>
          <div>
            <h4>ProductId:</h4><a>{Products.Id}</a>
            <h4>Name:</h4>{Products.ProductName}
            <h4>Product Number:</h4> {Products.Product_Number}
            <h4>Color:</h4> {Products.ProductColor}
            <h4>List Price:</h4> {Products.Product_Price}
            <h4>Size:</h4> {Products.ProductSize}
            <h4>Weigth:</h4> {Products.ProductWeight}
            <h4>Modified date:</h4> {Products.Date}
          </div>

    <Button className="btn btn-danger" onClick={() => handleDelete()}>Delete the Product!</Button>
    &nbsp;
    <Link to='/'>
        <Button>Cancel-Back to list</Button>
    </Link>
    </>
)
}

export default Delete