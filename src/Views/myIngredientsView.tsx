import SmallBackButton from "../Components/smallBackButton";
import { PlusCircleIcon, ArrowUturnRightIcon } from "@heroicons/react/24/outline";
import Logo from "../Components/logo";

function myIngredientsView(props: any) {

  function removeIngredientsACB(e : any) {
    var toRemove = myIngrArr.filter((obj : any) => e.target.id == obj.idIngredient)
 //   console.log(toRemove)
    props.removeIngr(toRemove[0])
  }

  const myIngrArr = props.ingrList;

  return (
    <>
      <Logo></Logo>
      {/* MOBILE SCREEN */}
      <section id="mobileScreen" className="lg:hidden font-Alata">
        <div className="w-screen h-[20vh] fixed left-0 top-0 flex justify-center bg-neutral">
          <div className="bg-neutral fixed w-screen h-fit pt-5">
            <SmallBackButton text="Search" link="#search"></SmallBackButton>
          </div>
          <div className="text-3xl flex justify-center items-end px-2 pb-2 w-fit border-b-2  border-dark-red">
            <span>My Ingredients</span>
          </div>
        </div>
        <a href='#add_ingredients' className="fixed right-7 bottom-12 h-fit w-fit flex justify-center items-center bg-white shadow-md rounded-3xl pl-2 pr-3 py-1 gap-1">
          <div className="w-[40px] h-[40px] rounded-2xl text-black">
            <PlusCircleIcon></PlusCircleIcon>
          </div>
          <span className="font-bold text-xl">Ingredients</span>
        </a>
        <div className="flex flex-col items-start w-screen h-fit min-h-[120vh] text-xl font-semibold bg-neutral ">
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
          <div className="mt-[20vh] px-10 pt-8 w-full">
            {props.ingrList.map((ingredient : any) => (
              <div key={ingredient.idIngredient} className="w-full flex justify-between">
                <div >{ingredient.name}</div>
                <div className="w-fit h-fit px-2 bg-light-red flex items-center justify-center rounded-[0.65rem]">
                  <button className="w-fit h-fit text-white text-base font-medium" 
                  id={ingredient.idIngredient}
                  onClick={removeIngredientsACB}>Remove</button>
                </div>
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

export default myIngredientsView;