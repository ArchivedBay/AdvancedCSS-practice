import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={LandingPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
