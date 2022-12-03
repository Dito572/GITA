import NavBar from '../Navbar';
import image from '../images/com.png'
import { Link } from 'react-router-dom';

const Customers = () => {
    return(
    <div>
        <NavBar/>
        <h1>Customers</h1>
        <img src={image} ></img>
        <Link to='/'><p>Back to Products</p></Link>
    </div>
    )
}

export default Customers;