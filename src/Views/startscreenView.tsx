import { randomInt } from "crypto";
import { serialize } from "v8";
import { showPopularDrinks } from "../cocktailSource";
import { DocumentMagnifyingGlassIcon} from '@heroicons/react/24/outline'
import Logo from "../Components/logo";
import SmallBackButton from "../Components/smallBackButton";

function StartscreenView(props: any) {

  function popDrinksCB(cocktail: any) {
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
        <>
        <Logo></Logo>
        {}
        <section id="mobileScreen" className="flex flex-col items-center bg-neutral h-200vh w-full font-Alata">
            <div className=" fixed w-full h-fit pt-5">
              <SmallBackButton text="Back" link="#login"></SmallBackButton>
            </div>
            <span className="text-3xl lg:text-5xl xl:text-7xl text-black pt-[13vh] font-bold" >
            Welcome!

            </span>
            <a href="#search" className="flex gap-2 py-2 px-4 font-normal items-center bg-light-red text-white rounded-3xl my-12 lg:my-20 lg:text-2xl">
              <div className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]">
                <DocumentMagnifyingGlassIcon></DocumentMagnifyingGlassIcon>
              </div>
              Search for drinks
            </a>

            <span className="text-2xl font-bold md:text-3xl lg:text-4xl text-black pt-5 pb-8 lg:pb-10 text-center">
            Popular drinks:
            </span>
            <div className=" w-full content-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 justify-between"> 
                  {props.popularDrinks.map(popDrinksCB)}
                </div>
            </div>
        </section>
      </>
    );
  }
  
  export default StartscreenView;