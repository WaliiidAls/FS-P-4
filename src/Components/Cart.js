import React, { Component } from "react";

class Cart extends Component {
  render() {
    const { cart } = this.props;
    let quantity;
    let total = 0;
    cart.forEach((value, index) => {
      let number = parseFloat(value.item.price.replace(/[^0-9.-]+/g, ""));
      console.log(number);
      quantity++;
      total += number;
      console.log(total);
    });
    return (
      <main className="cart">
        <h1>Your Cart</h1>
        <table>
          <tbody>
            {cart.map((item) => (
              <tr key={item.item.name}>
                <td>
                  <img src={item.image} alt={item.item.name} />
                </td>
                <td>{item.item.name}</td>
                <td>01</td>
                <td>{item.item.price}</td>
                <td>
                  <a href="#">
                    <button>CHECK OUT</button>
                  </a>
                </td>
              </tr>
            ))}
            <tr>
              <td>All items</td>
              <td></td>
              <td>0{cart.length}</td>
              <td>{total}$</td>
              <td>
                <a href="#">
                  <button>CHECK OUT ALL</button>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    );
  }
}

export default Cart;
