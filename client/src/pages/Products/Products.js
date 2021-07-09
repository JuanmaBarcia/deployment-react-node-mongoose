import React, { Component } from "react";
import "./Products.css";
import axios from "axios";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.getProducts();
    console.log(process.env.PORT);
    console.log(process.env.HOST);
  }

  getProducts = async () => {
    const host = window.location.protocol + "//" + window.location.hostname;
    const res = await axios({
      method: "get",
      url: `${host}:5000/api/products`,
    });
    const products = res.data;
    this.setState({ products });
  };

  renderProducts = () => {
    console.log(this.state.products);
    return this.state.products.map((product, i) => (
      <>
        <div className='product' key={i}>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} />
        </div>
      </>
    ));
  };

  render() {
    return <div>{this.renderProducts()}</div>;
  }
}

export default Products;
