import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box.component.jsx';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };

    // This is one way to allow the this to bind to the app component
    // for defined methods
    // this.handleChange = this.handleChange.bind(this);
  }

  // Life-cycle method to respond to rendering page
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return (
     <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        placeholder='Search Monsters'
        handleChange={this.handleChange}
      />
      <CardList monsters={filteredMonsters} />
     </div>
    )
  }
}

export default App;
