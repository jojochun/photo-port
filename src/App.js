// this file is the center of the application, it is the root component that houses all other components
// need to import React in evey component file
import React from 'react';
// import any images or CSS you want
// import './App.css';

import Nav from './components/Nav';
import About from './components/About';


function App() {
  // this function returns JSX: a language that can represent HTML in JS
  return (
    <div >
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
