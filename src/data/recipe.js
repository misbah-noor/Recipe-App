const recipes = [
    {
      id: 1,
      title: "Cheesy Pasta",
      image: "/images/pasta.png",
      description: "A Classic Italian cheesy pasta dish with white sauce.",
      ingredients: [
        "200g pasta",
        "2 tbsp butter",
        "2 tbsp flour",
        "2 cups milk",
        "1 cup shredded cheese",
        "Salt & pepper to taste",
        "Chopped parsley (optional)"
      ],
      instructions: [
        "Cook pasta according to package instructions; drain and set aside.",
        "In a pan, melt butter and stir in flour to make a roux.",
        "Gradually add milk, whisking continuously until thickened.",
        "Stir in cheese, salt, and pepper until smooth.",
        "Mix sauce with cooked pasta and garnish with parsley."
      ],
      prepTime: "10 mins",
      cookTime: "20 mins",
      servings: 2
    },
    {
      id: 2,
      title: "Chicken Curry",
      image: "/images/curry.png",
      description: "Spicy and flavorful chicken curry with rice.",
      ingredients: [
        "500g chicken pieces",
        "2 onions, chopped",
        "2 tomatoes, chopped",
        "2 tbsp curry powder",
        "1 tbsp ginger-garlic paste",
        "1 cup yogurt",
        "3 tbsp oil",
        "Salt to taste",
        "Fresh coriander for garnish"
      ],
      instructions: [
        "Heat oil and sauté onions until golden.",
        "Add ginger-garlic paste and cook for 1 minute.",
        "Add chicken and cook until sealed.",
        "Add tomatoes, curry powder, salt, and cook for 5 minutes.",
        "Stir in yogurt, cover, and simmer for 20-25 minutes until chicken is cooked.",
        "Garnish with coriander and serve with rice."
      ],
      prepTime: "15 mins",
      cookTime: "35 mins",
      servings: 4
    },
    {
      id: 3,
      title: "Veggie Salad",
      image: "/images/veggie.png",
      description: "Healthy and fresh mix vegetable salad.",
      ingredients: [
        "1 cucumber, diced",
        "2 tomatoes, diced",
        "1 cup lettuce, chopped",
        "1/2 cup carrots, shredded",
        "1/4 cup olive oil",
        "2 tbsp lemon juice",
        "Salt & pepper to taste"
      ],
      instructions: [
        "Combine cucumber, tomatoes, lettuce, and carrots in a bowl.",
        "In a small bowl, whisk olive oil, lemon juice, salt, and pepper.",
        "Pour dressing over veggies and toss well.",
        "Chill before serving."
      ],
      prepTime: "10 mins",
      cookTime: "0 mins",
      servings: 2
    },
    {
      id: 4,
      title: "Tandoori Kabab",
      image: "/images/kabab.png",
      description: "Smoky and juicy tandoori kababs marinated with aromatic spices.",
      ingredients: [
        "500g boneless chicken",
        "1/2 cup yogurt",
        "2 tbsp tandoori masala",
        "1 tbsp lemon juice",
        "1 tbsp ginger-garlic paste",
        "Salt to taste",
        "Butter for basting"
      ],
      instructions: [
        "Mix yogurt, tandoori masala, lemon juice, ginger-garlic paste, and salt in a bowl.",
        "Marinate chicken pieces in the mixture for at least 2 hours.",
        "Thread chicken onto skewers.",
        "Grill or bake at 200°C for 20-25 minutes, basting with butter halfway.",
        "Serve hot with mint chutney."
      ],
      prepTime: "15 mins",
      cookTime: "25 mins",
      servings: 3
    },
    {
      id: 5,
      title: "Chicken Biryani",
      image: "/images/Biryani.png",
      description: "Fragrant basmati rice layered with tender chicken and exotic spices.",
      ingredients: [
        "500g chicken",
        "2 cups basmati rice",
        "2 onions, sliced",
        "1 cup yogurt",
        "2 tbsp biryani masala",
        "1 tbsp ginger-garlic paste",
        "4 tbsp oil",
        "Saffron (optional)",
        "Salt to taste"
      ],
      instructions: [
        "Fry onions until golden and set aside.",
        "Marinate chicken with yogurt, biryani masala, ginger-garlic paste, and salt for 1 hour.",
        "Cook marinated chicken until done.",
        "Boil rice until 70% cooked; drain.",
        "Layer rice and chicken in a pot, top with fried onions and saffron.",
        "Cover and steam on low heat for 20 minutes.",
        "Serve hot with raita."
      ],
      prepTime: "20 mins",
      cookTime: "40 mins",
      servings: 4
    },
    {
      id: 6,
      title: "Spaghetti",
      image: "/images/spaghetti.png",
      description: "Classic spaghetti tossed in a rich tomato sauce and herbs.",
      ingredients: [
        "200g spaghetti",
        "2 tbsp olive oil",
        "2 garlic cloves, minced",
        "1 can crushed tomatoes",
        "1 tsp dried basil",
        "1 tsp dried oregano",
        "Salt & pepper to taste",
        "Grated Parmesan (optional)"
      ],
      instructions: [
        "Cook spaghetti as per package instructions; drain.",
        "Heat olive oil in a pan, sauté garlic until fragrant.",
        "Add crushed tomatoes, basil, oregano, salt, and pepper.",
        "Simmer sauce for 10-15 minutes.",
        "Toss spaghetti in the sauce.",
        "Serve with grated Parmesan."
      ],
      prepTime: "10 mins",
      cookTime: "20 mins",
      servings: 2
    },
    {
      id: 7,
      title: "Fries",
      image: "/images/fries.png",
      description: "Crispy golden french fries served hot with ketchup.",
      ingredients: [
        "4 large potatoes",
        "Oil for frying",
        "Salt to taste"
      ],
      instructions: [
        "Peel and cut potatoes into thin strips.",
        "Soak in water for 30 minutes; pat dry.",
        "Heat oil and fry potatoes in batches until golden.",
        "Drain on paper towels and sprinkle with salt.",
        "Serve hot with ketchup."
      ],
      prepTime: "10 mins",
      cookTime: "20 mins",
      servings: 3
    },
    {
      id: 8,
      title: "Chocolate Cake",
      image: "/images/cake.png",
      description: "Moist and decadent chocolate cake topped with creamy frosting.",
      ingredients: [
        "1.5 cups flour",
        "1 cup sugar",
        "1/2 cup cocoa powder",
        "1 tsp baking soda",
        "1/2 tsp salt",
        "1 cup water",
        "1/3 cup oil",
        "1 tsp vanilla extract",
        "1 tbsp vinegar"
      ],
      instructions: [
        "Preheat oven to 180°C; grease a cake pan.",
        "Mix flour, sugar, cocoa, baking soda, and salt in a bowl.",
        "Add water, oil, vanilla, and vinegar; mix until smooth.",
        "Pour batter into pan and bake for 30-35 minutes.",
        "Cool before frosting."
      ],
      prepTime: "15 mins",
      cookTime: "35 mins",
      servings: 8
    },
    {
      id: 9,
      title: "Chicken Roast",
      image: "/images/roast.png",
      description: "Tender and flavorful whole chicken roast with herbs and spices.",
      ingredients: [
        "1 whole chicken",
        "2 tbsp butter",
        "1 tbsp garlic paste",
        "1 tsp paprika",
        "1 tsp black pepper",
        "1 tsp salt",
        "1 tsp dried thyme",
        "Lemon slices"
      ],
      instructions: [
        "Mix butter, garlic paste, paprika, pepper, salt, and thyme.",
        "Rub mixture over chicken, place lemon slices inside cavity.",
        "Roast in preheated oven at 200°C for 1 hour or until cooked.",
        "Rest for 10 minutes before carving.",
        "Serve with roasted veggies."
      ],
      prepTime: "15 mins",
      cookTime: "1 hr",
      servings: 4
    },
    {
      id: 10,
      title: "Mutton Pulao",
      image: "/images/Mutton Pulao.png",
      description: "Aromatic mutton pulao cooked with fragrant rice and spices.",
      ingredients: [
        "500g mutton",
        "2 cups basmati rice",
        "2 onions, sliced",
        "1 tbsp ginger-garlic paste",
        "2 tbsp pulao masala",
        "4 cups water",
        "4 tbsp oil",
        "Salt to taste"
      ],
      instructions: [
        "Sauté onions in oil until golden.",
        "Add ginger-garlic paste and mutton; cook until browned.",
        "Add pulao masala and salt; cook for 5 minutes.",
        "Add water; cook mutton until tender.",
        "Add soaked rice; cook until water is absorbed.",
        "Cover and steam on low for 10 minutes.",
        "Serve hot."
      ],
      prepTime: "20 mins",
      cookTime: "1 hr",
      servings: 4
    },
    {
      id: 11,
      title: "Chocolate Brownie",
      image: "/images/brownie.png",
      description: "Fudgy chocolate brownie with a rich, gooey center.",
      ingredients: [
        "1/2 cup butter",
        "1 cup sugar",
        "2 eggs",
        "1/3 cup cocoa powder",
        "1/2 cup flour",
        "1/4 tsp salt",
        "1/4 tsp baking powder"
      ],
      instructions: [
        "Preheat oven to 175°C; grease a baking dish.",
        "Melt butter and mix in sugar and eggs.",
        "Add cocoa, flour, salt, and baking powder; mix well.",
        "Pour batter into pan and bake for 20-25 minutes.",
        "Cool before cutting into squares."
      ],
      prepTime: "10 mins",
      cookTime: "25 mins",
      servings: 9
    },
    {
      id: 12,
      title: "Russian Salad",
      image: "/images/russian.png",
      description: "Creamy Russian salad with mixed veggies, fruits, and mayonnaise.",
      ingredients: [
        "1 cup boiled potatoes, diced",
        "1/2 cup boiled peas",
        "1/2 cup diced apples",
        "1/2 cup diced pineapple",
        "1/2 cup mayonnaise",
        "1 tbsp cream",
        "Salt & pepper to taste"
      ],
      instructions: [
        "Mix potatoes, peas, apples, and pineapple in a bowl.",
        "In another bowl, mix mayonnaise, cream, salt, and pepper.",
        "Combine dressing with veggies and fruits.",
        "Chill before serving."
      ],
      prepTime: "15 mins",
      cookTime: "0 mins",
      servings: 4
    }
  ];
  
  export default recipes;