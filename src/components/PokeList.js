import React from 'react';
import './styles/PokeList.css';
import PokeCell from './PokeCell.js';
import { pokeClasses } from '../pokeClasses';
import sprites from '../assets/sprites.png';



const PokeList = (props) => {
  const cells = pokeClasses.map(pokeClass => {
    const backgroundPosition = pokeClass.backgroundPosition;
    const style = {backgroundImage: `url(${sprites})`, backgroundPosition, padding: '1px'};
    return (
      <PokeCell
      key={pokeClass.id}
      id={pokeClass}
      pokeCLass={pokeClass}
      style={style}/>
    );
  });

  return(
    <section className="poke-list">
      {cells}
    </section>
  );
}








// function PokeList () {
//   const list = pokeClasses;
//   return(
//     <section className="poke-list">
//     {list.map(pokeClass =>
//       <PokeCell key={pokeClass.id}
//       pokeclass={pokeClass} />
//     )}
//     </section>
//   );
// }

export default PokeList;
