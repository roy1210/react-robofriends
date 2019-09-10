import React, { Component } from 'react';
// import { robots } from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchfield: ''
    };
  }

  // no need to use arrow function to bind due to react function
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(robot => this.setState({ robots: robot }));
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className='tc'>
          <h1 className='f2'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList robots={filteredRobots} />
        </div>
      );
    }
  }
}

export default App;
