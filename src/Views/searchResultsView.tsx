function SearchResultsView(props: any) {

    function cocktailImageCB(cocktail: any) {
        //   function chooseDishACB() {props.clickedDish(dish); window.location.hash = "#details"}
        return (
            <div  key={cocktail.strDrink} className="flex flex-col pt-8 items-center text-center">
                <img src={cocktail.strDrinkThumb} className="w-100 h-40"></img>
                <div>{cocktail.strDrink}</div>
            </div>
        )
    }

    return (
        <div>
            {
            <div className="py-8 content-center bg-neutral h-600vh w-screen">
               <div className="grid grid-cols-2 pt-8 justify-between"> 
               {props.searchResults.map(cocktailImageCB)}
               </div>
           </div> 
            }
        </div>
    )
}

export default SearchResultsView
