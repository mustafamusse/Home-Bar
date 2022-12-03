import { BASE_URL, API_KEY } from "./apiConfig.js";

function treatHTTPResponseACB(response) {
    if (!response.ok) {
        throw new Error("API problem " + response.status);
    }
    return response;
}

function transformSearchResultACB(response) {
    console.log(response.type)
    return response;
}

function searchCocktailByName(cocktailName) {
    return fetch("www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktailName /*{  // object literal
        "method": "GET",
        "headers": {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
            }
        }*/
    )
        .then(treatHTTPResponseACB).then(transformSearchResultACB);
}

export{searchCocktailByName}
