import { Link } from 'react-router-dom'

const RecipeCard = ({recipes}) => {
return(

    <div className='bg-white rounded-xl shadow-2xl overflow-hidden'>
      <img src={recipes.image} alt={recipes.title} className='w-full h-75 object-cover hover:scale-105 transition-all ease-in-out duration-400' />
      <div className='p-6 flex flex-col justify-center items-center'>
        <h2 className='text-2xl font-bold mb-2'>{recipes.title}</h2>
        <p className='text-gray-700'>{recipes.description}</p>
        <button className='px-4 py-3 bg-red-500 rounded-lg w-full text-white my-5 hover:bg-red-600 cursor-pointer font-semibold text-lg'><Link to={`/recipe/${recipes.id}`}>View Details</Link></button>   
       </div>   
    </div>

);
};

export default RecipeCard;