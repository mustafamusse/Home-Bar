import SearchView from "../Views/searchView"
import SearchResultsView from "../Views/searchResultsView"
import promiseNoData from "../Views/promiseNoData"
import React from "react";
import { searchCocktailByName, detailedCocktailSearchByID } from "../cocktailSource";
import { checkAllIngredientsMatch } from "../utils"
import resolvePromise from "../resolvePromise";

export default
    function SearchPresenter(props) {
    const [searchQuery, setQuery] = React.useState({});
    const [searchResultsPromiseState] = React.useState({});
 //   const [detailResultsPromiseState] = React.useState({});
    const [filteredCocktails, setFilteredCocktails] = React.useState({});
    const [, reRender] = React.useState();

    function componentWasCreatedACB() {
    //    doSearchACB()

        
        searchResultsPromiseState.promise = searchCocktailByName("")
        resolvePromise(searchResultsPromiseState.promise, searchResultsPromiseState, promiseChangeNotificationACB)
        
    }

    React.useEffect(componentWasCreatedACB, []);

    function setQueryACB(text) {
        setQuery(text)
    }
    function doSearchACB() {
        searchResultsPromiseState.promise = searchCocktailByName({ query: searchQuery })
        resolvePromise(searchResultsPromiseState.promise, searchResultsPromiseState, promiseChangeNotificationACB).then(
          //  doDetailedSearchById
          filterByIngredients
        )
    }
/*
    function doDetailedSearchById() {
        function makePromise(id) {
            return detailedCocktailSearchByID(id)
        }
        var detailsPromiseArray = searchResultsPromiseState.data.map((obj) => makePromise(obj.idDrink))
        detailResultsPromiseState.promise = (Promise.all(detailsPromiseArray))
        resolvePromise(detailResultsPromiseState.promise, detailResultsPromiseState, promiseChangeNotificationACB).then(
            filterByIngredients
        )
    }
*/
    function filterByIngredients() {
        setFilteredCocktails(searchResultsPromiseState.data.filter(
            (obj) => checkAllIngredientsMatch(Object.values(obj), props.model.mySavedIngredientsString)))

    }
    function promiseChangeNotificationACB() {
        reRender(new Object())
    }

    return (
        <div>
            <SearchView onInputChange={setQueryACB} onSearchClick={doSearchACB} />
            {promiseNoData(searchResultsPromiseState) ||
                <SearchResultsView searchResults={filteredCocktails} />}
        </div>
    )
}
