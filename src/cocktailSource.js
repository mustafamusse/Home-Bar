import { BASE_URL, API_KEY } from "./apiConfig.js";

function treatHTTPResponseACB(response) {
    if (!response.ok) {
        throw new Error("API problem " + response.status);
    }
    return response.json();
}

function transformSearchResultACB(response) {
    return response.results;
}

function searchCocktailByName(cocktailName) {
    return fetch(BASE_URL + "search.php?s=" + cocktailName, {  // object literal
        "method": "GET",
        "headers": {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
            }
        }
    )
        .then(treatHTTPResponseACB).then(transformSearchResultACB);
}

export{searchCocktailByName}
