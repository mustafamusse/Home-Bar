import Button from "../Components/button";
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
            Search Cocktails
            </span>
            <input onChange={setInputACB} className="border-2 border-black text-center pb-3.5" type="text" placeholder="Search here">
            </input>

            <button onClick={searchACB} className="pb-7"><Button text="Search"></Button></button>
            <button onClick={props.onToggleIngredientFilter} className="pb-7"><Button text="Toggle Filter"></Button></button>
            <a href="#ingredients">
            <Button text="Add ingredients"></Button>
            </a>
        </section>
        
        {/* DESKTOP SCREEN */}
        <section id="desktopScreen" className="hidden lg:flex flex-col w-screen items-center bg-neutral text-3xl font-Alata">
              <span className="text-2xl text-black py-8">
              Search Cocktails
              </span>
              <input onChange={setInputACB} className="border-2 border-black text-center pb-3.5" type="text" placeholder="Search here">
              </input>
              <button onClick={searchACB} className="pb-7"><Button text="Search"></Button></button>
              <a href="#ingredients">
              <Button text="Add ingredients"></Button>
              </a>
        </section>
      </>
    );
  }
  
  export default searchView;