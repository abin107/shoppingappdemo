import React, { Component } from 'react';
import Landing                from '../Landing';
import FloatCart            from '../FloatCart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Landing />
        </main>
        <FloatCart />
      </div>
    );
  }
}

export default App;
