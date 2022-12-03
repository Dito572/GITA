import Home from './Components/Home';
import Add from './Components/Add';
import Edit from './Components/Edit';
import Delete from './Components/Delete';
import Customers from './Components/pages/Customers';
import Orders from './Components/pages/Orders';
import Reports from './Components/pages/Reports';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/create' element={<Add />}/>
            <Route path='/edit' element={<Edit />}/>
            <Route path='/delete' element={<Delete />}/>
            <Route path='/customers' element={<Customers />}/>
            <Route path='/orders' element={<Orders />}/>
            <Route path='/reports' element={<Reports />}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App; 
