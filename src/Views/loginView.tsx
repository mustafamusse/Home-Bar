import Button from "../Components/button";


function loginView(props : any) {

  /*NEEDS TO TRIGGER ON CLICK AND SEND LOGIN CREDENTIALS AS EVENT TARGET */
  function logInClickACB(evt : any){
    props.logInRequest(evt.target.value)
  }
    return (
        <>
        {/* MOBILE SCREEN */}
        <section id="mobileScreen" className="flex flex-col items-center justify-center gap-20 h-screen w-screen bg-neutral py-[23vh] md:py-[6vh] font-Alata">
            <span className="text-4xl lg:text-6xl text-black">
            HomeBar
            </span>
            <img src="./drink-icon.png" className="w-[65%] md:w-[30%] 2xl:w-[20%]"></img>
            <div className="flex flex-col justify-center items-center gap-2 lg:gap-5">
              <a href="#start">
              <Button text="Login"></Button>
              </a>
              <a  href='#register' className="flex flex-col justify-center items-center text-sm hover:underline">
              <div className="lg:hidden flex flex-col underline items-center">
                <span>Register new</span>
                <span>account</span>
              </div>
              <div className="hidden lg:block underline text-base"> Register new account</div>
              </a>
            </div>
        </section>
        
      </>
    );
  }
  
  export default loginView;