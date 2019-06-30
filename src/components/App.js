import React from 'react';
import './styles/App.css';
import PokeList from './PokeList';
import DetailsView from './DetailsView';

class App extends React.Component {
	constructor(){
		super();
		this.state = {};
	}

	render() {
	return(
		<div className="App">
		<PokeList />
		<DetailsView />
		</div>
	);
	}
}

export default App;
