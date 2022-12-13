import LoginView from "../Views/loginView"
import StartscreenView from "../Views/startscreenView"
import { showPopularDrinks } from "../cocktailSource";
import React from "react";
import resolvePromise from "../resolvePromise";
import promiseNoData from "../Views/promiseNoData"

export default
function startscreenPresenter(props : any){
    const [searchResultsPromiseState] = React.useState({});



    return(
        <>
            <StartscreenView />
        </>
    )
}
