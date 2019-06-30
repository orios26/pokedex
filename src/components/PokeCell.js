import React from 'react';
import './styles/PokeCell.css';
import sprites from '../assets/sprites.png';

const PokeCell = ({ pokeClass, handleOnClick }) => {
  const {id, backgroundPosition } = pokeClass;
  const style = { backgroundImage: `url(${sprites})`, backgroundPosition };
  return <button className='poke-cell' style={style} onClick={handleOnClick.bind(this, id)}></button>
}

export default PokeCell;
