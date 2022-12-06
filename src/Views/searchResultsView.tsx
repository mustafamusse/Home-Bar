function SearchResultsView(props: any) {

    function cocktailImageCB(cocktail: any) {
        //   function chooseDishACB() {props.clickedDish(dish); window.location.hash = "#details"}
        return <span key={cocktail.idDrink} /*onClick={chooseDishACB} */>
            <img src={cocktail.strDrinkThumb} />
            <div>{cocktail.strDrink}</div>
        </span>
    }

    return (
        <div>
            {
                props.searchResults.map(cocktailImageCB)
            }
        </div>
    )
}

export default SearchResultsView
