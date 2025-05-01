import React from 'react';
import RecipeCard from '../Component/RecipeCard';
import recipes from '../data/recipe'

const Home = () => {
    return(
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
    {recipes.map((recipe) => (
   <RecipeCard 
   key={recipe.id}
   title={recipe.title}
   image={recipe.image}
   description = {recipe.description}
   />
    ))}  
   </div>
)
};

export default Home;