// Add relevant imports here 

import promiseNoData from "../Views/promiseNoData";
import resolvePromise from "../resolvePromise";
import App from "../App";
import { updateFirebaseFromModel, updateModelFromFirebase, firebaseModelPromise } from "../firebaseModel";
import React from "react";

// Define the ReactRoot component/*
export default function ReactRoot() {
    const [firebaseModelPromiseState] = React.useState({});
    const [, setModel] = React.useState({});
    const [, reRender] = React.useState({});
   
    
    function promiseChangeNotificationACB() { 
        if (firebaseModelPromiseState.data) {
            updateFirebaseFromModel(firebaseModelPromiseState.data);
            updateModelFromFirebase(firebaseModelPromiseState.data);
        }
        setModel(firebaseModelPromiseState.data);
        reRender(new Object());
    }

    function componentWasCreatedACB() { 
        resolvePromise(firebaseModelPromise(), firebaseModelPromiseState, promiseChangeNotificationACB);  
        
        return function isTakenDownACB() {
        }
    }
    React.useEffect(componentWasCreatedACB, []);

    return promiseNoData(firebaseModelPromiseState) || <App model={firebaseModelPromiseState.data} />;
}