import React from 'react';

const RecipeCard = ({title, image, description}) => {
return(
    <div className='bg-white rounded-xl shadow-2xl overflow-hidden'>
      <img src={image} alt={title} className='w-full h-75 object-cover hover:scale-105 transition-all ease-in-out duration-400' />
      <div className='p-4'>
        <h2 className='text-xl font-bold mb-2'>{title}</h2>
        <p className='text-gray-700'>{description}</p>   
       </div>   
    </div>
);
};

export default RecipeCard;