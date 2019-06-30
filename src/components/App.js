import React from 'react';
import './styles/App.css';
import PokeList from './PokeList';
import DetailsView from './DetailsView';
import Pokemon from '../Pokemon';

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			pokemon: {}
		};
		this.handleOnClick = this.handleOnClick.bind(this);
	}

	handleOnClick(id) {
		fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
		.then(res => res.json())
		.then(data => {
			const pokemon = new Pokemon(data);
			this.setState( {pokemon} );
		})
		.catch(err => console.log(err));
		console.log(id);
	}

	render() {
	return(
		<div className="App">
		<PokeList handleOnClick={this.handleOnClick}/>
		<DetailsView pokemon={this.state.pokemon}/>
		</div>
	);
	}
}

export default App;
