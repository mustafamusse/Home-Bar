
export default function Button({link, text} : {link:string,text:string}){

    return(
            <a href={link} className="bg-red-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                <p className="lg:text-xl text-xl font-semibold">
                    {text}
                </p>
            </a>
    )
}