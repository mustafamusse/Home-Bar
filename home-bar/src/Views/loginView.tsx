

function loginView() {
    return (
      <div className="flex flex-col items-center justify-between h-screen w-screen bg-neutral py-[23vh] md:py-[6vh]">
        <span className="text-2xl text-black">
          HomeBar
        </span>
        <img src="./drink-icon.png" className="w-[65%] md:w-[30%] 2xl:w-[20%]"></img>
        <a href='#login' className="w-[150px] h-[40px] rounded-2xl bg-light-red text-white text-xl flex justify-center items-center">
          <span>Log in</span>
        </a>
        <a  href='#register' className="flex flex-col justify-center items-center text-lg hover:underline">
          <span className="-mb-2">Register new</span>
          <span>account</span>
        </a>
      </div>
    );
  }
  
  export default loginView;