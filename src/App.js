import React from 'react';
import logo from './logo.svg';
import './App.css';
import Employee from './Employee';

function App() {
  return (
    <div className="App">

      <Employee employeeName="Naveed" designation="Programmer" />

      <Employee employeeName="Azhar" designation="Analyst" />

    </div>
  );
}

export default App;
