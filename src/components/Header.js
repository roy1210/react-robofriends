import React, { Component } from 'react';

class Header extends Component {
  // To avoid render `header` again
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    return (
      <div>
        <h1 className='f2'>RoboFriends</h1>
      </div>
    );
  }
}
export default Header;
