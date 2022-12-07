

function myIngredientsView() {

  function removeIngredientsACB(){

  }

  const dummyIngredients = [
    {
      name: 'Ice',
    },
    {
      name: 'Absolut Vodka',
    },
    {
      name: 'Candy',
    },
    {
      name: 'Jaeger Meister',
    },
    {
      name: 'Lemon',
    },
    {
      name: 'Water',
    },
    {
      name: 'Gin',
    },
    {
      name: 'Milk',
    },
    {
      name: 'Redbull',
    },
    {
      name: 'Powerking',
    },
    {
      name: 'Apple',
    },
    {
      name: 'Pear',
    },
    {
      name: 'Fireball',
    },
    {
      name: 'Fish',
    },
    {
      name: 'Sours',
    },
    {
      name: 'Coca Cola',
    },
    {
      name: 'Sprite',
    },
    {
      name: 'Schweppes',
    },
    {
      name: 'Sugar',
    },
  ]

    return (
      <>
      {/* MOBILE SCREEN */}
      <section id="mobileScreen" className="lg:hidden font-Alata">
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
        <div className="fixed mt-[85vh] w-screen h-[15vh] flex justify-center items-center bg-neutral border-t-2 border-dark-red">
          <a href='#search' className="w-[250px] h-[50px] rounded-3xl bg-dark-red text-white text-xl flex justify-center items-center">
            <span>Back to Search</span>
          </a>
        </div>
        <div className="flex flex-col items-start w-screen h-fit pb-[20vh] text-xl font-semibold bg-neutral ">
          <div className="mt-[25vh] px-10 pt-8 w-full"> 
          {dummyIngredients.map((ingredient) => (
            <div className="w-full flex justify-between">
              <div key={ingredient.name}>{ingredient.name}</div>
              <div className="w-fit h-fit px-2 bg-light-red flex items-center justify-center rounded-[0.65rem]">
                <button className="w-fit h-fit text-white text-base font-medium" onClick={removeIngredientsACB}>Remove</button>
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