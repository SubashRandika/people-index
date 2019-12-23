import React, { Component } from 'react';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			people: [],
			searchField: ''
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((data) => {
				const dataWithImg = data.map((element) => {
					return { ...element, avatar: `https://robohash.org/${element.id}?set=set5&size=180x180` };
				});
				this.setState({
					people: dataWithImg
				});
			})
			.catch((err) => {
				console.error(err);
			});
	}

	onSearchChange = (e) => {
		this.setState({
			searchField: e.target.value
		});
	};

	render() {
		const { people, searchField } = this.state;
		const filteredPeople = people.filter((person) => {
			return person.name.toLowerCase().includes(searchField.toLowerCase());
		});

		return (
			<div className='App'>
				<h1>People List</h1>
				<SearchBox placeholder='search people' handleChange={this.onSearchChange} />
				<CardList people={filteredPeople} />
			</div>
		);
	}
}

export default App;
