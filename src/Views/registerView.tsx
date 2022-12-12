
import SmallBackButton from "../Components/smallBackButton";

function registerView(props : any) {
  
    return (
        <>
        {/* MOBILE SCREEN */}
        <section id="mobileScreen" className="flex flex-col lg:hidden items-center h-screen w-screen bg-neutral py-[12vh] md:py-[6vh] font-Alata">
            
          <div className="bg-neutral w-screen">
            <SmallBackButton text="Login" link="#login"></SmallBackButton>
          </div>

            <img src="./drink-icon.png" className="w-[65%] md:w-[30%] 2xl:w-[20%]"></img>

            <h1> Register Form </h1>
            <h2> Home bar </h2>

            <div className="pt-4">
              Username
            </div>
            <input type="text">
            </input>

            <div className="pt-4">
              Email
            </div>
            <input type="email">
            </input>

            <div className="pt-4">
              Password
            </div>
            <input type="password">
            </input>

        </section>
        
        {/* DESKTOP SCREEN */}
        <section id="desktopScreen" className="hidden lg:flex flex-col w-screen h-screen bg-neutral items-center text-3xl font-Alata">
          <div className="bg-neutral w-screen">
            <SmallBackButton text="Login" link="#login"></SmallBackButton>
          </div>

            <img src="./drink-icon.png" className="w-[65%] md:w-[30%] 2xl:w-[20%]"></img>

           <div className="text-5xl pb-5">
            HomeBar
           </div>
           <div className="text-3xl pb-10">
            Register Form
           </div>
            

            <div className="pt-4">
              Username
            </div>
            <input type="text">
            </input>

            <div className="pt-4">
              Email
            </div>
            <input type="email">
            </input>

            <div className="pt-4">
              Password
            </div>
            <input type="password">
            </input>

        </section>
      </>
    );
  }
  
  export default registerView;