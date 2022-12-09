import React from "react";
import MyIngredientsView from "../Views/myIngredientsView"

export default
    function MyIngredientsPresenter(props: any) {
    const [ingredients, cpyIngr] = React.useState(props.model.mySavedIngredients)

    function observerACB() {
        cpyIngr(props.model.mySavedIngredients)
    }
    function wasCreatedACB() {
        props.model.addObserver(observerACB);
        return function isTakenDownACB() { props.model.removeObserver(observerACB) };
    }
    React.useEffect(wasCreatedACB, []);

    function removeFromIngrListACB(ingrToRemove : any){
        props.model.removeIngredient(ingrToRemove)
    }

    return (
        <>
            <MyIngredientsView ingrList={props.model.mySavedIngredients} removeIngr={removeFromIngrListACB}/>
        </>
    )
}
