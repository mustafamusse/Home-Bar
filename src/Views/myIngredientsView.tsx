

function myIngredientsView() {

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
  ]

    return (
      <>
      {/* MOBILE SCREEN */}
      <section id="mobileScreen" className="lg:hidden font-Alata">
        <div className="bg-neutral fixed w-screen h-[20vh]">
          <span className="text-2xl text-black flex justify-center items-end h-full pb-8">
            My Ingredients
          </span>
        </div>
        <div className="fixed mt-[20vh] w-screen h-[10vh] flex justify-center items-center bg-neutral">
          <a href='#add_ingredients' className="w-[250px] h-[50px] rounded-2xl bg-light-red text-white shadow-lg text-xl flex justify-center items-center">
            <span>Add new ingredients</span>
          </a>
        </div>
        <div className="fixed mt-[85vh] w-screen h-[15vh] flex justify-center items-center bg-neutral">
          <a href='#Search' className="w-[250px] h-[50px] rounded-3xl bg-dark-red text-white text-xl flex justify-center items-center">
            <span>Back to Search</span>
          </a>
        </div>
        <div className="flex flex-col items-start w-screen h-fit pb-20 text-xl font-semibold bg-neutral">
          <div className="mt-[30vh] px-10 pt-8"> 
          {dummyIngredients.map((ingredient) => (
                <div key={ingredient.name}>{ingredient.name}</div>

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