import NavBar from '../Navbar';
import image from '../images/com.png'
import { Link } from 'react-router-dom';

const Orders = () => {
    return(
    <div>
        <NavBar/>
        <h1>Orders</h1>
        <img src={image} ></img>
        <Link to='/'><p>Back to Products</p></Link>

    </div>
    )
}

export default Orders;