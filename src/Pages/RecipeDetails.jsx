import { useParams, Link } from "react-router-dom";
import recipes from "../data/recipe";
import { PiCookingPotDuotone } from "react-icons/pi";
import { FaClipboardList } from "react-icons/fa";
import { TiArrowBack } from "react-icons/ti";
import { motion } from 'framer-motion';
import Feedback from "../Component/Feedback";

const RecipeDetails =() => {
   const {id} = useParams();

//    Find recipe matching ID
   const recipe = recipes.find((r) => r.id === parseInt(id));
   

//    Handle case when recipe is not found
   if(recipe.length === 0){
    return <div className="py-25">
        <h1 className="text-red-500 text-center text-3xl">Recipe not found!</h1>
    </div>
   }

// When recipe id match
   return(
    <div className="bg-[#fffefd] min-h-screen">
    <div className="mx-auto px-10 pt-8 sm:pt-25 flex sm:gap-25 gap-4 flex-wrap container flex-col sm:flex-row justify-center items-center pb-10">
        <div className="mt-18 flex flex-col justify-center items-center">
        <Link to="/">
      <button className="flex gap-1 items-center mt-4 cursor-pointer px-4 py-3 bg-gradient-to-r from-red-500 to-amber-500 font-semibold text-white rounded hover:bg-gradient-to-r hover:from-amber-400 hover:to-red-400">
      <TiArrowBack size={27} /> Back to Home
      </button>
      </Link>
        <motion.h1 
        initial={{y:-10, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:0.6, ease: 'easeOut'}}
        className="mt-9 text-center text-5xl font-bold mb-8 text-[#f15368] text-shadow-sm text-shadow-amber-300">{recipe.title}</motion.h1> 
      <motion.img
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.6, ease: 'easeIn'}}
      src={recipe.image} className="h-85 object-cover rounded-lg shadow-lg hover:scale-95 transition-all ease-in-out duration-300" alt={recipe.title} />
      <p className="text-lg my-7 text-neutral-900">{recipe.description}</p>
     
      </div>
      <motion.div 
      initial={{x:-10, opacity:0}}
      animate={{x:0, opacity:1}}
      transition={{duration:0.6, delay:0.6}}
      className="mb-10 sm:mb-0 sm:-mt-10 lg:mt-20 text-lg">
      <h3 className="flex gap-2 items-center text-2xl font-semibold mb-2 text-[#f97509]"><FaClipboardList />Ingredients:</h3>
      <ul className="text-neutral-900 list-disc pl-5 mb-4">
        {recipe.ingredients.map((item, index) => <li key={index}>{item}</li>)}
     </ul>
     <h3 className="text-2xl font-semibold mb-2 text-[#f87a12] flex items-center gap-2"><PiCookingPotDuotone />Instructions:</h3>
     <ol className="list-decimal pl-5 text-neutral-900">
      {recipe.instructions.map((step, index) => <li key={index}>{step}</li>)}    
    </ol>
    <div className="text-gray-600 my-5 flex gap-5 flex-col sm:flex-row">
        <p className="bg-[#fc6944] text-white hover:bg-[#f79683] px-2 py-1 rounded-lg w-40">⏰Prep: {recipe.prepTime}</p>
        <p className="bg-[#fc6944] text-white hover:bg-[#f79683] px-2 py-1 rounded-lg w-40">🔥Cook: {recipe.prepTime}</p>
        <p className="bg-[#fc6944] text-white hover:bg-[#f79683] px-2 py-1 rounded-lg w-45">🍽Servings: {recipe.prepTime}</p>
    </div> 
      </motion.div>
    </div>
    <div className="px-5 sm:px-10 pb-16">

    {/* Feedback */}
    <Feedback/>
    </div>
    </div>
   )
   
};

export default RecipeDetails;