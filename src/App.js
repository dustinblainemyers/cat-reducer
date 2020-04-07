import React from 'react';
import logo from './logo.svg';
import './App.css';
import Activity from './components/Activity'
import ModifyName from './components/ModifyName'
import ModifyActivity from './components/ModifyActivity'

function App() {
  return (
    <div className="App">
      <ModifyName/>
      <ModifyActivity/>
      <Activity />
    </div>
  );
}

export default App;
