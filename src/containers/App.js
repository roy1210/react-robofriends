import React, { Component } from 'react';
// import { robots } from './robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
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
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    if (!robots.length) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className='tc'>
          <h1 className='f2'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            {/* CardList is `children` for Scroll (props.children)*/}
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
