import resolvePromise from "./resolvePromise"
import { searchCocktailByName } from "./cocktailSource"

class cocktailModel {
    constructor() {
        this.observers = [];
        this.searchParams = {};
        this.searchResultsPromiseState=searchCocktailByName("");
   //     this.searchResultsPromiseState.promise = {};
   //     this.searchResultsPromiseState.data = {};
    //   this.searchResultsPromiseState.error = {};
    }

    setSearchQuery(q) {
        this.searchParams.query = q;
    }

    doSearch(params) {
        function notifyACB() {
            this.notifyObservers();  // no payload 
        }
        this.searchResultsPromiseState.promise = searchCocktailByName(params)
        console.log(this.searchResultsPromiseState)
        resolvePromise(this.searchResultsPromiseState.promise, this.searchResultsPromiseState, notifyACB.bind(this))
        console.log("promise.data is:")
        console.log(this.searchResultsPromiseState)
    }

    addObserver(cb) {
        this.observers.push(cb)
    }

    removeObserver(cb) {
        function isSameCB(obs) {
            if (obs != cb)
                return true;
        }
        this.observers = this.observers.filter(isSameCB)
    }

    notifyObservers(payload) {
        try {
            function invokeObserverACB(obs) { obs(payload); }
            this.observers.forEach(invokeObserverACB);
        } catch (err) { console.error(err); }
    }
}

export default cocktailModel