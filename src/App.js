import React from 'react';
import logo from './logo.svg';
import './App.css';
import Activity from './components/individualCat'
import ModifyName from './components/ModifyName'
import ModifyActivity from './components/catList'

function App() {
  return (
    <div className="App">
      <ModifyName/>
      <ModifyActivity/>
      <catList/>
    </div>
  );
}

export default App;
