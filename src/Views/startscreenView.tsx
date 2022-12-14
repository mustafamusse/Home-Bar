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
        {/* MOBILE SCREEN */}
        <section id="mobileScreen" className="flex flex-col items-center bg-neutral h-200vh w-full font-Alata">
            <div className="bg-neutral fixed w-full h-fit pt-5">
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

            <span className="text-2xl text-black pt-5 text-center">
            Popular drinks
            </span>
            <div className=" w-full content-center">
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-between"> 
                  {props.popularDrinks.map(popDrinksCB)}
                </div>
            </div>
        </section>
        
        {/* DESKTOP SCREEN 
        <section id="desktopScreen" className="hidden lg:flex flex-col w-full h-200vh items-center bg-neutral text-3xl font-Alata">
        <span className="text-2xl text-black pr-4">
            Welcome to Home Bar
            </span>
            <div className="grid grid-cols-2 gap-12 justify-end">
            <div>
            <img src="./cocktail.png" className="w-100 h-20 pr-20"></img>
            </div>
            <div>
            <img src="./cocktail.png" className="w-100 h-20 pl-20"></img>
            </div>
            </div>
            <a className="flex flex-col justify-center items-center text-lg hover:underline py-2">    
            </a>
            <a href="#search" className="py-16 font-normal bg-light-red text-white">
              Search for drinks
            </a>

            <span className="text-2xl text-black pt-8 text-center">
            Or choose a one of our most popular drinks
            </span>
            
            <div className="py-8 w-full content-center">
                <div className="grid grid-cols-3 pt-8 justify-between"> 
                {props.popularDrinks.map(popDrinksCB)}
                </div>
            </div>
        </section>
      */}
      </>
    );
  }
  
  export default StartscreenView;