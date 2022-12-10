import {ChevronLeftIcon} from '@heroicons/react/24/outline'

export default function SmallBackButton({link, text} : {link:string,text:string}){

    return(
            <a href={link} className="h-[50px] font-Alata w-fit flex flex-row items-center justify-start gap-2 p-4 transition-transform hover:scale-105 duration-300">
                <ChevronLeftIcon className="lg:w-[30px] w-[30px]"></ChevronLeftIcon>
                <p className="lg:text-xl text-xl font-semibold">
                    {text}
                </p>
            </a>


    )




}