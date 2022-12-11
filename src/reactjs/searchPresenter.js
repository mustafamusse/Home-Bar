import SearchView from "../Views/searchView"
import SearchResultsView from "../Views/searchResultsView"
import promiseNoData from "../Views/promiseNoData"
import React from "react";
import { searchCocktailByName } from "../cocktailSource";
import resolvePromise from "../resolvePromise";

export default
    function SearchPresenter(props) {
    const [searchQuery, setQuery] = React.useState({});
    const [searchResultsPromiseState] = React.useState({});
    const [, reRender] = React.useState();

    function componentWasCreatedACB() { 
        searchResultsPromiseState.promise = searchCocktailByName("")
         resolvePromise(searchResultsPromiseState.promise, searchResultsPromiseState, promiseChangeNotificationACB)
    }

    React.useEffect(componentWasCreatedACB, []); 

    function setQueryACB(text) {
        setQuery(text)
    }
    function doSearchACB() {
        searchResultsPromiseState.promise = searchCocktailByName({ query: searchQuery })
        resolvePromise(searchResultsPromiseState.promise, searchResultsPromiseState, promiseChangeNotificationACB)
    }

    function promiseChangeNotificationACB() {
        reRender(new Object())
    }

    return (
        <div>
            <SearchView onInputChange={setQueryACB} onSearchClick={doSearchACB} />
            {promiseNoData(searchResultsPromiseState) ||
                <SearchResultsView searchResults={searchResultsPromiseState.data} />}
        </div>
    )
}
