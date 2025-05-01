import Navbar from './Component/Navbar';
import Home from './Pages/Home'
import { useState } from 'react'
import './App.css'

function App() {
const [searchItem, setSearchItem ] = useState("");

  return (
 <>
  <Navbar searchItem={searchItem} setSearchItem = {setSearchItem}/>
  <Home searchItem= {searchItem}/>
 </>
  )
}

export default App;
