import SmallBackButton from "../Components/smallBackButton";
import { PlusCircleIcon, ArrowUturnRightIcon} from "@heroicons/react/24/outline";
import Logo from "../Components/logo";
import ToggleButton from "../Components/toggleButton";

function filterView(props: any) {


  const myIngrArr = props.ingrList;

  return (
    <>
      <Logo></Logo>
      {/* MOBILE SCREEN */}
      <section id="mobileScreen" className=" font-Alata">
        <div className="w-screen h-[22vh] lg:h-[25vh] fixed left-0 top-0 flex justify-center bg-neutral z-10 shadow-md lg:pb-10">
          <div className="bg-neutral fixed w-screen h-fit pt-5">
            <SmallBackButton text="Search" link="#search"></SmallBackButton>
          </div>
          <div className="text-3xl flex justify-center items-end px-2 pb-6 w-fit ">
            <span>Filter Ingredients</span>
          </div>
        </div>
        <div className="flex flex-col items-start w-screen h-fit min-h-[120vh] text-xl font-semibold bg-neutral ">
        {/* Check if the user has any ingredients added or not, and displays information if no ingredients is added. */}
        
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
          <div className="mt-[20vh] px-10 pt-8 w-full md:p-20 lg:px-[25vw]">
            {props.ingrList.map((ingredient : any) => (
              <div key={ingredient.idIngredient} className="w-full flex justify-between py-1">
                <div className="flex gap-4">
                  {ingredient.strIngredient}
                </div>
                <div className="w-fit h-fit pt-2 z-0">
                  <ToggleButton></ToggleButton>
                </div>
              </div>
            ))}
          </div>
        
        </div>

      </section>

    </>
  );
}

export default filterView;