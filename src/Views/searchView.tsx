import Button from "../Components/button";
import Logo from "../Components/logo";
import {FunnelIcon, PencilSquareIcon} from "@heroicons/react/24/outline";




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

            <button onClick={searchACB} className="pb-7 pt-2"><Button text="Search"></Button></button>
          
            <button onClick={props.onToggleIngredientFilter} className="flex justify-center items-center bg-white shadow-md rounded-3xl pl-2 pr-2 py-1 gap-1 z-50">
              <div className="w-[40px] h-[40px] rounded-2xl text-black">
                <FunnelIcon></FunnelIcon>
              </div>
              <span className="font-bold text-xl">Filter search</span>
            </button>

            <a href='#ingredients' className="fixed right-7 bottom-12 h-fit w-fit flex justify-center items-center text-white bg-light-red shadow-md rounded-3xl pl-2 pr-3 py-1 gap-1 z-50">
              <div className="w-[40px] h-[40px] rounded-2xl ">
              <PencilSquareIcon></PencilSquareIcon>
              </div>
              <span className="font-bold text-xl">My ingredients</span>
              </a>
          </section>
        
        {/* DESKTOP SCREEN */}
        <section id="desktopScreen" className="hidden lg:flex flex-col w-screen items-center bg-neutral text-3xl font-Alata">
              <span className="text-4xl text-black py-8">
              Search cocktails
              </span>

              <div className="flex flex-row content-baseline pb-8">
              <input onChange={setInputACB} className="border-2 border-black text-center pb-3.5 rounded-2xl px-7" type="text" placeholder="Search here">

              </input>
              <button onClick={searchACB} className="pl-8 content-baseline"><Button text="Search"></Button></button>
              </div>

              <button onClick={props.onToggleIngredientFilter} className="flex justify-center items-center bg-white shadow-md rounded-3xl pl-2 pr-2 py-1 gap-1 z-50">
              <div className="w-[40px] h-[40px] rounded-2xl text-black">
                <FunnelIcon></FunnelIcon>
              </div>
              <span className="font-bold text-xl">Filter search</span>
            </button>




              <a href='#ingredients' className="fixed right-7 bottom-12 h-fit w-fit flex justify-center items-center text-white bg-light-red shadow-md rounded-3xl pl-2 pr-3 py-1 gap-1 z-50">
              <div className="w-[40px] h-[40px] rounded-2xl ">
              <PencilSquareIcon></PencilSquareIcon>
              </div>
              <span className="font-bold text-xl">My ingredients</span>
              </a>
        </section>
      </>
    );
  }
  
  export default searchView;