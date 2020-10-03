import React, { Component } from "react";

class Showing extends Component {
  state = {
    colors: [
      { id: 0, selected: true },
      { id: 1, selected: false },
      { id: 2, selected: false },
    ],
    added: false,
  };
  render() {
    let { showing, images } = this.props.package;
    let { suggestions } = this.props;
    const handleColor = (item) => {
      const newState = { ...this.state };
      newState.colors.map((i) =>
        i.id === item.id ? (i.selected = true) : (i.selected = false)
      );
      this.setState(newState);
    };
    return (
      <main className="showing">
        <div className="container">
          <div className="left">
            <img src={showing.image} alt={showing.item.name} />
            <img src={images[1]} alt={showing.item.name} />
            <img src={images[2]} alt={showing.item.name} />
          </div>
          <img src={showing.image} alt={showing.item.name} />
          <div className="right">
            <h1>{showing.item.price}</h1>
            <h2>{showing.item.name}</h2>
            <h6>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              doloribus aut quos nesciunt at amet molestiae officia inventore
              quaerat harum, nostrum autem, magnam unde corrupti consequatur
              temporibus vel. Eaque, ipsa!
            </h6>
            <div className="color">
              <div>
                <h3>Color:</h3>Pink
              </div>
              <span>
                {this.state.colors.map((item) =>
                  item.selected ? (
                    <div key={item.id}>
                      <div className="selected"></div>
                    </div>
                  ) : (
                    <div key={item.id} onClick={() => handleColor(item)}></div>
                  )
                )}
              </span>
            </div>
            <div className="quantity">
              <h4>01</h4>
              <a
                href="/#"
                onClick={() =>
                  this.props.handleAddToCart(this.props.package.showing, () =>
                    this.setState({ ...this.state, added: true })
                  )
                }
              >
                <button className={this.state.added ? "added" : ""}>
                  {this.state.added ? "ADDED" : "ADD TO CART"}
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="more">
          <h1>Might also like</h1>
          <div className="container">
            {suggestions.data.slice(3, 6).map((item) => (
              <a
                href="/#"
                onClick={() =>
                  this.props.handleItemClick({
                    item,
                    image: suggestions.images.find((i) =>
                      i.includes(item.image)
                    ),
                  })
                }
                key={item.name}
              >
                <div className="item">
                  <img
                    src={suggestions.images.find((i) => i.includes(item.image))}
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
        </div>
      </main>
    );
  }
}

export default Showing;
