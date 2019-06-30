import React from 'react';
import './styles/DetailsView.css'

const DetailsView = ( {pokemon} ) => {
  const {id, name, sprite, move1, move2, move3, move4, type} = pokemon;
    return (
      <section className='details-view'>
        <img src={sprite} className='sprite-image' alt="sprite" />
        <div className='data-wrapper'>
          <h1 className='data-name'>ID: {id} {name}</h1>
          <p className='data-char'>{type}</p>
          <p className='data-char'>{move1}  {move2}  {move3}  {move4}</p>
        </div>
      </section>
    );
};

export default DetailsView;
