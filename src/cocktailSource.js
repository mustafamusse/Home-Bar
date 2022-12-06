function treatHTTPResponseACB(response) {
    if (!response.ok) {
        throw new Error("API problem " + response.status);
    }
    return response.json();
}

function transformSearchResultACB(response) {   
    return response.drinks;
}

function searchCocktailByName(cocktailName) {
    return fetch ("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktailName.query) 
        .then(treatHTTPResponseACB).then(transformSearchResultACB)
}
export{searchCocktailByName}
