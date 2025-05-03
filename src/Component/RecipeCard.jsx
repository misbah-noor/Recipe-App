import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const RecipeCard = ({recipes}) => {

  const [isFavorite, setIsFavorite] = useState(false);

  //Load favourite state from local storage
  useEffect(() => {
   const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
   setIsFavorite(favorites.includes(recipes.id));
  }, [recipes.id]);

  // Toggle Favourite anf update local storage
  const toggleFavorite = ()=>{
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let updatedFavorites;

    if(favorites.includes(recipes.id)){
      updatedFavorites = favorites.filter(id => id !== recipes.id);
      setIsFavorite(false);
    }
    else{
      updatedFavorites = [...favorites, recipes.id];
      setIsFavorite(true);
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

return(

    <div className='relative bg-white rounded-xl shadow-2xl overflow-hidden'>
      {/* Recipe Image */}
      <img src={recipes.image} alt={recipes.title} className='w-full h-75 object-cover hover:scale-105 transition-all ease-in-out duration-400' />

      {/* Recipe Info */}
      <div className='p-6 flex flex-col justify-center items-center'>
        <h2 className='text-2xl font-bold mb-2'>{recipes.title}</h2>
        <p className='text-gray-700'>{recipes.description}</p>

        {/* Fav toggle button */}
        <button onClick={toggleFavorite} className='absolute top-4 right-4 text-2xl text-red-600 hover:scale-110 transition-all'>{isFavorite ? '❤️' : '🤍'}</button>

        {/* View details button */}
        <button className='px-4 py-3 bg-gradient-to-r from-amber-500 to-red-500 rounded-lg w-full text-white my-5 hover:bg-gradient-to-r hover:from-red-500 hover:to-amber-500 cursor-pointer font-semibold text-lg transition-all ease-in-out duration-300'><Link to={`/recipe/${recipes.id}`}>View Details</Link></button>   
       </div>   
    </div>

);
};

export default RecipeCard;