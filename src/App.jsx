import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import RecipeDetails from './Pages/RecipeDetails';
import { Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Favorites from './Pages/Favorites';

function App() {
const [searchItem, setSearchItem ] = useState("");

  return (
 <>
  <Navbar searchItem={searchItem} setSearchItem = {setSearchItem}/>
  <Routes>
    <Route path='/' element={<Home searchItem= {searchItem}/>}/>
    <Route path='/recipe/:id' element={<RecipeDetails/>}/>
    <Route path='/favorites' element={<Favorites searchItem={searchItem}/>}/>
  </Routes>
 </>
  )
}

export default App;
