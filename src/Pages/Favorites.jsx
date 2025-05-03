import { useEffect, useState } from 'react';
import RecipeCard from '../Component/RecipeCard';
import recipes from '../data/recipe';
import { TiArrowBack } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

const Favorites = () => {

    // State to hold the list of favorite recipe objects
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  // Load favorite recipe IDs from localStorage and match them to recipe data
  useEffect(() => {
    const favoriteIds = JSON.parse(localStorage.getItem('favorites')) || [];
    const matchedRecipes = recipes.filter(recipe => favoriteIds.includes(recipe.id));
    setFavoriteRecipes(matchedRecipes);
  }, []);

  return (
    <div className="min-h-screen pt-30">
      {favoriteRecipes.length === 0 ? (
    <motion.div 
    initial={{y:-10, opacity:0}}
    animate={{y:0, opacity: 1}}
    transition={{duration:0.7, ease:'easeOut'}}
    className='flex flex-col justify-center min-h-125  items-center gap-4'>
    <h2 className='md:text-3xl font-semibold text-xl'>Your Favorite is empty now!</h2>    
   <p className=" text-gray-600 text-lg">You haven't added any favorites yet.</p>
       <Link to="/">
      <button className="flex gap-1 items-center mt-4 cursor-pointer px-4 py-3 bg-gradient-to-r from-red-500 to-amber-500 font-semibold text-white rounded hover:bg-gradient-to-r hover:from-amber-400 hover:to-red-400">
      <TiArrowBack size={27} />Back to Home
      </button>
      </Link>
        </motion.div>
    
        
      ) : (
        <>
        <div>

        {/* heading */}
         <motion.h2 
         initial={{y:-10, opacity:0}}
         animate={{y:0, opacity:1}}
         transition={{duration:0.5, ease: 'easeOut'}}
         className='text-4xl font-bold text-center md:my-4 my-2 text-gray-900'>My Favorite Recipe</motion.h2>
      <Link to="/" className='flex items-center justify-center'>

      {/* back button */}
      <button className="flex gap-1 items-center mt-4 cursor-pointer px-4 py-3 bg-gradient-to-r from-red-500 to-amber-500 font-semibold text-white rounded hover:bg-gradient-to-r hover:from-amber-400 hover:to-red-400">
      <TiArrowBack size={27} />Back to Home
      </button>
      </Link>

      {/* Recipe cards grid */}
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-14 md:px-12 px-6 md:py-8 py-5">
          {favoriteRecipes.map(recipe => (
          <motion.div
          key={recipe.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          >
          <RecipeCard 
          recipes={recipe}
          />
          </motion.div>
          ))}
        </div>
        </div>
        </>
      )}
    </div>
  );
};

export default Favorites; 