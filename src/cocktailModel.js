import resolvePromise from "./resolvePromise";
import {searchCocktailByName} from "./cocktailSource.js"

class cocktailModel{
        constructor(){
        this.searchResultsPromiseState = {};
    }
    doSearch(params) {
         this.searchResultsPromiseState.promise = searchCocktailByName(params)
         resolvePromise(this.searchResultsPromiseState.promise, this.searchResultsPromiseState)
         /*console.log(this.searchResultsPromiseState.data)
         console.log(this.searchResultsPromiseState.error)
         console.log(this.searchResultsPromiseState.promise)
   //   console.log(searchCocktailByName(params))*/
     }
}

export default cocktailModel