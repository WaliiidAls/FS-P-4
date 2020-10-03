import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="left">
          <img src={this.props.images.logo[0]} alt="logo" />
          <div>
            <a href="/#" onClick={() => this.props.handleGoBack()}>
              <h3>Home</h3>
            </a>
            <a href="/#" onClick={() => this.props.handleGoBack()}>
              <h3>Collection</h3>
            </a>
            <a href="/#">
              <h3>Contact</h3>
            </a>
          </div>
        </div>
        <div className="right">
          <img src={this.props.images.cart[0]} alt="cart" />
          <a href="/#" onClick={() => this.props.handleGoCart()}>
            <h3>Cart</h3>
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
