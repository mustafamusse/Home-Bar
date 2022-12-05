

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
  ]

    return (
      <div className="flex flex-col items-center justify-between h-screen w-screen bg-neutral py-[23vh] md:py-[6vh] font-Alata">
        <span className="text-2xl text-black">
          My Ingredients
        </span>
        <a href='#login' className="w-[250px] h-[50px] rounded-2xl bg-light-red text-white text-xl flex justify-center items-center">
          <span>Add new ingredients</span>
        </a>
        <div>
          {dummyIngredients.map((ingredient) => (
                <div key={ingredient.name}>{ingredient.name}</div>

          ))}
        </div>
        <a  href='#register' className="flex flex-col justify-center items-center text-lg hover:underline">
          <span className="-mb-2">Register new</span>
          <span>account</span>
        </a>
      </div>
    );
  }
  
  export default myIngredientsView;