import React from "react";
import { searchIngredientByName } from "../cocktailSource";
import resolvePromise from "../resolvePromise";
import AddIngredientsView from "../Views/addIngredientsView";
import promiseNoData from "../Views/promiseNoData"

export default
    function AddIngredientsPresenter(props) {
    const [searchQuery, setQuery] = React.useState({});
    const [searchResultsPromiseState] = React.useState({});
    const [, reRender] = React.useState();

    function componentWasCreatedACB() {
        searchResultsPromiseState.promise = searchIngredientByName("")
        resolvePromise(searchResultsPromiseState.promise, searchResultsPromiseState, promiseChangeNotificationACB)
    }

    React.useEffect(componentWasCreatedACB, []);

    function setQueryACB(text) {
        setQuery(text)
    }
    function doSearchACB() {
        searchResultsPromiseState.promise = searchIngredientByName({ query: searchQuery })
        resolvePromise(searchResultsPromiseState.promise, searchResultsPromiseState, promiseChangeNotificationACB)
    }

    function promiseChangeNotificationACB() {
        reRender(new Object())
    }

    function addToMyIngrList(ingrToAdd) {
        props.model.addToIngrList(ingrToAdd)
    }

    return (
        <>
            <AddIngredientsView onInputChange={setQueryACB} onSearchClick={doSearchACB}
                searchResults={promiseNoData(searchResultsPromiseState) ? [] : searchResultsPromiseState.data}
                onAddIngr={addToMyIngrList} />
        </>
    )
}

