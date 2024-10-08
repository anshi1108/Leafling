// import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from '../src/Components/Home/Home'
import Login from '../src/Components/Login/Login'
import Main from './Components/AddProductB/main';
import AddProduct from './Components/AddProductB/AddProduct/AddProduct';
import ListProduct from './Components/AddProductB/ListProduct/ListProduct';


function App() {
  return (
    <div>
    <Routes>
       <Route path='/' element={<Login/>} />
       <Route path='/home' element={<Home/>} />
       <Route path="/home/business" element={<Main />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<ListProduct />} />
    </Routes>
    </div>
  );
}

export default App;
