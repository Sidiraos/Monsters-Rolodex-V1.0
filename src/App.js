import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CardList from './components/cardList component/CardList';
import SearchBox from './components/searchBox component/SearchBox';

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			seachField: '',
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => {
				this.setState(
					() => {
						return {
							monsters: users,
						};
					},
					() => {
						console.log(users);
					}
				);
			});
	}

	onSearchChange = (e) => {
		const seachField = e.target.value.toLowerCase();
		console.log(seachField);
		this.setState(() => {
			return { seachField };
		});
	};

	render() {
		const { monsters, seachField } = this.state;
		const { onSearchChange } = this.onSearchChange;
		const filteredMonsters = monsters.filter((monster) => {
			return monster.name.toLowerCase().includes(seachField);
		});

		return (
			<div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
				<SearchBox
					className="search-box-monsters"
					placeholder="search monsters"
					handleSearch={this.onSearchChange}
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
