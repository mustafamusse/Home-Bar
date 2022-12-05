import coctailglass from "../../public/coctailglass.png"

function StartscreenView() {
    return (
        <>
        {/* MOBILE SCREEN */}
        <section id="mobileScreen" className="flex flex-col lg:hidden items-center bg-neutral h-screen w-screen font-Alata">
            <span className="text-2xl text-black pt-8">
            Welcome to Home Bar!
            </span>
            <div className="grid grid-cols-2 gap-12 justify-end">
            <div>
            <img src="./cocktail.png" className="w-100 h-20 pr-20"></img>
            </div>
            <div>
            <img src="./cocktail.png" className="w-100 h-20 pl-20"></img>
            </div>
            </div>
            <a className="flex flex-col justify-center items-center text-lg hover:underline py-2">
            {/*<input className="border-2 border-black text-center" type="text" placeholder="Search here">
            </input>
            To uncomment, remove the curlybrackets*/}         
            </a>
            <a href='#Search' className="rounded-2xl bg-light-red text-white text-xl justify-center px-3 py-0.5">
            <span>Search drink</span>
            </a>

            <span className="text-2xl text-black pt-8 text-center">
            Or choose a one of our most popular drinks
            </span>
            
            <div className="py-8 grid grid-cols-2 gap-12 content-start">
              <div>
                <div className="border-2 border-black text-center py-4">image</div>
                <div>Title of image</div>
              </div>
              <div>
                <div className="border-2 border-black text-center py-4">image</div>
                <div>Title of image</div>
              </div>
              <div>
                <div className="border-2 border-black text-center py-4">image</div>
                <div>Title of image</div>
              </div>
              <div>
                <div className="border-2 border-black text-center py-4">image</div>
                <div>Title of image</div>
              </div>
              <div>
                <div className="border-2 border-black text-center py-4">image</div>
                <div>Title of image</div>
              </div>
              <div>
                <div className="border-2 border-black text-center py-4">image</div>
                <div>Title of image</div>
              </div>
              <div>
                <div className="border-2 border-black text-center py-4">image</div>
                <div>Title of image</div>
              </div>
              <div>
                <div className="border-2 border-black text-center py-4">image</div>
                <div>Title of image</div>
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
  
  export default StartscreenView;