import Logo from "../Components/logo";

function searchView(props : any) {

  function setInputACB(evt : any){
    props.onInputChange(evt.target.value);  
  }

  function searchACB(){
    props.onSearchClick()
  }

    return (
        <>
        <Logo></Logo>
        {/* MOBILE SCREEN */}
        <section id="mobileScreen" className="flex flex-col lg:hidden items-center bg-neutral w-screen font-Alata">
            <span className="text-2xl text-black py-8">
            Search for your Cocktail
            </span>
            <input onChange={setInputACB} className="border-2 border-black text-center pb-3.5" type="text" placeholder="Search here">
            </input>

            <button onClick={searchACB} className="rounded-2xl bg-light-red text-white text-xl justify-center px-3">Search</button>
            
            <a href="#ingredients" className="w-[150px] h-[40px] rounded-2xl bg-light-red text-white text-xl flex justify-center items-center">
            <span>Add ingredients</span>
            </a>

        </section>
        
        {/* DESKTOP SCREEN */}
        <section id="desktopScreen" className="hidden lg:flex w-screen h-screen justify-center items-center text-3xl font-Alata">
            PLEASE CHOOSE MOBILE SCREEN
        </section>
      </>
    );
  }
  
  export default searchView;