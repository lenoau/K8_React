import { useState, useEffect } from "react"


export default function MyBox() {

    const [bluebt, setBluebt] = useState(false);
    const [orangebt, setOrangebt] = useState(false);

    const blueClick = () => {
        setBluebt(!bluebt);
    }
    
    useEffect(() => {
        console.log('useEffect blue =>' , bluebt);
    }, [bluebt]);

    const orangeClick = () => {
        setOrangebt(!orangebt);
    }

    useEffect(() => {
        console.log('useEffect orange =>' , orangebt);
    }, [orangebt]);

    return (
        <div className="w-full h-full 
                      flex justify-center items-center">
            <div className={`w-1/3 ${bluebt ? 'bg-blue-500' : ''}
                        flex flex-col justify-center items-center
                        border border-slate-400 rounded-md
                        p-5 m-5`}>
                <h1 className="flex justify-center items-center
                        text-3xl font-bold
                        p-5 m-5 text-blue-700
                        border border-slate-600 rounded-md
                        ">
                    Blue
                </h1>
                <div className="flex justify-center items-center
                        text-xl font-bold
                        border border-blue-600  bg-blue-50 rounded-md
                        p-5 m-5"
                    onClick={blueClick}>
                    Blue Toggle
                </div>
            </div>
            <div className={`w-1/3 ${orangebt ? 'bg-orange-500' : ''}
                        flex flex-col justify-center items-center
                        border border-slate-400 rounded-md
                        p-5 m-5`}>
                <h1 className="flex justify-center items-center
                        text-3xl font-bold
                        p-5 m-5 text-orange-700
                        border border-slate-600 rounded-md
                        ">
                    Orange
                </h1>
                <div className="flex justify-center items-center
                        text-xl font-bold
                        border border-orange-600  bg-orange-50 rounded-md
                        p-5 m-5"
                        onClick={orangeClick}>
                    Orange Toggle
                </div>
            </div>
        </div>
    )
}
