import LoginView from "../Views/loginView"
import SearchView from "../Views/searchView"
import SearchResultsView from "../Views/searchResultsView"
import promiseNoData from "../Views/promiseNoData"
import React from "react";
export default
    function SearchPresenter(props) {
    const [, cpyError] = React.useState(props.model.searchResultsPromiseState.error)
    const [, cpyData] = React.useState(props.model.searchResultsPromiseState.data)
    const [, cpyPromise] = React.useState(props.model.searchResultsPromiseState.promise)

    function observerACB() {
        cpyError(props.model.searchResultsPromiseState.error)
        cpyData(props.model.searchResultsPromiseState.data)
        cpyPromise(props.model.searchResultsPromiseState.promise)
    }

    function wasCreatedACB() {
        props.model.addObserver(observerACB);
        return function isTakenDownACB() { props.model.removeObserver(observerACB) };
    }
    React.useEffect(wasCreatedACB, []);


    if (!props.model.searchResultsPromiseState.promise)
        props.model.doSearch("")

    function onTextEventHandlerACB(text) {
        props.model.setSearchQuery(text)
    }

    function searchEventHandlerACB() {
        props.model.doSearch(props.model.searchParams)
    }

    return (
        <div>
            <SearchView onInputChange={onTextEventHandlerACB} onSearchClick={searchEventHandlerACB} />
            {promiseNoData(props.model.searchResultsPromiseState) ||
                <SearchResultsView searchResults={props.model.searchResultsPromiseState.data} />}
        </div>
    )
}
