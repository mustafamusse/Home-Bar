import { existsInArray, ingrToString } from "./utils"

class cocktailModel {
    constructor(savedIngr = []) {
        this.observers = [];
        this.mySavedIngredients = savedIngr;
        this.mySavedIngredientsString = ingrToString(savedIngr);
        this.detailCocktail = {};
    }

    setSearchQuery(q) {
        this.searchParams.query = q;
    }

    addToIngrList(ingrToAdd) {
        if (!existsInArray(this.mySavedIngredients, ingrToAdd)) {
            this.mySavedIngredients = [...this.mySavedIngredients, ingrToAdd]
            this.notifyObservers({ newIngredient: ingrToAdd });
            this.mySavedIngredientsString = ingrToString(this.mySavedIngredients)
        }
    }

    removeIngredient(item) {
        function isNotSame(obs) {
            if (obs.idIngredient != item.idIngredient)
                return true;
        }
        this.mySavedIngredients = this.mySavedIngredients.filter(isNotSame)
        this.notifyObservers({ removedIngredient: item });
        this.mySavedIngredientsString = ingrToString(this.mySavedIngredients)
    }

    setDetailCocktail(item) {
        this.detailCocktail = item
        this.notifyObservers({newDetailCocktail : item})
        console.log(this.detailCocktail)
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