import SmallBackButton from "../Components/smallBackButton";


function DetailView(props: any) {

  function renderIngr(obj: any, index: any) {
    if (index > 16 && index < 32 && obj)
      return <li>{obj}</li>
  }

  /*NEEDS TO TRIGGER ON CLICK AND SEND LOGIN CREDENTIALS AS EVENT TARGET */
  return (
    <>
      {/* MOBILE SCREEN */}
      <section id="mobileScreen" className="flex flex-col lg:hidden h-screen w-screen bg-neutral font-Alata">

        <div className="bg-neutral w-screen">
          <SmallBackButton text="Search" link="#search"></SmallBackButton>
        </div>
        <div className="flex flex-col items-center">
          <img src={props.selectedItem.strDrinkThumb} className="w-40 pt-7 pb-3"></img>
        </div>
        
        <ul className="space-y-1 max-w-md list-disc list-inside text-black dark:text-black pl-2">
          {props.ingredients.map(renderIngr)}
        </ul>
        <div className="flex flex-col items-center pt-2 text-xl">
          Instructions
        </div>
        <div className="flex flex-col items-center pt-4">
          <p className="w-5/6">
            {props.selectedItem.strInstructions}
          </p>
        </div>
      </section>

      {/* DESKTOP SCREEN */}
      <section id="desktopScreen" className="hidden lg:flex flex-col w-screen h-screen bg-neutral font-Alata">

      <div className="bg-neutral w-screen">
          <SmallBackButton text="Search" link="#search"></SmallBackButton>
        </div>
        
        <div className="flex flex-col items-center pt-7 pb-3">
          <img src={props.selectedItem.strDrinkThumb} className="w-96 shadow-lg shadow-black"></img>
        </div>
    
        <div className="flex flex-col items-center pt-4 w-5/6">
        <ul className="space-y-1 list-disc list-inside text-black dark:text-black">
            {props.ingredients.map(renderIngr)}
          </ul>
        </div>

        <div className="flex flex-col items-center pt-2 text-xl">
          Instructions
        </div>

        <div className="flex flex-col items-center pt-4">
          <p className="w-5/6">
            {props.selectedItem.strInstructions}
          </p>
        </div>

      </section>
    </>
  );
}

export default DetailView;