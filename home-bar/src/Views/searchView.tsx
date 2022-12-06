
function SearchView() {
    return (
        <>
        {/* MOBILE SCREEN */}
        <section id="mobileScreen" className="flex flex-col lg:hidden items-center bg-neutral h-screen w-screen font-Alata">
            <span className="text-2xl text-black py-8">
            Search for your Cocktail
            </span>
            <input className="border-2 border-black text-center" type="text" placeholder="Search here">
            </input>
        </section>
        
        {/* DESKTOP SCREEN */}
        <section id="desktopScreen" className="hidden lg:flex w-screen h-screen justify-center items-center text-3xl font-Alata">
            PLEASE CHOOSE MOBILE SCREEN
        </section>
      </>
    );
  }
  
  export default SearchView;