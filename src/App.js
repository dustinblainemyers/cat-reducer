import React from 'react';
import logo from './logo.svg';
import './App.css';
import Activity from './components/Activity'
import ModifyName from './components/ModifyName'

function App() {
  return (
    <div className="App">
      <ModifyName/>
      <Activity />
    </div>
  );
}

export default App;
