import React from "react";
// Components
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Content from "./Components/Content";
import Advertisement from "./Components/Advertisement";
import Footer from "./Components/Footer";
import Showing from "./Components/Showing";
import Cart from "./Components/Cart";
// data
import dataJson from "./data/store-items.json";
// Images
function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context("./img", false, /\.(png|jpe?g|svg)$/));

class App extends React.Component {
  state = {
    cart: [],
    showing: null,
  };
  render() {
    // Object props
    const NavbarProps = {
      logo: images.filter((i) => i.includes("logo")),
      cart: images.filter((i) => i.includes("cart")),
    };
    const products = {
      data: dataJson,
      items: images.filter((i) => i.includes("item")),
    };
    const showing = {
      showing: this.state.showing,
      images: images.filter((i) => i.includes("base")),
    };
    const suggestions = {
      data: dataJson,
      images: images.filter((i) => i.includes("item")),
    };
    // handles
    const handleItemClick = (item) => {
      const newState = { ...this.state, showing: item };
      this.setState(newState);
    };
    const handleGoBack = () => {
      const newState = { ...this.state, showing: null };
      this.setState(newState);
    };
    const handleAddToCart = (item, callback) => {
      item.item.quantity++;
      const newState = { ...this.state };
      newState.cart.push(item);
      this.setState(newState);
      callback();
    };
    const handleGoCart = () => {
      const newState = { ...this.state, showing: "cart" };
      this.setState(newState);
    };
    return (
      <>
        <Navbar
          images={NavbarProps}
          handleGoBack={() => handleGoBack()}
          handleGoCart={() => handleGoCart()}
        />
        {this.state.showing === "cart" ? (
          <>
            <Cart handleGoBack={() => handleGoBack()} cart={this.state.cart} />
          </>
        ) : this.state.showing ? (
          <>
            <Showing
              package={showing}
              handleItemClick={(item) => handleItemClick(item)}
              suggestions={suggestions}
              handleAddToCart={(item, callback) =>
                handleAddToCart(item, callback)
              }
            />
          </>
        ) : (
          <>
            <Hero image={images.filter((i) => i.includes("base"))} />
            <Content
              products={products}
              handleItemClick={(item) => handleItemClick(item)}
            />
          </>
        )}
        <Advertisement image={images.filter((i) => i.includes("mailing"))} />
        <Footer />
      </>
    );
  }
}

export default App;
