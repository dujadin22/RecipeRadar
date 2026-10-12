// Handles reading, writing, and removing favorites from localStorage

const STORAGE_KEY = 'recipeRadar_favorites';

export function getFavorites() {
    try {
        const favorites = localStorage.getItem(STORAGE_KEY);
        return favorites ? JSON.parse(favorites) : [];
    } catch (error) {
        console.error('Error reading favorites from localStorage:', error);
        return [];
    }
}

export function saveFavorite(recipe) {
    try {
        const favorites = getFavorites();
        // Prevent duplicates
        if (!favorites.some(fav => fav.idMeal === recipe.idMeal)) {
            favorites.push(recipe);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
        }
    } catch (error) {
        console.error('Error saving favorite to localStorage:', error);
    }
}

export function removeFavorite(recipeId) {
    try {
        let favorites = getFavorites();
        favorites = favorites.filter(fav => fav.idMeal !== recipeId);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch (error) {
        console.error('Error removing favorite from localStorage:', error);
    }
}

export function isFavorite(recipeId) {
    const favorites = getFavorites();
    return favorites.some(fav => fav.idMeal === recipeId);
}