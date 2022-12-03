import React, { Fragment } from "react";
import {Button, Table} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./Products";
import NavBar from "./Navbar";
import {Link, useNavigate} from 'react-router-dom'

const Home=() => {

    let history = useNavigate();

    // const handleDelete = (Id) => {
    //     let index = Products.map(function (e) {
    //         return e.Id
    //     }).indexOf(Id);

    //     Products.splice(index, 1)

    //     history('/')

    //     console.log(`deleted ${Id}`)
    // }

    
    return(
        <Fragment>
            <NavBar/>
            <div>
            <h1>Products</h1>

                <Table striped bordered hover size="sm" >
                    <thead>
                        <tr>
                            <th>
                                Product Name
                            </th>
                            <th>
                                Product Number
                            </th>
                            <th>
                                Color
                            </th>
                            <th>
                                List Price
                            </th>
                            <th>
                                Modified Date
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Products && Products.length > 0
                            ?
                            Products.map((item) => {
                                return(
                                    <tr>
                                        <td>
                                            {item.ProductName}
                                        </td>
                                        <td>
                                            {item.Product_Number}
                                        </td>
                                        <td>
                                            {item.ProductColor}
                                        </td>
                                        <td>
                                            {item.Product_Price}
                                        </td>
                                        <td>
                                            {item.Date}
                                        </td>
                                        <td>
                                            <Link  to ='/edit'>
                                                <Button style={{background:'Gray'}} >Edit</Button>
                                            </Link>
                                            &nbsp;
                                            <Link to="/delete">
                                                <Button style={{background:'Red'}}>Delete</Button> 
                                            </Link>
                                        </td>
                                    </tr>
                                    )
                            })
                            :'Nothing to show'
                        }
                    </tbody>
                </Table>
                <br>
                </br>
                <Link to="/create">
                    <Button>Create New Product</Button>
                </Link>
            </div>
        </Fragment>
    )
}

export default Home;