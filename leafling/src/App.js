// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import Marketplace from './Components/Marketplace/Marketplace';
import Info from './Components/info/Info';
import Guide from './Components/Learner_guide/Guide_home';
import Cactus from './Components/Learner_guide/Cactus';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/home' element={<Home />} />
      <Route path='/marketplace' element={<Marketplace />} />
      <Route path='/info' element={<Info />} />
      <Route path='/guide' element={<Guide />} />
      <Route path='/cactus' element={<Cactus />} />
    </Routes>
  );
}


export default App;
