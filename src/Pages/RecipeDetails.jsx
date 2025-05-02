import { useParams } from "react-router-dom";
import recipes from "../data/recipe";

const RecipeDetails =() => {
   const {id} = useParams();
   const recipe = recipes.find((r) => r.id === parseInt(id));
   
   if(!recipe){
    return <div className="py-25">
        <h1 className="text-red-500 text-center text-3xl">Recipe not found!</h1>
    </div>
   }

   return(
    <div className="bg-[#fffaf0] min-h-screen">
    <div className="mx-auto px-10 pt-20 sm:pt-25 flex sm:gap-25 gap-10 flex-wrap container flex-col sm:flex-row justify-center items-center pb-10">
        <div className="mt-18 flex flex-col justify-center items-center">
        <h1 className="mt-9 text-center text-5xl font-bold mb-8 text-[#e54d62]">{recipe.title}</h1> 
      <img src={recipe.image} className="h-85 rounded-full px-3 shadow-lg hover:scale-95 transition-all ease-in-out duration-300" alt={recipe.title} />
      <p className="text-lg my-7 text-neutral-900">{recipe.description}</p>
        </div>
      <div className="mb-10 sm:mb-0 sm:mt-20 mt-0 text-lg">
      <h3 className="text-2xl font-semibold mb-2 text-[#fe8b2e]">Ingredients:</h3>
      <ul className="text-neutral-900 list-disc pl-5 mb-4">
        {recipe.ingredients.map((item, index) => <li key={index}>{item}</li>)}
     </ul>
     <h3 className="text-2xl font-semibold mb-2 text-[#fe8b2e]">Instructions:</h3>
     <ol className="list-decimal pl-5 text-neutral-900">
      {recipe.instructions.map((step, index) => <li key={index}>{step}</li>)}    
    </ol>
    <div className="text-gray-600 my-5 flex gap-5 flex-col sm:flex-row">
        <p className="bg-[#fc6944] text-white hover:bg-[#f79683] px-2 py-1 rounded-lg w-40">⏰Prep: {recipe.prepTime}</p>
        <p className="bg-[#fc6944] text-white hover:bg-[#f79683] px-2 py-1 rounded-lg w-40">🔥Cook: {recipe.prepTime}</p>
        <p className="bg-[#fc6944] text-white hover:bg-[#f79683] px-2 py-1 rounded-lg w-45">🍽Servings: {recipe.prepTime}</p>
    </div> 
      </div>
    </div>
    </div>
   )
   
};

export default RecipeDetails;