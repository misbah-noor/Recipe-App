import React  from "react";
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import { MdFavoriteBorder } from "react-icons/md";

const Navbar = ({ searchItem, setSearchItem }) => {
    return (
        <div>
            <nav className='flex justify-between items-center px-4 lg:px-60 py-2 shadow-md bg-gradient-to-r from-amber-200 to-amber-300 text-xl fixed w-full z-10'>
                <div className="logo font-bold"><img src='/images/pngegg (18).png' className='h-16 w-20 sm:w-29 sm:h-20 object-cover' /></div>
                <div className="flex items-center gap-2">
                <SearchBar searchItem={searchItem} setSearchItem={setSearchItem}/>
                <button className="bg-white p-2 rounded-full"><Link to='/favorites' className="text-lg "><MdFavoriteBorder size={25} /></Link></button>
                </div>
            </nav>
        </div>
    )
}; 

export default Navbar;
