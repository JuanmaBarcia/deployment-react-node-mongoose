import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Products} />
          <Route path='/addproduct' component={AddProduct} />
        </Switch>
      </div>
    );
    return (
      <>
        <Header />
        <Switch>
          <App />
        </Switch>
      </>
    );
  }
}

export default App;
