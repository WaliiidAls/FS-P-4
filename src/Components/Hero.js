import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="left">
          <img src={this.props.image[0]} alt="glasses" />
        </div>
        <div className="right">
          <h1>Lorem ipsum dolor sit amet</h1>
          <h6>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, labore,
            cumque iure iusto nulla cupiditate obcaecati, molestias consectetur
            <br />
            quia accusantium ut provident blanditiis sunt illo magnam culpa
            laboriosam architecto sapiente!
          </h6>
          <a href="#">
            <button>OUR PRODUCTS</button>
          </a>
        </div>
      </section>
    );
  }
}

export default Hero;
