import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue } from "firebase/database";
import firebaseConfig from '../firebaseConfig';
import CocktailModel from '../cocktailModel';
import { searchIngredientById } from '../cocktailSource';

initializeApp(firebaseConfig);
const db = getDatabase();
const REF = "jean";


function firebaseModelPromise() {
    function makeBigPromiseACB(firebaseData) {
        function makeIngrPromiseCB(key) {
            var ingredients = searchIngredientById(key);
            return ingredients;
        }

        function createModelACB(ingredients) {
            return new CocktailModel(ingredients)
        }

        if (firebaseData.val() == undefined) {
            return new CocktailModel();
        }
        const ingrPromiseArray = Object.keys(firebaseData.val().userIngredients).map(makeIngrPromiseCB);
        return Promise.all(ingrPromiseArray).then(createModelACB)
    }
    return onValue(ref(db, REF),{onlyOnce: true}).then(makeBigPromiseACB);
}

function updateFirebaseFromModel(model) {
    function firebaseObserverUpdate(payload) {
        if (payload && payload.newIngredient) {
            set(ref(db, REF +'userIngredients/' + payload.newIngredient.id), { id: payload.newIngredient.id });
        }
        if (payload && payload.removeIngredient) {
            set(ref(db, REF +'userIngredients/' + payload.newIngredient.id), { id: null });
        }
    }
    model.addObserver(firebaseObserverUpdate);
}





function updateModelFromFirebase(model) {/*
    db.ref(REF + "/userIngredients").on
        ("child_removed", function (ingredient) { model.removeIngredient({ id: ingredient }) });
        */
}

export { updateFirebaseFromModel, updateModelFromFirebase, firebaseModelPromise }