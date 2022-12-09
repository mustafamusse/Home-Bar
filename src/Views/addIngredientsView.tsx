

function AddIngredientsView(props: any) {

  function addToMyIngredientsACB(e: any) {
    console.log(e.target.id)
    console.log(e.target.name)
    props.onAddIngr({id : e.target.id, name : e.target.name})
  }

  function setInputACB(evt: any) {
    props.onInputChange(evt.target.value);
  }

  function searchACB() {
    props.onSearchClick()
  }
  return (
    <>
      {/* MOBILE SCREEN */}
      <section id="mobileScreen" className="lg:hidden font-Alata">
        <section id="addIngredients" className="fixed w-screen h-screen z-20  flex justify-center items-end">
          <div className="fixed z-40 w-full h-full bg-black opacity-80"></div>
          <div className="fixed top-0 mt-[5vh] w-screen h-[15vh] flex justify-center items-center z-50">
            <a href='#ingredients' className="w-[250px] h-[50px] rounded-3xl bg-dark-red text-white text-xl flex justify-center items-center shadow-lg shadow-gray-700">
              <span>Back to ingridients</span>
            </a>
          </div>
          <div className=" z-50 bg-dark-green h-[80vh] w-[94vw] rounded-t-[3rem] shadow-2xl  font-medium">
            <div className="h-[6vh] mt-[4vh] mx-8 bg-light-green rounded-[1.3rem] flex justify-between items-center pl-5 pr-2 shadow-xl font-semibold">
              <input onChange={setInputACB} className="bg-light-green w-[80%] h-full font-semibold placeholder-black text-black" type="text" placeholder="Search ingredient:">
              </input>
              {/*GÖR SNYGGT?*/}
              <button onClick={searchACB} className="bg-dark-green px-2 py-1 rounded-xl text-white font-medium text-center">Search</button>
            </div>
            <div className="h-[10vh] flex justify-center items-center text-white text-lg underline-offset-[8px] underline z-50 bg-dark-green">Choose Ingridents:</div>
          </div>
        </section>
        <div className="bg-neutral fixed w-screen h-[15vh]">
          <span className="text-2xl text-black flex justify-center items-end h-full pb-8">
            My Ingredients
          </span>
        </div>
        <div className="fixed mt-[15vh] w-screen h-[10vh] flex justify-center items-center bg-neutral border-b-2 border-dark-red">
          <a href='#add_ingredients' className="w-[250px] h-[50px] rounded-2xl bg-light-red text-white shadow-lg text-xl flex justify-center items-center">
            <span>Add new ingredients</span>
          </a>
        </div>
        <div className="flex flex-col items-start w-screen h-fit pb-[10vh] text-xl font-semibold bg-neutral overflow-hidden overflow-auto">
          <div className="mt-[40vh] px-10 pt-8 w-full z-30">
            {props.searchResults.map((ingredient: any) => (
              <div className="w-full flex justify-between py-2">
                <div key={ingredient.idIngredient} className="text-white">{ingredient.strIngredient}</div>
                <div className="w-fit h-fit px-2 bg-light-red flex items-center justify-center rounded-[0.65rem]">
                  <button className="w-fit h-fit text-white text-base font-medium"
                    id={ingredient.idIngredient}
                    name={ingredient.strIngredient}
                    onClick={addToMyIngredientsACB}>Add</button>
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

export default AddIngredientsView;