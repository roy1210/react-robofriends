import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { robots } from './robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchField } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: []
    };
  }

  // no need to use arrow function to bind due to react function
  componentDidMount() {
    console.log(this.props.store);
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(robot => this.setState({ robots: robot }));
  }

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (!robots.length) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className='tc'>
          <h1 className='f2'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              {/* CardList is `children` for Scroll (props.children)*/}
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  };
};
const mapDispatchToProps = dispatch => {
  return {
    // onSearchChange -> take as props to pass
    onSearchChange: event => dispatch(setSearchField(event.target.value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
