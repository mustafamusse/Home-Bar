
export default function Button({text} : {text:string}){

    return(
            <div className="bg-dark-red hover:bg-light-red text-white font-bold py-2 px-4 rounded-2xl">
                <p className="lg:text-xl text-base font-semibold">
                    {text}
                </p>
            </div>
    )
}