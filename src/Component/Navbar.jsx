import React  from "react";
import SearchBar from './SearchBar'


const Navbar = ({ searchItem, setSearchItem }) => {
    return (
        <div>
            <nav className='flex justify-around items-center px-6 py-2 shadow-md bg-amber-200 text-xl fixed w-full z-10'>
                <div className="logo font-bold"><img src='/images/logo2.webp' className='w-18 h-18' /></div>
                <div><SearchBar searchItem={searchItem} setSearchItem={setSearchItem}/></div>
            </nav>
        </div>
    )
}; 

export default Navbar;
