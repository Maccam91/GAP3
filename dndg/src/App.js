import './App.css';
import Class from './compononents/Class/Class.js';
import ClassDesc from './compononents/Class/ClassDesc';
import Home from './compononents/Home/Home'

import {Routes, Route} from 'react-router-dom'



function App() {
  return (
    <div className="App">
    <h1>Beginning of something great</h1>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/classes' element={<Class/>}/>
      <Route path='/classes/:index' element={<ClassDesc/>} />    
    </Routes>
    </div>
  );
}

export default App;
