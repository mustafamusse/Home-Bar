function treatHTTPResponseACB(response) {
    if (!response.ok) {
        throw new Error("API problem " + response.status);
    }         console.log(response)
    return response.json();
}

function transformSearchResultACB(response) {
    console.log(response)
    return response;
}

function searchCocktailByName(cocktailName) {
    return fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + "margarita") 
        .then(treatHTTPResponseACB).then(transformSearchResultACB);  
}
export{searchCocktailByName}
