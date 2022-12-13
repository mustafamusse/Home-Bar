import { randomInt } from "crypto";
import { serialize } from "v8";
import Button from "../Components/button";
import Logo from "../Components/logo";

function StartscreenView(props: any) {

  function popDrinksCB(cocktail: any) {
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
        <>
        <Logo></Logo>
        {/* MOBILE SCREEN */}
        <section id="mobileScreen" className="flex flex-col lg:hidden items-center bg-neutral h-200vh w-screen font-Alata">
            <span className="text-2xl text-black pt-8" >
            Welcome to Home Bar!
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
            {/*<input className="border-2 border-black text-center" type="text" placeholder="Search here">
            </input>
            To uncomment, remove the curlybrackets*/}         
            </a>
            <a href="#search">
              <Button text="Search Drinks"></Button>
            </a>

            <span className="text-2xl text-black pt-8 text-center">
            Or choose a one of our most popular drinks
            </span>
            <div className="py-8 w-full content-center">
                <div className="grid grid-cols-2 pt-8 justify-between"> 
                  {props.popularDrinks.map(popDrinksCB)}
                  {/*<div className="flex flex-col pt-8 items-center text-center">
                    {/*<img src={drink.image} className="w-100 h-40"></img>
                    <div key={drink.title}>{drink.title}</div>
                  </div>*/}
                </div>
            </div>
        </section>
        
        {/* DESKTOP SCREEN */}
        <section id="desktopScreen" className="hidden lg:flex w-screen h-screen justify-center items-center text-3xl font-Alata">
            PLEASE CHOOSE MOBILE SCREEN
        </section>
      </>
    );
  }
  
  export default StartscreenView;