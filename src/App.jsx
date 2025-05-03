import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import RecipeDetails from './Pages/RecipeDetails';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Favorites from './Pages/Favorites';
import LoadingSpinner from './Component/LoadingSpinner';


function App() {
const [searchItem, setSearchItem ] = useState("");
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
   setIsLoading(false); 
  }, 1000);
  return () => clearTimeout(timer);
}, []);


if(isLoading) {
  return <LoadingSpinner />;
}

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
