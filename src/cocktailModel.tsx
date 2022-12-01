import resolvePromise from "./resolvePromise";
import {searchCocktailByName} from "./cocktailSource.js"

class cocktailModel{
    constructor(currentDrinkName){
        this.seatcurrentDrinkNameState = {};
    }

    doSearch(params) {
        console.log(searchCocktailByName(params))
      //   this.searchResultsPromiseState.promise = searchCocktailByName(params)
      //   return resolvePromise(this.searchResultsPromiseState.promise, this.searchResultsPromiseState)
     }
}

export default cocktailModel