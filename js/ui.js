// Handles DOM creation, loading states, and dynamic rendering of recipe cards
const resultsContainer = document.getElementById('results-container');

export function showLoading() {
    resultsContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">Loading recipes...</p>';
}

export function renderRecipes(recipes) {
    if (!recipes || recipes.length === 0) {
        resultsContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">No recipes found. Try another keyword!</p>';
        return;
    }

    resultsContainer.innerHTML = recipes.map(recipe => `
        <div style="background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1); padding-bottom: 1rem;">
            <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}" style="width: 100%; height: 200px; object-fit: cover;">
            <h3 style="padding: 1rem 1rem 0.5rem; font-size: 1.1rem;">${recipe.strMeal}</h3>
            <p style="padding: 0 1rem; color: #6B7280; font-size: 0.9rem;">Category: ${recipe.strCategory}</p>
        </div>
    `).join('');
}