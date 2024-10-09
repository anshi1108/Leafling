import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Marketplace from './Components/Marketplace/Marketplace';
import Info from './Components/info/Info';
import Guide from './Components/Learner_guide/Guide_home';
import Cactus from './Components/Learner_guide/Cactus';
import Bills from './Components/Marketplace/Bills/Bills';
import CreatePost from './Components/Home/CreatePost';
import Profile from './Components/Profile/Profile'; // Import Profile component
import Notifications from './Components/Notifications/Notifications'; // Import Notifications component
import { AuthProvider } from './Context/AuthContext'; // Import AuthProvider

function App() {
  const [orders, setOrders] = useState([]); // State to store orders

  const addOrder = (orderDetails) => {
    setOrders([...orders, orderDetails]);
  };

  return (
    <AuthProvider> {/* Wrap routes with AuthProvider */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
        <Route path='/marketplace' element={<Marketplace addOrder={addOrder} />} />
        <Route path='/info' element={<Info />} />
        <Route path='/guide' element={<Guide />} />
        <Route path='/cactus' element={<Cactus />} />
        <Route path='/bills' element={<Bills orders={orders} />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/profile" element={<Profile />} /> {/* Added Profile route */}
        <Route path="/notifications" element={<Notifications />} /> {/* Added Notifications route */}
      </Routes>
    </AuthProvider>
  );
}

export default App;
