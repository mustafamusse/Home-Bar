import SmallBackButton from "../Components/smallBackButton";
import { PlusCircleIcon, ArrowUturnRightIcon, TrashIcon } from "@heroicons/react/24/outline";
import Logo from "../Components/logo";
import ToggleButton from "../Components/toggleButton";
import { PlusSmallIcon } from "@heroicons/react/24/outline";

function myIngredientsView(props: any) {

  function addToMyIngredientsACB(e: any) {
    props.onAddIngr(e.target.name)
  }

  function removeIngredientsACB(e : any) {
    var toRemove = myIngrArr.filter((obj : any) => e.target.id == obj.idIngredient)
    console.log(e.target.id)
    props.removeIngr(toRemove[0])
  }

  const myIngrArr = props.ingrList;
  const searchResultArr = props.searchResults

  return (
    <>
      <Logo></Logo>
      {/* MOBILE SCREEN */}
      <section id="desktopScreen" className="block lg:flex flex-cols-2">
        <section id="mobileScreen" className=" font-Alata w-full">
          <div className="w-full h-[22vh] lg:h-[25vh] fixed left-0 top-0 flex justify-center bg-neutral z-10 shadow-md lg:pb-10">
            <div className="bg-neutral fixed w-full h-fit pt-5">
              <SmallBackButton text="Search" link="#search"></SmallBackButton>
            </div>
            <div className="text-3xl flex lg:flex-cols-2 lg:justify-around justify-center items-end px-2 lg:px-0 pb-6 w-full ">
              <span>My Ingredients</span>
              <span className="hidden lg:block">Add Ingredients</span>
            </div>
          </div>
          <a href='#add_ingredients' className="fixed right-7 bottom-12 h-fit w-fit flex justify-center items-center text-white bg-light-red shadow-md rounded-3xl pl-2 pr-3 py-1 gap-1 z-50">
            <div className="w-[40px] h-[40px] rounded-2xl ">
              <PlusCircleIcon></PlusCircleIcon>
            </div>
            <span className="font-bold text-xl">Ingredients</span>
          </a>
          <div className="flex flex-col items-start w-full h-fit min-h-[120vh] text-xl font-semibold bg-neutral ">
          {/* Check if the user has any ingredients added or not, and displays infromation if no ingredients is added. */}
          <div className={props.ingrList.length ? "hidden" : "block"}>
                <div className="fixed top-1/2 left-1/4 flex flex-col justify-center items-start">
                  <span>Start adding</span>
                  <div className="flex">your ingredients here
                    <span className=" w-[50px] h-[50px] rotate-90 -mt-6">
                      <ArrowUturnRightIcon></ArrowUturnRightIcon>
                    </span>
                  </div>
                  
                </div>
              </div>
            <div className="mt-[20vh] px-10 pt-8 w-full md:p-20">
              {props.ingrList.map((ingredient : any) => (
                <div key={ingredient.idIngredient} className="w-full flex justify-between py-1">
                  <div className="flex gap-4 justify-between w-full">
                    <div>
                    {ingredient.strIngredient}
                    </div>
                    <div className="w-[24px] h-[24px] text-red-900 pt-[2px]">
                      <TrashIcon id={ingredient.idIngredient} onClick={removeIngredientsACB}></TrashIcon>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>
        <div className="hidden lg:block bg-light-green w-full">
          <div className="flex flex-col items-start w-full h-[60vh] text-xl font-semibold overflow-auto">
            {/*<div className=" px-10 pt-8 w-full z-30">
              
              {searchResultArr.map((ingredient: any) => (
                <div key={ingredient.strIngredient1} className="w-full flex justify-between py-2">
                  <div className="text-white">{ingredient.strIngredient1}</div>
                    {
                      <button className=" w-fit h-fit flex items-center text-white bg-light-green focus:bg-slate-500 py-1 pl-[0.8rem] pr-[0.4rem] rounded-3xl text-base font-medium"
                      name={ingredient.strIngredient1}
                      onClick={addToMyIngredientsACB}>
                        Add
                        <div className="w-[30px] h-[30px]">
                          <PlusSmallIcon></PlusSmallIcon>
                        </div>
                      </button>}
                </div>
              ))}
                    </div>*/}
          </div>
        </div>
      </section>

    </>
  );
}

export default myIngredientsView;