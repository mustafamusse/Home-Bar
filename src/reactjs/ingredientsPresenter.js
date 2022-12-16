import { useEffect, useState } from "react";
import { listIngredients, searchIngredientByName } from "../cocktailSource";
import resolvePromise from "../resolvePromise";
import MyIngredientsView from "../Views/myIngredientsView";
import promiseNoData from "../Views/promiseNoData";

export default function IngredientPresenter(props) {

    const [addedIngredients, copyAddedIngredients] = useState(props.model.mySavedIngredients)
    useEffect(() => {
        function handleIngredientListChange() {
            copyAddedIngredients(props.model.mySavedIngredients)
        }
        props.model.addObserver(handleIngredientListChange)
        return function cleanup() { props.model.removeObserver(handleIngredientListChange) }
    })
    function removeFromIngrListACB(ingrToRemove) {
        props.model.removeIngredient(ingrToRemove)
    }


    const [apiIngrListPromiseState] = useState({})

    useEffect(() => {
        apiIngrListPromiseState.promise = listIngredients()
        resolvePromise(apiIngrListPromiseState.promise, apiIngrListPromiseState)
    })
    const [allIngredients, setAllIngredients] = useState([])
    const [filteredIngredients, setFilteredIngredients] = useState([])
    function filterIngrList(text) {
        var regexpr = new RegExp(text, "i")
        if (text.replaceAll(" ", "") === "")
            return setFilteredIngredients(allIngredients)
        setFilteredIngredients(allIngredients.filter((obj) => regexpr.test(obj.strIngredient1) ? true : false))
    }


    const [searchResultsPromiseState] = useState({});
    function doSearchACB(ingrToAdd) {
        searchResultsPromiseState.promise = searchIngredientByName({ query: ingrToAdd })
        return resolvePromise(searchResultsPromiseState.promise, searchResultsPromiseState).then(
            addToMyIngrListACB)
    }

    function addToMyIngrListACB(ingrToAdd) {
        props.model.addToIngrList(ingrToAdd[0])
    }


    return (
        <>
            <MyIngredientsView ingrList={addedIngredients} removeIngr={removeFromIngrListACB}
                onInputChange={filterIngrList}
                searchResults={promiseNoData(apiIngrListPromiseState) ? [] : filteredIngredients}
                onAddIngr={doSearchACB} />
        </>
    )
}