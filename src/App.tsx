import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const sum = (a: number, b: number): number => {
    return a + b;
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code>
          {sum(5, 101)}
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
