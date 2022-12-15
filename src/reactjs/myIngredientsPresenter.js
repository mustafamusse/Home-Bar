import React from "react";
import MyIngredientsView from "../Views/myIngredientsView"

import { listIngredients, searchIngredientByName } from "../cocktailSource";
import promiseNoData from "../Views/promiseNoData"
import resolvePromise from "../resolvePromise";

export default
    function MyIngredientsPresenter(props) {
    const [ingredients, cpyIngr] = React.useState(props.model.mySavedIngredients)

    function observerACB() {
        cpyIngr(props.model.mySavedIngredients)
    }
    function wasCreatedACB() {
        props.model.addObserver(observerACB);
        return function isTakenDownACB() { props.model.removeObserver(observerACB) };
    }
    React.useEffect(wasCreatedACB, []);

    function removeFromIngrListACB(ingrToRemove){
        props.model.removeIngredient(ingrToRemove)
    }


    const [allIngredientsPromiseState] = React.useState({});
    const [searchResultsPromiseState] = React.useState({});
    const [allIngredients, setAllIngr] = React.useState({});
    const [, reRender] = React.useState();
    function componentWasCreatedACB() {
        allIngredientsPromiseState.promise = listIngredients()
        resolvePromise(allIngredientsPromiseState.promise, allIngredientsPromiseState, promiseChangeNotificationACB).then(setAllIngr)
    }
    React.useEffect(componentWasCreatedACB, []);

    function setQueryACB(text) {
        function filterByQuery(obj) {
            var regexpr = new RegExp(text, "i")
            return regexpr.test(obj.strIngredient1) ? true : false
        }
        if (text === "") {
            return setAllIngr(allIngredientsPromiseState.data)
        }
        var arr = allIngredients.filter(filterByQuery)
        setAllIngr(arr)
    }

    function doSearchACB(ingrToAdd) {
        searchResultsPromiseState.promise = searchIngredientByName({ query: ingrToAdd })
        return resolvePromise(searchResultsPromiseState.promise, searchResultsPromiseState).then(
            addToMyIngrListACB)
    }

    function promiseChangeNotificationACB() {
        reRender(new Object())
    }

    function addToMyIngrListACB(ingrToAdd) {
        props.model.addToIngrList(ingrToAdd[0])
    }

    return (
        <>
            <MyIngredientsView ingrList={props.model.mySavedIngredients} removeIngr={removeFromIngrListACB}
            onInputChange={setQueryACB}
            searchResults={promiseNoData(allIngredientsPromiseState) ? [] : allIngredients}
            onAddIngr={doSearchACB}/>
        </>
    )
}
