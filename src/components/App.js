import React, { useState } from 'react';
import './App.scss';
import Nav from './Nav';
import Sidebar from './Sidebar';
import Builder from './Builder';
import Monitor from './Monitor';

function App() {
  const [components, updateComponents] = useState([]);

  const getComponent = (component) => {
    const componentList = [...components];
    componentList.push(component);
    updateComponents(componentList);
  }

  return (
    <div className="App">
      <Nav />
      <section className="App-main">
        <Sidebar adder={getComponent} />
        <div className="App-body">
          <Builder incoming={components} />
          <Monitor />
        </div>
      </section>
    </div>
  );
}

export default App;
