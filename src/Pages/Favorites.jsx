import { useEffect, useState } from 'react';
import RecipeCard from '../Component/RecipeCard';
import recipes from '../data/recipe'

const Favorites = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    const favoriteIds = JSON.parse(localStorage.getItem('favorites')) || [];
    const matchedRecipes = recipes.filter(recipe => favoriteIds.includes(recipe.id));
    setFavoriteRecipes(matchedRecipes);
  }, []);

  return (
    <div className="min-h-screen pt-35">
      <h1 className="text-4xl font-bold mb-10 text-center">My Favorite Recipes</h1>
      {favoriteRecipes.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">You haven't added any favorites yet.</p>
      ) : (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-14 px-12">
          {favoriteRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipes={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites; 