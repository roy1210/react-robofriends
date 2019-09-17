import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Header from '../components/Header';
import './MainPage.css';
import ErrorBoundry from './ErrorBoundry';

class MainPage extends Component {
  // no need to use arrow function to bind due to react function
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    return this.props.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.props.searchField.toLowerCase());
    });
  };

  render() {
    const { onSearchChange, isPending } = this.props;

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
              <CardList robots={this.filterRobots()} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}

export default MainPage;
