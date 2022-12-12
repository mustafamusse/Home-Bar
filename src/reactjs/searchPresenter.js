import SearchView from "../Views/searchView"
import SearchResultsView from "../Views/searchResultsView"
import promiseNoData from "../Views/promiseNoData"
import React from "react";
import { searchCocktailByName, detailedCocktailSearchByID } from "../cocktailSource";
import resolvePromise from "../resolvePromise";

export default
    function SearchPresenter(props) {
    const [searchQuery, setQuery] = React.useState({});
    const [searchResultsPromiseState] = React.useState({});
    const [detailedSearchResultsPromiseState] = React.useState({});
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

    function doDetailedSearch() {
        doSearchACB()
        function makeArr(coktailList) {
            return coktailList.flat()
        }

        const detailsPromiseArray = searchResultsPromiseState.data.map(obj => detailedCocktailSearchByID(obj.idDrink))
        console.log(detailsPromiseArray)
        detailedSearchResultsPromiseState.promise = Promise.all(detailsPromiseArray).then(makeArr)
        resolvePromise(detailedSearchResultsPromiseState.promise, detailedSearchResultsPromiseState, promiseChangeNotificationACB)
    }

    function promiseChangeNotificationACB() {
        reRender(new Object())
    }

    return (
        <div>
            <SearchView onInputChange={setQueryACB} onSearchClick={doDetailedSearch} />
            {promiseNoData(searchResultsPromiseState) ||
                promiseNoData(detailedSearchResultsPromiseState) ||
                <SearchResultsView searchResults={detailedSearchResultsPromiseState.data} />}
        </div>
    )
}
