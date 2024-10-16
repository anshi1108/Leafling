import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './AddProduct.css';
import upload from '../../../images/Assets/upload.svg';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

const AddProduct = () => {
  const [image, setImage] = useState(null); // Use null for file uploads

  const [productDetails, setProductDetails] = useState({
    id: '', // Initialize as empty string
    name: '',
    image: '',
    category: 'indoor plants',
    new_price: '',
    old_price: ''
  });

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const Add_Product = async () => {
    // Generate UUID as string
    const uuid = uuidv4();
  
    // Convert UUID string to a number within the range 1 to 3000
    const maxId = 300;
    const idAsNumber = Math.floor(parseInt(uuid.replace(/-/g, '').slice(0, 12), 16) / 281474976710656 * maxId) + 1;
  
    // Retrieve uploader's username from local storage
    const uploader = localStorage.getItem('username'); // Assuming you saved the username as 'username'
  
    // Prepare product data for backend
    const product = {
      id: idAsNumber, // Convert UUID string to number
      name: productDetails.name,
      image: productDetails.image,
      category: productDetails.category,
      new_price: productDetails.new_price,
      old_price: productDetails.old_price,
      uploader: uploader // Add uploader's username here
    };
  
    // Image upload handling
    let responseData;
    const formData = new FormData();
    formData.append('product', image);
  
    try {
      // Upload image first
      const uploadResponse = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData
      });
  
      // Parse upload response
      const uploadData = await uploadResponse.json();
      responseData = uploadData;
  
      console.log('Upload Response:', responseData); // Log the response
  
      // If image upload successful
      if (responseData.success) {
        product.image = responseData.image_url;
  
        // Add product to backend
        const addProductResponse = await fetch('http://localhost:5000/addproduct', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(product)
        });
  
        const addProductData = await addProductResponse.json();
  
        console.log('Add Product Response:', addProductData); // Log the response
  
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while adding the product');
    }
  };
  
  return (
    <>
      <Navbar />
      <div className='add-product'>
        <div className='addproduct-itemfield'>
          <p>Product title</p>
          <input
            value={productDetails.name}
            onChange={changeHandler}
            type='text'
            name='name'
            placeholder='Enter title Here'
          />
        </div>
        <div className='addproduct-price'>
          <div className='addproduct-itemfield'>
            <p>Price</p>
            <input
              value={productDetails.old_price}
              onChange={changeHandler}
              type='text'
              name='old_price'
              placeholder='Enter price'
            />
          </div>
          <div className='addproduct-itemfield'>
            <p>Offer Price</p>
            <input
              value={productDetails.new_price}
              onChange={changeHandler}
              type='text'
              name='new_price'
              placeholder='Type here'
            />
          </div>
        </div>
        <div className='addproduct-itemfield'>
          <p>Product Category</p>
          <select
            value={productDetails.category}
            onChange={changeHandler}
            name='category'
            className='add-product-selector'
          >
            <option value="indoor">Indoor Plants</option>
            <option value="outdoor">Outdoor Plants</option>
            <option value="succulents">Succulents</option>
            <option value="flowering">Flowering Plants</option>
            <option value="herbs">Herbs</option>
            <option value="vegetables">Vegetables</option>
            <option value="trees">Trees</option>
            <option value="care">Plant Care Tips</option>
            <option value="pests">Pest Control</option>
          </select>
        </div>
        <div className='addproduct-itemfield'>
          <label htmlFor='file-input'>
            <img
              src={image ? URL.createObjectURL(image) : upload}
              className='addproduct-thumbnail-img'
              alt=''
            />
          </label>
          <input onChange={imageHandler} type='file' name='image' id='file-input' hidden />
        </div>
        <button onClick={Add_Product} className='addproduct-btn'>
          ADD
        </button>
      </div>
      <Footer />
    </>
  );
};

export default AddProduct;