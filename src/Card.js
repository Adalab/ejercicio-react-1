import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.image} alt={this.props.imageAlt} />
        <h1 className="name">{this.props.name}</h1>
        <p className="">{this.props.date}</p>
        <p className="">{this.props.text}</p>
        <p className="">{this.props.likes}</p>
      </div>
    );
  }
}

export default Card;
