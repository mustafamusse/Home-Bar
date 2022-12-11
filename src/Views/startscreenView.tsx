import Logo from "../Components/logo";


const dummyRecommendedDrinks = [
  {
    title: "Vodka redbull",
    image: "./cocktail.png"
  },
  {
    title: "Martini",
    image: "./cocktail.png"
  },
  {
    title: "TITLE",
    image: "./cocktail.png"
  },
  {
    title: "TITLE",
    image: "./cocktail.png"
  },
  {
    title: "TITLE",
    image: "./cocktail.png"
  },
  {
    title: "TITLE",
    image: "./cocktail.png"
  },
  {
    title: "TITLE",
    image: "./cocktail.png"
  },
  {
    title: "TITLE",
    image: "./cocktail.png"
  },
]



function StartscreenView() {
    return (
        <>
        <Logo></Logo>
        {/* MOBILE SCREEN */}
        <section id="mobileScreen" className="flex flex-col lg:hidden items-center bg-neutral h-200vh w-screen font-Alata">
            <span className="text-2xl text-black pt-8">
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
            <a href="#search" className="rounded-2xl bg-light-red text-white text-xl justify-center px-3 py-0.5">
            <span>Search drink</span>
            </a>

            <span className="text-2xl text-black pt-8 text-center">
            Or choose a one of our most popular drinks
            </span>
            
            <div className="py-8 w-full content-center">
                <div className="grid grid-cols-2 pt-8 justify-between"> 
                  {dummyRecommendedDrinks.map((drink) => (
                  <div className="flex flex-col pt-8 items-center text-center">
                    <img src={drink.image} className="w-100 h-40"></img>
                    <div key={drink.title}>{drink.title}</div>
                  </div>
                ))}
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