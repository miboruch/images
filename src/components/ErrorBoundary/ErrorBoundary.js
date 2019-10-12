import React from 'react';

import NotFound from '../NotFound/NotFound';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    message: ''
  };

  componentDidCatch = (error, info) => {
    this.setState({ hasError: true, message: error });
  };

  render() {
    if (this.state.hasError) {
      return <NotFound />;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
