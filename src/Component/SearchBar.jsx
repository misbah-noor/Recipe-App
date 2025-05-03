import { React, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ searchItem, setSearchItem }) => {

    // state to control input visibility
    const [isOpen, setIsOpen ] = useState(false);

    // trigger input expansion
    const handleToggle = () =>{
        setIsOpen(true);
    };
    return(
        <div className='flex items-center focus-within:ring-2 focus-within:ring-red-400 bg-white px-3 py-2 rounded-full'>

              {/* input field expands on search icon click */}
            <input type='text' placeholder='Enter recipe name...'
            value={searchItem} onChange={(e) => setSearchItem(e.target.value)} className={`transition-all ease-in-out duration-500 ${isOpen ? 'sm:w-60 w-35 px-3 focus:outline-none border-none sm:text-lg text-sm' : 'w-0 px-0 overflow-hidden'}`} />

            {/* search icon button */}
            <button onClick={handleToggle} className='cursor-pointer'><FiSearch /></button>
        </div>
    )
}
export default SearchBar;