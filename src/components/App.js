import React from 'react'
import Filter from './filters/Filter';
import './App.css'
import ExpertList from './experts/ExpertList';

function App() {
  return (
    <div className='app'>
      <Filter />
      <ExpertList />
    </div>
  );
}

export default App;
