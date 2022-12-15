function promiseNoData(promiseState) {
    if (!promiseState.promise)
        return <div className="h-400vh bg-neutral"></div>;
    else if (!(promiseState.data || promiseState.error))
        return <div className="flex flex-col items-center pt-6"><img className="w-15 h-15 pt-4"src="../../Spinner-3.gif"></img> </div>;
    else if (!promiseState.data && promiseState.error)
        return (
            <div style={{ "text-align": "center" }}>
                <h1>The search done was not avaliable, try choosing another drink and try again </h1>
                <img src="../../notfound.gif"></img>
            </div>
        );
    else return false;
}

export default promiseNoData

