import React, {Componenet} from 'react';
import './styles/PokeCell.css';


class PokeCell extends React.Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.props.id);
  }

  render() {
    return (
      <button className="poke-cell" onClick={this.handleClick} style={this.props.style}>
      </button>
    );
  }
};

export default PokeCell;
