//import { initializeApp } from 'firebase/app';
//import { getDatabase, ref, set, onValue } from "firebase/database";
import firebaseConfig from './firebaseConfig';
import CocktailModel from './cocktailModel';
import { searchIngredientById } from './cocktailSource';
import firebase from "firebase/compat/app";
import "firebase/compat/database";

firebase.initializeApp(firebaseConfig);

//const database = .database();
const REF = "/jean/";

function firebaseModelPromise() {
    function makeBigPromiseACB(firebaseData) {
        function makeIngrPromiseCB(key) {
            var ingredients = searchIngredientById(key);
     //       console.log(ingredients)
            return ingredients;
        }

        function createModelACB(ingredientsArr) {
            console.log(ingredientsArr.flat())
            return new CocktailModel(ingredientsArr.flat())
        }

        if (firebaseData.val() == undefined) {
            return new CocktailModel();
        }
        const ingrPromiseArray = Object.keys(firebaseData.val().userIngredients).map(makeIngrPromiseCB);
   //     console.log(ingrPromiseArray)
        return Promise.all(ingrPromiseArray).then(createModelACB)
    }
    // console.log((ref(db, REF), { onlyOnce: true }).then(makeBigPromiseACB));
    return firebase.database().ref(REF).once("value").then(makeBigPromiseACB);
}

function updateFirebaseFromModel(model) {
    function firebaseObserverUpdate(payload) {
        console.log(payload)
        if (payload.newIngredient && payload) {
            firebase.database().ref(REF + "/userIngredients/" + payload.newIngredient.idIngredient).set(payload.newIngredient.idIngredient);
        }
        if (payload.removedIngredient && payload) {
            console.log(payload.removedIngredient.idIngredient)
            firebase.database().ref(REF + "/userIngredients/" + payload.removedIngredient.idIngredient).set(null);
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