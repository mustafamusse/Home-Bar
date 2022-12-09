import {ChevronLeftIcon} from '@heroicons/react/24/outline'

export default function SmallBackButton({link, text} : {link:string,text:string}){

    return(
         <div>
            <a className="h-[50px] w-[210px] lg:w-[400px] md:w-[300px] flex flex-row items-center justify-center gap-2 hover:gap-3 ">
                <ChevronLeftIcon className="lg:w-[25px] w-[25px] text-black"></ChevronLeftIcon>
                <p className="lg:text-xl text-lg text-black">
                    {text}
                </p>
                
            </a>
         </div>


    )




}