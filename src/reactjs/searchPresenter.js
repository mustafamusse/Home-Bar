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
    const [allCocktails, setAllCocktails] = React.useState({});
    const [filteredCocktails, setFilteredCocktails] = React.useState({});
    const [, reRender] = React.useState();
    const [filterToggleState, changeFilterToggleState] = React.useState(false);

    function componentWasCreatedACB() {
        searchResultsPromiseState.promise = null
        resolvePromise(searchResultsPromiseState.promise, searchResultsPromiseState, promiseChangeNotificationACB)
    }

    React.useEffect(componentWasCreatedACB, []);

    function setQueryACB(text) {
        setQuery(text)
    }
    function doSearchACB() {
        searchResultsPromiseState.promise = searchCocktailByName({ query: searchQuery })
        resolvePromise(searchResultsPromiseState.promise, searchResultsPromiseState, promiseChangeNotificationACB)
        .then(setAllAndFilteredResults)
    }

    function setAllAndFilteredResults(results) {
        setAllCocktails(results)
        setFilteredCocktails(results.filter(
            (obj) => checkAllIngredientsMatch(Object.values(obj), props.model.mySavedIngredientsString)))  
    }
    
    function promiseChangeNotificationACB() {
        reRender(new Object())
    }

    function setItemInModel(item){
        props.model.setDetailCocktail(item)
    }

    function toggleIngredientFilter(){
        changeFilterToggleState(!filterToggleState)
    }

    return (
        <div className="bg-neutral h-screen">
            <SearchView onInputChange={setQueryACB} onSearchClick={doSearchACB} onToggleIngredientFilter={toggleIngredientFilter} />
            {promiseNoData(searchResultsPromiseState) ||
                <SearchResultsView searchResults={filterToggleState? filteredCocktails : allCocktails} onItemSelect={setItemInModel} />}
        </div>
    )
}
