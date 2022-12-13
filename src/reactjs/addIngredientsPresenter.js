import React from "react";
import { listIngredients, searchIngredientByName } from "../cocktailSource";
import resolvePromise from "../resolvePromise";
import AddIngredientsView from "../Views/addIngredientsView";
import promiseNoData from "../Views/promiseNoData"

export default
    function AddIngredientsPresenter(props) {
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
            <AddIngredientsView onInputChange={setQueryACB} /*onSearchClick={doSearchACB}*/
                searchResults={promiseNoData(allIngredientsPromiseState) ? [] : allIngredients}
                onAddIngr={doSearchACB} />
        </>
    )
}

