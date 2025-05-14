import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    const { img, title, category, price } = this.props;

    return (
      <Card className={`h-100 ${this.state.selected ? "border-danger" : ""}`}>
        <Card.Img variant="top" src={img} onClick={() => this.setState({ selected: true })} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Category:<strong> {category}</strong>
          </Card.Text>
          <Card.Text>
            Cost:<strong> {price}</strong>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
