function resolvePromise(promiseToResolve, promiseState, notify) {
    function checkNotify() {
        if (notify)      // if a 3rd parameter was sent, we expect it to be a function (ACB)!
            notify();  // so we can call it to notify every time promise, data, or error change
    }
    if (promiseToResolve === null)
        return promiseState = null;

    promiseState.promise = promiseToResolve;
    promiseState.data = null;
    promiseState.error = null;
    checkNotify()


    function saveDataACB(result ) {
        if (promiseState.promise !== promiseToResolve) return;
        promiseState.data = result;
        checkNotify()
        return promiseState.data;
    }
    function saveErrorACB(err) {
        if (promiseState.promise !== promiseToResolve) return;
        promiseState.error = err;
        checkNotify()
        return promiseState.err;
    }
    promiseToResolve.then(saveDataACB).catch(saveErrorACB);
}

export default resolvePromise