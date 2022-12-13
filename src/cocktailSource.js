import { apiURL } from "./apiConfig";
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
    return fetch(apiURL + "search.php?s=" + cocktailName.query)
        .then(treatHTTPResponseACB).then(transformCocktailSearchResultACB)
}

function detailedCocktailSearchByID(cocktailId) {
    return fetch(apiURL + "lookup.php?i=" + cocktailId)
        .then(treatHTTPResponseACB).then(transformCocktailSearchResultACB)
}
 
function searchIngredientByName(ingrName) {
    return fetch(apiURL + "search.php?i=" + ingrName.query)
        .then(treatHTTPResponseACB).then(transformIngrSearchResultACB)
}
function searchIngredientById(ingrId) {
    return fetch(apiURL + "lookup.php?iid=" + ingrId)
        .then(treatHTTPResponseACB).then(transformIngrSearchResultACB)
}

function showPopularDrinks() {
    return fetch(apiURL + "popular.php")
        .then(treatHTTPResponseACB).then(transformCocktailSearchResultACB)
}

function listIngredients() {
    return fetch(apiURL + "list.php?i=list")
        .then(treatHTTPResponseACB).then(transformCocktailSearchResultACB)
}

function filterMultiIngr(ingrList) {
    return fetch(apiURL + "filter.php?i=" + ingrList)
        .then(treatHTTPResponseACB).then(transformCocktailSearchResultACB)
}

export { searchCocktailByName, searchIngredientByName, searchIngredientById, filterMultiIngr, detailedCocktailSearchByID, showPopularDrinks, listIngredients }