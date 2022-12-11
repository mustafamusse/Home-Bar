function treatHTTPResponseACB(response) {
    if (!response.ok) {
        throw new Error("API problem " + response.status);
    }
    return response.json();
}

function transformCocktailSearchResultACB(response) {
    return response.drinks
}

function transformIngrSearchResultACB(response) {
    return response.ingredients
}

function searchCocktailByName(cocktailName) {
    return fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktailName.query)
        .then(treatHTTPResponseACB).then(transformCocktailSearchResultACB)
}
function searchIngredientByName(ingrName) {
    return fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?i=" + ingrName.query)
        .then(treatHTTPResponseACB).then(transformIngrSearchResultACB)
}
function searchIngredientById(ingrId) {
    return fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=" + ingrId)
        .then(treatHTTPResponseACB).then(transformIngrSearchResultACB)
}
export { searchCocktailByName, searchIngredientByName, searchIngredientById }
