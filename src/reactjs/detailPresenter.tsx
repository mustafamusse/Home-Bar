import React from "react";
import Detailview from "../Views/detailsView"

export default
function DetailPresenter(props : any){
    const[detailCocktail, cpyDetailCocktail] = React.useState(props.model.detailCocktail);

    function observerACB() {
        cpyDetailCocktail(props.model.detailCocktail);
    }

    function wasCreatedACB() {
        props.model.addObserver(observerACB);
        return function isTakenDownACB() { props.model.removeObserver(observerACB) };
    }
    React.useEffect(wasCreatedACB, []);

    return(
        <>
            <Detailview selectedItem={props.model.detailCocktail} ingredients={Object.values(props.model.detailCocktail)}/>
        </>
    )
}
