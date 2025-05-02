import React from 'react';
import RecipeCard from '../Component/RecipeCard';
import recipes from '../data/recipe'

const Home = ({ searchItem }) => {
    const filteredRecipes = recipes.filter((recipe) => recipe.title.toLowerCase().includes(searchItem.toLowerCase())
);
    return(
    <div className='py-29 container mx-auto'>
        <div className='text-center'>
            <h2 className='text-5xl font-bold  text-[#f5344e] text-shadow-amber-100 text-shadow-md pt-10'>Recipe App</h2>
            <p className='py-6 text-xl text-gray-500'>Choose your favorite Recipe!!</p>
        </div> 
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 p-6'>
    {filteredRecipes.map((recipe) => (
   <RecipeCard 
   key={recipe.id}
   recipes={recipe}
   />
    ))}  
   </div>
   </div>
)
};

export default Home;