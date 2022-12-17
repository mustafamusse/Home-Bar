import Button from "../Components/button";
import Logo from "../Components/logo";
import SmallBackButton from "../Components/smallBackButton";
import {useState} from 'react';


import {FunnelIcon, PencilSquareIcon} from "@heroicons/react/24/outline";
import {FunnelIcon as FunnelIconSolid} from "@heroicons/react/24/solid";

function SearchView(props : any) {

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(current => !current);
  };

  function setInputACB(evt : any){
    props.onInputChange(evt.target.value);  
  }

  function searchACB(){
    props.onSearchClick()
  }

    return (
        <>
        <Logo></Logo>
        <section id="mobileScreen" className="flex flex-col items-center bg-neutral w-screen font-Alata">

            <div className=" text-black fixed w-screen top-0 h-fit pt-5 z-50">
              <SmallBackButton text="Back" link="#start"></SmallBackButton>
            </div>            
            <span className="text-2xl lg:text-4xl text-black py-8 h-[20vh] lg: flex items-end font-semibold">
            Search Cocktails
            </span>
            <div className="h-full px-8 mb-5 lg:mb-8 bg-white rounded-[1.3rem] flex justify-between items-center pl-5 py-2 pr-2 shadow-xl font-semibold transition-transform hover:scale-[1.02] duration-200 ease-out">
              <input onChange={setInputACB} className="bg-white w-[70%] h-full py-2 font-semibold text-base lg:text-xl placeholder-black text-black opacity-50 transition-transform hover:scale-[1.02] duration-200 ease-out" type="text" placeholder=" Search drinks:">
              </input>
              <button onClick={searchACB} className="transition-transform hover:scale-[1.10] duration-200 ease-out"><Button text="Search"></Button></button>
            </div>

            <div onClick={handleClick} className={isActive ? "bg-light-green rounded-3xl transition-transform hover:scale-[1.08] duration-200 ease-out" : "bg-light-red rounded-3xl transition-transform hover:scale-[1.08] duration-200 ease-out"}>
              <button onClick={props.onToggleIngredientFilter} className="flex justify-center items-center shadow-md rounded-3xl pl-2 pr-2 py-1 gap-1 z-50 ">
                <div className="w-[40px] h-[40px] rounded-2xl text-white" >
                  {isActive ? <FunnelIconSolid></FunnelIconSolid> : <FunnelIcon></FunnelIcon>}
                </div>
                <span className="font-bold text-xl text-white pr-2">Filter search by ingredients</span>
              </button>
            </div>

            <a href='#ingredients' className="fixed right-7 bottom-12 h-fit w-fit flex justify-center items-center text-white bg-light-red shadow-xl rounded-3xl pl-2 pr-3 py-1 gap-1 z-50 transition-transform hover:scale-[1.03] duration-200 ease-out">
              <div className="w-[40px] h-[40px] rounded-2xl ">
              <PencilSquareIcon></PencilSquareIcon>
              </div>
              <span className="font-bold text-xl">My ingredients</span>
              </a>
          </section>
      </>
    );
  }
  
  export default SearchView;