import React from 'react';
import RecipeCard from '../Component/RecipeCard';
import recipes from '../data/recipe'
import { easeOut, motion } from 'framer-motion'
 
const Home = ({ searchItem }) => {

    // filter recipes based on searchItem
    const filteredRecipes = recipes.filter((recipe) => recipe.title.toLowerCase().includes(searchItem.toLowerCase())
);
    return(
    <div className='pb-29 pt-18 container mx-auto'>
        <div className='flex flex-col items-center justify-center py-8 md:py-14'>
            
            <motion.h2
            initial={{y:-10, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:0.5, ease: 'easeOut'}}
            className='text-5xl font-bold  text-[#f5344e] text-shadow-amber-100 text-shadow-md '>Recipe App</motion.h2>
            <motion.img 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            src="/images/pngegg (17).png" className='h-30 md:h-55' alt="" />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            className='pt-3 pb-4 text-xl text-gray-500'>Choose your favorite Recipe!!</motion.p>
        </div> 
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-6 mt-[-25px]'>
     {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
            <motion.div
            key={recipe.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7}}
            >
            <RecipeCard 
            recipes={recipe}
            />
            </motion.div>
             ))
     ) : ( 
        <motion.p 
        initial={{y:-30, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration: 0.5, delay:0.4}}
        className='text-center text-gray-700 col-span-full text-xl'> <em>Oops! No recipes match your search. Try something else!</em></motion.p>
     )}   
   </div>
   </div>
)
};

export default Home;