import { useEffect, useState } from 'react';
import RecipeCard from '../Component/RecipeCard';
import recipes from '../data/recipe';
import { TiArrowBack } from "react-icons/ti";
import { Link } from 'react-router-dom';

const Favorites = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    const favoriteIds = JSON.parse(localStorage.getItem('favorites')) || [];
    const matchedRecipes = recipes.filter(recipe => favoriteIds.includes(recipe.id));
    setFavoriteRecipes(matchedRecipes);
  }, []);

  return (
    <div className="min-h-screen pt-30">
      {favoriteRecipes.length === 0 ? (
    <div className='flex flex-col justify-center min-h-125  items-center gap-4'>
    <h2 className='text-3xl font-semibold'>Your Favorite is empty now!</h2>    
   <p className=" text-gray-600 text-lg">You haven't added any favorites yet.</p>
       <Link to="/">
      <button className="flex gap-1 items-center mt-4 cursor-pointer px-4 py-3 bg-gradient-to-r from-red-500 to-amber-500 font-semibold text-white rounded hover:bg-gradient-to-r hover:from-amber-400 hover:to-red-400">
      <TiArrowBack size={27} />Back to Home
      </button>
      </Link>
        </div>
    
        
      ) : (
        <>
        <div>
            <h2 className='text-4xl font-bold text-center my-10 text-gray-900'>My Favorite Recipe</h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-14 px-12">
          {favoriteRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipes={recipe} />
          ))}
        </div>
        </div>
        </>
      )}
    </div>
  );
};

export default Favorites; 