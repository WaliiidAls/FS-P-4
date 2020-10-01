import React, { Component } from "react";

class Advertisement extends Component {
  render() {
    return (
      <section className="ads">
        <img src={this.props.image[0]} alt="ads" />
        <div className="mailing">
          <h3>Sign up for our newsletter and get 10% off your next order.</h3>
          <input type="email" placeholder="Your Email" />
        </div>
      </section>
    );
  }
}

export default Advertisement;
