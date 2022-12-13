import LoginView from "../Views/loginView"
import StartscreenView from "../Views/startscreenView"
import { showPopularDrinks } from "../cocktailSource";
import React from "react";
import promiseNoData from "../Views/promiseNoData"
import resolvePromise from "../resolvePromise";

export default
function StartScreenPresenter(props){
    const [searchResultsPromiseState] = React.useState({});
    const [, reRender] = React.useState();

    function promiseChangeNotificationACB() {
        
    }

    function componentWasCreatedACB() {
            searchResultsPromiseState.promise = showPopularDrinks()
            resolvePromise(searchResultsPromiseState.promise, searchResultsPromiseState, promiseChangeNotificationACB)
        }

        React.useEffect(componentWasCreatedACB, []);

        function promiseChangeNotificationACB() {
            reRender(new Object())
        }

        function setItemInModel(item){
            props.model.setDetailCocktail(item)
        }

    return(
        <>
            <StartscreenView popularDrinks={promiseNoData(searchResultsPromiseState) ? [] : searchResultsPromiseState.data} 
                            onItemSelect={setItemInModel}/>
        </>
    )
}
