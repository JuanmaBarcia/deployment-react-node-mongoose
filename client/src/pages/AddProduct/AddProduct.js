import React, { Component } from "react";
import "./AddProduct.css";
import axios from "axios";

class AddProduct extends Component {
  handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      id: parseInt(e.target.elements.id.value),
      title: e.target.elements.title.value,
      price: parseInt(e.target.elements.price.value),
      description: e.target.elements.description.value,
      image: e.target.elements.image.value,
    };

    const host = window.location.protocol + "//" + window.location.hostname;

    await axios({
      method: "post",
      url: `${host}:5000/api/products`,
      data: product,
    });
  };

  render() {
    return (
      <div className='AddProduct'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='id'>id</label>
          <input type='number' name='id' />

          <label htmlFor='title'>nombre</label>
          <input type='text' name='title' />

          <label htmlFor='description'>description</label>
          <input type='text' name='description' />

          <label htmlFor='image'>image</label>
          <input type='text' name='image' value='https://' />

          <label htmlFor='price'>precio</label>
          <input type='number' name='price' />

          <input type='submit' value='Crear' />
        </form>
      </div>
    );
  }
}

export default AddProduct;
