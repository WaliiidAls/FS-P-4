import React, { Component } from "react";

class Content extends Component {
  render() {
    const { products } = this.props;
    return (
      <main>
        <div className="container">
          {products.data.map((item) => (
            <a
              href="/#"
              onClick={() =>
                this.props.handleItemClick({
                  item,
                  image: products.items.find((i) => i.includes(item.image)),
                })
              }
              key={item.name}
            >
              <div className="item">
                <img
                  src={products.items.find((i) => i.includes(item.image))}
                  alt={item.name}
                />
                <div className="details">
                  <h3>{item.name}</h3>
                  <h3>{item.price}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>
        <a href="/#">
          <button>MORE PRODUCTS</button>
        </a>
      </main>
    );
  }
}

export default Content;
