import React from 'react';
import DataProvider from './components/DataProvider'
import './App.css';
import InputWithResult from './components/InputWithResult';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <InputWithResult func='encode' id='1'></InputWithResult>
        <InputWithResult func='decode' id='2'></InputWithResult>
      </DataProvider>
    </div>
  );
}

export default App;
