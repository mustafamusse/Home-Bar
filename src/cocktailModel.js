import {existsInArray} from "./utils"

class cocktailModel {
    constructor(savedIngr = []) {
        this.observers = [];
        this.mySavedIngredients = savedIngr;
    }

    setSearchQuery(q) {
        this.searchParams.query = q;
    }

    addToIngrList(ingrToAdd) {
        if (!existsInArray(this.mySavedIngredients, ingrToAdd))
            this.mySavedIngredients = [...this.mySavedIngredients, ingrToAdd]
        this.notifyObservers({newIngredient : ingrToAdd});
    }

    removeIngredient(item){
        function isNotSame(obs) {
            if (obs.id != item.id)
                return true;
        }
        this.mySavedIngredients = this.mySavedIngredients.filter(isNotSame)
        this.notifyObservers({removedIngredient : item});
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