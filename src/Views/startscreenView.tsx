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
        <div className="flex flex-col pt-8 items-center justify-center pr-4">
            <img src={cocktail.strDrinkThumb} className="h-40 md:h-48 lg:h-60 2xl:h-72 shadow-lg shadow-black"  ></img>
            <div className="pt-3">{cocktail.strDrink}</div>
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
            <span className="text-3xl lg:text-5xl xl:text-7xl text-black pt-[13vh]" >
            Welcome!

            </span>
            <a href="#search" className="flex gap-2 py-2 px-4 font-normal items-center bg-light-red text-white rounded-3xl my-12 lg:my-20 lg:text-2xl">
              <div className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]">
                <DocumentMagnifyingGlassIcon></DocumentMagnifyingGlassIcon>
              </div>
              Search for drinks
            </a>

            <span className="text-2xl md:text-3xl lg:text-4xl text-black pt-5 lg:pb-4 text-center">
            Popular drinks
            </span>
            <div className=" w-full content-center">
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-between"> 
                  {props.popularDrinks.map(popDrinksCB)}
                </div>
            </div>
        </section>
      </>
    );
  }
  
  export default StartscreenView;