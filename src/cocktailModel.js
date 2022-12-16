import { existsInArray, ingrToString } from "./utils"
import { searchIngredientByName } from "./cocktailSource"
import resolvePromise from "./resolvePromise";

class cocktailModel {
    constructor(savedIngr = []) {
        this.observers = [];
        this.mySavedIngredients = savedIngr;
        this.mySavedIngredientsString = ingrToString(savedIngr);
        this.detailCocktail = {};
        this.searchIngredientPromiseState = {};
    }

    setSearchQuery(q) {
        this.searchParams.query = q;
    }

    addToIngrList(ingrObj) {
        if (!existsInArray(this.mySavedIngredients, ingrObj)) {
            this.mySavedIngredients = [...this.mySavedIngredients, ingrObj]
            this.notifyObservers({ newIngredient: ingrObj })
            this.mySavedIngredientsString = ingrToString(this.mySavedIngredients)
        }
    }

    removeIngredient(itemId) {
        function isNotSame(obs) {
            if (obs.idIngredient != itemId)
                return true;
        }
        this.mySavedIngredients = this.mySavedIngredients.filter(isNotSame)
        this.notifyObservers({ removedIngredient: itemId });
        this.mySavedIngredientsString = ingrToString(this.mySavedIngredients)
    }

    setDetailCocktail(item) {
        this.detailCocktail = item
        this.notifyObservers({ newDetailCocktail: item })
        //console.log(this.detailCocktail)
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