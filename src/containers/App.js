import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { robots } from './robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchField, requestRobots } from '../actions';
import Header from '../components/Header';

class App extends Component {
  // no need to use arrow function to bind due to react function
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (isPending) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className='tc'>
          <Header />
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
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    // XXXX: -> take as props to pass
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    // return function
    onRequestRobots: () => dispatch(requestRobots())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
