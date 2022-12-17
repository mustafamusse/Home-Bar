function SearchResultsView(props: any) {

    function cocktailImageCB(cocktail: any) {

        function itemSelected() {
            props.onItemSelect(cocktail)
        }
        //   function chooseDishACB() {props.clickedDish(dish); window.location.hash = "#details"}
        return (<a key={cocktail.idDrink} href="#detail" onClick={itemSelected}>
            <div className="flex justify-center pb-4">
                <div className="flex rounded-2xl w-4/5 bg-dark-green h-40 items-center pl-4">      
                    <img src={cocktail.strDrinkThumb} className="w-100 h-32 shadow-lg shadow-black rounded-2xl text-black"></img>
                    <div className="flex-row pl-4 text-white">
                        <div className="font-bold text-xl underlin">{cocktail.strDrink}</div>
                        <div>{cocktail.strCategory}</div>
                        <div>{cocktail.strAlcoholic}</div>
                    </div>
                    </div>
            </div>
        </a>
        )
    }

    return (
        <div> 
            {
            <div className=" py-8 content-center bg-neutral h-200vh w-screen h-screen justify-between items-center">
                <div className="lg:hidden sm:grid sm:grid-cols-2 pt-8"> 
                    {props.searchResults.map(cocktailImageCB)}            
                </div>
                <div className="hidden lg:grid lg:grid-cols-3 bg-neutral item-center justify-between "> 
                {props.searchResults.map(cocktailImageCB)}
                </div>
           </div> 
            }
        </div>
    )
}

export default SearchResultsView
