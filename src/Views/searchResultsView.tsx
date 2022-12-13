function SearchResultsView(props: any) {




    function cocktailImageCB(cocktail: any) {

        function itemSelected() {
            props.onItemSelect(cocktail)
        }
        //   function chooseDishACB() {props.clickedDish(dish); window.location.hash = "#details"}
        return (<a href="#detail" onClick={itemSelected}>
            <div className="flex flex-col pt-8 items-center text-center">
                <img src={cocktail.strDrinkThumb} className="w-100 h-40"  ></img>
                <div >{cocktail.strDrink}</div>
            </div>
        </a>
        )
    }

    return (
        <div>
            {
                
            <div className="py-8 content-center bg-neutral h-600vh w-screen h-screen">
                <div className="lg:hidden grid grid-cols-2 pt-8 justify-between"> 
                    {props.searchResults.map(cocktailImageCB)}            
                </div>
                <div className="hidden lg:grid grid-cols-4 pt-8 bg-neutral"> 
                {props.searchResults.map(cocktailImageCB)}
                </div>
           </div> 
            }
        </div>
    )
}

export default SearchResultsView
