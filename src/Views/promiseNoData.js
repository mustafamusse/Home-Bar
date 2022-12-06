function promiseNoData(promiseState) {
    if (!(promiseState.promise))
        return <div>no data</div>;
    else if (!(promiseState.data || promiseState.error))
        return <img src="../../Spinner-3.gif"></img>;
    else if (!promiseState.data && promiseState.error)
        return (
            <div style={{ "text-align": "center" }}>
                <h1>The search done was not avaliable, try choosing a type and try again </h1>
                <img src="../../notfound.gif"></img>
            </div>
        );
    else return false;
}


export default promiseNoData

