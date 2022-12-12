

function DetailView(props : any) {

  /*NEEDS TO TRIGGER ON CLICK AND SEND LOGIN CREDENTIALS AS EVENT TARGET */
    return (
        <>
        {/* MOBILE SCREEN */}
        <section id="mobileScreen" className="flex flex-col lg:hidden h-screen w-screen bg-neutral font-Alata">
            <div className="flex flex-col items-center">
            <img src="./drink-icon.png" className="w-40 pt-7 pb-3"></img>
            </div>
            <ul className="space-y-1 max-w-md list-disc list-inside text-black dark:text-black pl-2">
                <li>
                    1 lime
                </li>
                <li>
                    1/2 tsp sugar
                </li>
                <li>
                    1/2 L vodka :D
                </li>
            </ul>
            <div className="flex flex-col items-center pt-2 text-xl">
            Instructions
            </div>
            <div className="flex flex-col items-center pt-4">
              <p className="w-5/6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quae sed non impedit voluptas laborum atque deleniti. Quasi ullam, eos velit illo consequuntur quis maiores modi sint esse aspernatur similique?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quae sed non impedit voluptas laborum atque deleniti. Quasi ullam, eos velit illo consequuntur quis maiores modi sint esse aspernatur similique?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quae sed non impedit voluptas laborum atque deleniti. Quasi ullam, eos velit illo consequuntur quis maiores modi sint esse aspernatur similique?
              </p>
            </div>
        </section>
        
        {/* DESKTOP SCREEN */}
        <section id="desktopScreen" className="hidden lg:flex flex-row w-screen h-screen justify-center items-center bg-neutral font-Alata">
        
        <div className="flex flex-row items-center">
            <img src="./drink-icon.png" className="w-40 pt-7 pb-3"></img>
        </div>

        <ul className="space-y-1 max-w-md list-disc list-inside text-black dark:text-black pl-2">
            <li>
                1 lime
            </li>
            <li>
                1/2 tsp sugar
            </li>
            <li>
                1/2 L vodka :D
            </li>
        </ul>

        <div className="flex flex-row items-center pt-2 text-xl">
        Instructions
        </div>

        <div className="flex flex-col items-center pt-4">
          <p className="w-5/6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quae sed non impedit voluptas laborum atque deleniti. Quasi ullam, eos velit illo consequuntur quis maiores modi sint esse aspernatur similique?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quae sed non impedit voluptas laborum atque deleniti. Quasi ullam, eos velit illo consequuntur quis maiores modi sint esse aspernatur similique?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quae sed non impedit voluptas laborum atque deleniti. Quasi ullam, eos velit illo consequuntur quis maiores modi sint esse aspernatur similique?
          </p>
        </div>

        </section>
      </>
    );
  }
  
  export default DetailView;