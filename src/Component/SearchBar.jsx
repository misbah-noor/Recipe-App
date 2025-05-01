import { React, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
    const [isOpen, setIsOpen ] = useState(false);
    const handleToggle = () =>{
        setIsOpen(true);
    };

    return(
        <div className='flex items-center focus-within:ring-2 focus-within:ring-red-400 bg-white px-3 py-2 rounded-full'>
            <input type='text' placeholder='Enter Recipe...' className={`transition-all ease-in-out duration-500 ${isOpen ? 'w-60 px-3 focus:outline-none border-none text-lg' : 'w-0 px-0 overflow-hidden'}`} />
            <button onClick={handleToggle} className='cursor-pointer'><FiSearch /></button>
        </div>
    )
}
export default SearchBar;