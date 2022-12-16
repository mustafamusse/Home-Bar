import SmallBackButton from "../Components/smallBackButton";
import Button from "../Components/button";

function DetailView(props: any) {

  function renderIngr(obj: any, index: any) {
    if (index > 16 && index < 32 && obj)
      return <li key={obj}>{obj}</li>
  }

  /*NEEDS TO TRIGGER ON CLICK AND SEND LOGIN CREDENTIALS AS EVENT TARGET */
  return (
    <>
      {/* MOBILE SCREEN */}
      <section id="mobileScreen" className="flex flex-col h-screen w-screen bg-neutral font-Alata">
        <section id="detail" className="fixed w-screen h-screen z-20 flex justify-center items-end">
            <div className="fixed z-40 w-full h-full bg-black opacity-80"></div>
            <div className=" text-white fixed w-screen top-0 h-fit pt-5 z-50">
              <SmallBackButton text="Search" link="#search"></SmallBackButton>
            </div>
            
            <div className=" z-50 bg-dark-green h-[80vh] w-[94vw] lg:h-[80vh] lg:w-[80vh] rounded-t-[3rem] shadow-2xl font-medium">
              <div className="h-[10vh] flex justify-center items-center text-white text-lg underline-offset-[8px] underline z-50 bg-dark-green rounded-2xl"> Ingridents & Instructions</div>
              <div className="flex flex-col items-center">
              <img src={props.selectedItem.strDrinkThumb} className="w-40 pt-7 pb-3"></img>
              </div>

            <ul className="space-y-1 max-w-md list-disc list-inside text-white dark:text-white pl-8">
            {props.ingredients.map(renderIngr)}
            </ul>

            <div className="flex flex-col items-center pt-2 text-white text-xl">
            Instructions
            </div>
            <div className="flex flex-col items-center text-white dark:text-white pt-4 overflow-auto h-[200px]">
              <p className="w-5/6 pb-5">
              {props.selectedItem.strInstructions}
              </p>
            </div>
          </div>
        </section>
      </section>

      {/* DESKTOP SCREEN */}

    </>
  );
}

export default DetailView;