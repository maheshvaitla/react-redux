// import logo from './logo.svg';
import './App.css';
// import {useDispatch, useSelector} from "react-redux"
// import { useState } from 'react';

import { Todos } from './component/Todos';
import { Counter } from './component/Counter';
function App() {
  
  return (
    <div className="App">
      <Counter /> 
      <hr/>
      <Todos />
    </div>
  );
}

export default App;