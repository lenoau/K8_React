import { useState,useEffect } from "react";

export default function MyBoxFlag({color}) {

    const [flag, setFlag] = useState(false);
    const colorObj = {
        'blue' : {
            'bg500' : 'bg-blue-500',
            'text700' : 'text-blue-700',
            'border600' : 'border-blue-600',
            'bg50' : 'bg-blue-50',
        },

        'orange' : {
            'bg500' : 'bg-orange-500',
            'text700' : 'text-orange-700',
            'border600' : 'border-orange-600',
            'bg50' : 'bg-orange-50',
        },

        'lime' : {
            'bg500' : 'bg-lime-500',
            'text700' : 'text-lime-700',
            'border600' : 'border-lime-600',
            'bg50' : 'bg-lime-50',
        }
    }

    const obj = colorObj[color];
    console.log(obj);

    const handleClick = () => {
        setFlag(!flag);
    }
    
    useEffect(() => {
        console.log('useEffect blue =>' , flag);
    }, [flag]);

  return (
        <div className={`w-1/3 ${flag ? obj['bg500'] : ''}
                        flex flex-col justify-center items-center
                        border border-slate-400 rounded-md
                        p-5 m-5`}>
            <h1 className={`flex justify-center items-center
                        text-3xl font-bold
                        p-5 m-5 ${obj['text700']}
                        border border-slate-400 rounded-md`}
                        >
                    {color}
            </h1>
            <div className={`flex justify-center items-center
                        text-xl font-bold
                        border ${obj['border600']} ${obj['bg50']} rounded-md
                        p-5 m-5`}
                    onClick={handleClick}>
                    {color} Toggle
            </div>
       </div>
    )
}
