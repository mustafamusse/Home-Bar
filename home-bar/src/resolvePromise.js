function resolvePromise(promiseToResolve, promiseState) {
    if (promiseToResolve === null)
        return promiseState = null;

    promiseState.promise = promiseToResolve;
    promiseState.data = null;
    promiseState.error = null;

    function saveDataACB(result) {
        if (promiseState.promise !== promiseToResolve) return;
        promiseState.data = result;

        return promiseState.data;
    }
    function saveErrorACB(err) {
        if (promiseState.promise !== promiseToResolve) return;
        promiseState.error = err;
        return promiseState.err;
    }
    promiseToResolve.then(saveDataACB).catch(saveErrorACB);
}

export default resolvePromise