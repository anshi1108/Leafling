import React from 'react'
import './Admin.css'
import Sidebar from '../Sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import AddProduct from '../AddProduct/AddProduct'
import ListProduct from '../ListProduct/ListProduct'

const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar/>
      <Routes>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/listproduct' element={<ListProduct/>}/>
      </Routes>
      <div className="flex-grow-1 p-3">
          {/* Your Social Media Page Content Goes Here */}
          <h1>Welcome to the Bussiness Platform</h1>
          <p>This is where you can add product and view the uploaded porduct</p>
        </div>
      </div>
  )
}

export default Admin
