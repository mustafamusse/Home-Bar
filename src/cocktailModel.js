import resolvePromise from "./resolvePromise";
import {searchCocktailByName} from "./cocktailSource"

class cocktailModel{
    constructor(currentDrinkName){
        this.searchResultsPromiseState = {};
    }

    doSearch(params) {
         this.searchResultsPromiseState.promise = searchCocktailByName(params)
         return resolvePromise(this.searchResultsPromiseState.promise, this.searchResultsPromiseState)
     }
}

export default cocktailModel