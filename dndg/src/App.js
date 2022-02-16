import './App.css';
import Class from './compononents/Class/Class.js';
import ClassDesc from './compononents/Class/ClassDesc';
import Home from './compononents/Home/Home'
import ProficienyList from './compononents/Proficieny/ProficiencyList';
import ProfDetails from './compononents/Proficieny/ProfDetails';
import Equipment from './compononents/Equipment/Equipment';
import EqpDetails from './compononents/Equipment/EquipDetails';
import Monster from './compononents/Monsters/Monster';
import MonsterData from './compononents/Monsters/MonsterDetails';
import {Routes, Route, Link} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <nav className='topNavBar'>
        <Link to={'/'} element={<Home/>}>Home</Link> &nbsp;&nbsp;&nbsp;
        <Link to={'/Classes'} element={<Class/>}>Classes</Link> &nbsp;&nbsp;&nbsp;
        <Link to={'/proficiencies'} element={<ProficienyList/>}>Proficiencies</Link> &nbsp;&nbsp;&nbsp;
        <Link to={'/equipment'} element={<Equipment/>}>Equipment</Link> &nbsp;&nbsp;&nbsp;
        <Link to={'/monsters'} element={<Monster/>}>Monsters</Link>
      </nav>
    <h1>Dungeoneering Guide</h1>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/classes' element={<Class/>}/>
      <Route path='/classes/:index' element={<ClassDesc/>} />
      <Route path='/proficiencies' element={<ProficienyList/>}/>
      <Route path='/proficiencies/:index' element={<ProfDetails/>}/>
      <Route path='/equipment' element={<Equipment/>}/>
      <Route path='/equipment/:index' element={<EqpDetails/>}/>
      <Route path='/monsters' element={<Monster/>}/>
      <Route path='/monsters/:index' element={<MonsterData/>}/>
    </Routes>
    </div>
  );
}

export default App;
