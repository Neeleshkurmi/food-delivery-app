export const categoriseIngredients = (ingredients) => {
  // Handle null, undefined, or non-array inputs
  if (!ingredients || !Array.isArray(ingredients)) {
    return {};
  }

  return ingredients.reduce((acc, ingredient) => {
    // Add null check for category and ensure it has name property
    if (ingredient && ingredient.category && ingredient.category.name) {
      const categoryName = ingredient.category.name;
      if (!acc[categoryName]) {
        acc[categoryName] = [];
      }
      acc[categoryName].push(ingredient);
    }
    return acc;
  }, {});
};
