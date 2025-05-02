import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import RecipeDetails from './Pages/RecipeDetails';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Favorites from './Pages/Favorites';
import LoadingSpinner from './Component/LoadingSpinner';


function RouteWrapper({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <LoadingSpinner />}
      <div className={loading ? "blur-sm pointer-events-none" : ""}>{children}</div>
    </>
  );
}


function App() {
const [searchItem, setSearchItem ] = useState("");

  return (
 <>
  <Navbar searchItem={searchItem} setSearchItem = {setSearchItem}/>
  <RouteWrapper>
  <Routes>
    <Route path='/' element={<Home searchItem= {searchItem}/>}/>
    <Route path='/recipe/:id' element={<RecipeDetails/>}/>
    <Route path='/favorites' element={<Favorites searchItem={searchItem}/>}/>
  </Routes>
  </RouteWrapper>
 </>
  )
}

export default App;
