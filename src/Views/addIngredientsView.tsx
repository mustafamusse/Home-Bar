
import Logo from "../Components/logo";
import SmallBackButton from "../Components/smallBackButton";
import ToggleButton from "../Components/toggleButton";
import { PlusSmallIcon } from "@heroicons/react/24/outline";

function AddIngredientsView(props: any) {

  function addToMyIngredientsACB(e: any) {
    props.onAddIngr(e.target.name)
  }

  function setInputACB(evt: any) {
    props.onInputChange(evt.target.value);  
  }

  function searchACB() {
    props.onSearchClick()
  }

  const searchResultArr = props.searchResults

  return (
    <>
      <Logo></Logo>
      {/* MOBILE SCREEN */}
      <section id="mobileScreen" className="lg:hidden font-Alata bg-neutral">
        <div className=" text-white fixed w-screen top-0 h-fit pt-5 z-50">
            <SmallBackButton text="My Ingredients" link="#ingredients"></SmallBackButton>
          </div>
        <div className="fixed z-30 w-full h-full bg-black opacity-80"></div>
        <div className="w-full h-[20vh] fixed left-0 top-0 flex justify-center z-20">
          <div className="text-3xl flex justify-center items-end px-2 pb-2 w-fit">
            <span>My Ingredients</span>
          </div>
        </div>
        <section id="addIngredients" className="fixed w-screen h-screen z-30 flex justify-center items-end">
          <div className=" z-50 bg-dark-green h-[80vh] w-[94vw] rounded-t-[3rem] shadow-2xl  font-medium">
            <div className="h-[6vh] mt-[4vh] mx-8 bg-light-green rounded-[1.3rem] flex justify-between items-center pl-5 pr-2 shadow-xl font-semibold">
              <input onChange={setInputACB} className="bg-light-green w-[80%] h-full font-semibold placeholder-black text-black" type="text" placeholder="Search ingredient:">
              </input>
              <button onClick={searchACB} className="bg-dark-green px-2 py-1 rounded-xl text-white font-medium text-center">Search</button>
            </div>
            <div className="h-[10vh] flex justify-center items-center text-white text-lg underline-offset-[8px] underline z-50 bg-dark-green">Choose Ingridents:</div>
          <div className="flex flex-col items-start w-full h-[60vh] text-xl font-semibold overflow-auto">
          <div className=" px-10 pt-8 w-full z-30">
            {searchResultArr.map((ingredient: any) => (
              <div key={ingredient.strIngredient1} className="w-full flex justify-between py-2">
                <div className="text-white">{ingredient.strIngredient1}</div>
                  {/*<ToggleButton></ToggleButton>*/}
                  {
                    <button className="w-fit h-fit flex items-center text-white bg-light-green py-1 pl-[0.8rem] pr-[0.4rem] rounded-3xl text-base font-medium"
                    name={ingredient.strIngredient1}
                    onClick={addToMyIngredientsACB}>
                      <span>Add</span>
                      <div className="w-[30px] h-[30px]">
                        <PlusSmallIcon></PlusSmallIcon>
                      </div>
                    </button>}
              </div>
            ))}
          </div>
        </div>
          </div>
        </section>
        

      </section>

      {/* DESKTOP SCREEN */}
      <section id="desktopScreen" className="hidden lg:flex w-screen h-screen justify-center items-center text-3xl font-Alata">
        PLEASE CHOOSE MOBILE SCREEN
      </section>
    </>
  );
}

export default AddIngredientsView;