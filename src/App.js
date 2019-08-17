import React, {Component} from 'react';

import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component'

class App extends Component {
  state = {
    monsters: [],
    searchField: ''
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({monsters: users}))
    .catch(err => console.log(err))
  }
  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return (
      <div className="App">
      <h1>Monster Ronolodex</h1>
      <SearchBox placeholder="Search Monster" handleChange={this.handleChange} />
      <CardList monsters={filteredMonsters} />
    </div>
    );
  }
}

export default App;
