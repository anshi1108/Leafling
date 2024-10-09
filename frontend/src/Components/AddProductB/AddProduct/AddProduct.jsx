import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import "./AddProduct.css";
import upload from "../../../images/Assets/upload.svg";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    id: "",
    name: "",
    image: "",
    category: "indoor",
    new_price: "",
    old_price: "",
  });

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const Add_Product = async () => {
    // Add product logic...
  };

  return (
    <>
      <Navbar />
      <div className="add-product-page">
        <Sidebar />
        <div className="add-product-content">
          <div className="add-product">
            <div className="addproduct-itemfield">
              <p>Product title</p>
              <input
                value={productDetails.name}
                onChange={changeHandler}
                type="text"
                name="name"
                placeholder="Enter title Here"
              />
            </div>
            <div className="addproduct-price">
              <div className="addproduct-itemfield">
                <p>Price</p>
                <input
                  value={productDetails.old_price}
                  onChange={changeHandler}
                  type="text"
                  name="old_price"
                  placeholder="Enter price"
                />
              </div>
              <div className="addproduct-itemfield">
                <p>Offer Price</p>
                <input
                  value={productDetails.new_price}
                  onChange={changeHandler}
                  type="text"
                  name="new_price"
                  placeholder="Type here"
                />
              </div>
            </div>
            <div className="addproduct-itemfield">
              <p>Product Category</p>
              <select
                value={productDetails.category}
                onChange={changeHandler}
                name="category"
                className="add-product-selector"
              >
                {/* Add your options here */}
              </select>
            </div>
            <div className="addproduct-itemfield">
              <label htmlFor="file-input">
                <img
                  src={image ? URL.createObjectURL(image) : upload}
                  className="addproduct-thumbnail-img"
                  alt=""
                />
              </label>
              <input
                onChange={imageHandler}
                type="file"
                name="image"
                id="file-input"
                hidden
              />
            </div>
            <button onClick={Add_Product} className="addproduct-btn">
              ADD
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddProduct;
