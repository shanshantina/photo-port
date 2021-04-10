import React from 'react';
import About from './components/About';
import Nav from './components/Nav';

function App() {
  return (
    // JSX(JavaScript XML) that can represent HTML in JavaScript
    /* React.createElement('div", {}, [
       React.createElement('h1', {}, 'Ginger'),
       React.createElement('p', {}, 'breed: Brittany Spaniel'),
       ]) */
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
