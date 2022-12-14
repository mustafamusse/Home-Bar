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
            <img src="./HomebarBlackLogo.png" className="w-[70%] md:w-[70%] 2xl:w-[60%]"></img>
            <div className="flex flex-col justify-center items-center gap-2 lg:gap-5">
              <a href="#start">
              <Button text="Login"></Button>
              </a>
            </div>
        </section>
      </>
    );
  }
  
  export default loginView;