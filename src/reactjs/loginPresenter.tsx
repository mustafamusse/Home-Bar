import React from "react";
import LoginView from "../Views/loginView"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default
    function loginPresenter(props: any) {


/* TODO fix authentication to set user and display error codes, lookup error codes in firebase auth documentation */
    function logInACB(credentials: any) {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, credentials.email, credentials.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    return (
        <>
            <LoginView logInRequest={{ logInACB }} />
        </>
    )
}
