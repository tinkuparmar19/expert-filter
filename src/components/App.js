import React, {useReducer, createContext} from 'react'
import Filter from './filters/Filter';
import './App.css'
import ExpertList from './experts/ExpertList';
import { initialState, reducer } from '../Reducer';
import Navbar from './navbar/Navbar';


export const userContext = createContext()

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className='app'>
      <div>
        <Navbar />
      </div>
      <div className='container'>
        <userContext.Provider value={{state, dispatch}}>
          <Filter />
          <ExpertList />
        </userContext.Provider>
      </div>
    </div>
  );
}

export default App;
