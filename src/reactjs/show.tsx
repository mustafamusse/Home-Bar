import React from "react";
export default

function Show (props : any) {

    const [hashState , setHash] = React.useState(window.location.hash)

    function hashListenerACB() {
        setHash(window.location.hash)
    }

    function componentWasCreatedACB(){
        window.addEventListener("hashchange", hashListenerACB);  
        function isTakenDownACB(){  
            window.removeEventListener("hashchange", hashListenerACB);
        }
        return isTakenDownACB; 
    }
    React.useEffect(componentWasCreatedACB, [] );
   
    function checkHashState() {
        if (hashState === props.hash) return {"display":""}; else return {"display" : "none"}
    }

    return <div style={checkHashState()}>{props.children}</div>;
}