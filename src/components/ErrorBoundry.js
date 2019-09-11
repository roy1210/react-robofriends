import React, { Component } from 'react';

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  // Check if app happened error
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oh no, it's an error</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundry;
