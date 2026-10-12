import { searchRecipes } from './api.js';
import { renderRecipes, showLoading } from './ui.js';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (!query) return;

    // Show loading indicator
    showLoading();
    
    // Fetch recipes from API module
    const recipes = await searchRecipes(query);
    
    // Render recipes or empty message via UI module
    renderRecipes(recipes);
});