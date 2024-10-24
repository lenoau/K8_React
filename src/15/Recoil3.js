import TailButton from "../Ui/TailButton"
import { useState, useEffect, useRef } from "react";
import { AtomN, AtomN2 } from "./AtomN";
import { useRecoilState, useRecoilValue } from "recoil";


export default function Recoil3({x3, y3}) {

    const [x, setX] = useState(x3);
    const [y, setY] = useState(y3);
    const inRef = useRef();
    const [n, setN] = useRecoilState(AtomN);
    //const [n2, setN2] = useRecoilState(AtomN2);
    const n2 = useRecoilValue(AtomN2);
    

    const upclick = () => {
        setX(x + 1);
        setN(n + 1);
        //setN2(n * 2);
    }

    const downclick = () => {
        setX(x - 1);
        setN(n - 1);
    }

    // useEffect(() => {
    //     console.log('x=', x)
    //     setY(x * parseInt(inRef.current.Value));
    // },[x]);

    // useEffect(() => {
    //   if (localStorage.getItem('nan'))
    //     return localStorage.getItem('0');
    //   else
    //      setX(parseInt(localStorage.getItem('x')));
    // },[]);

    useEffect(() =>{
        localStorage.setItem('x',  x); //localStorage에 저장하는 기능
        // setY(x * parseInt(inRef.current.Value));
    }, [x]);

  return (
    <div className="w-full h-full flex flex-col bg-orange-100 font-bold mt-10 p-5">
      Recoil3 (x = {x}, y = {n2})

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        {/* <input type='number' className="form-input" 
                ref = {inRef}
                defaultValue={2}   
                min = {2} max = {10} /> */}

        <TailButton caption = '증가'
                    color = 'blue'
                    handleClick = {upclick}
                    size = 'w-10/12' />

        <TailButton caption = '감소'
                    color = 'orange'
                    handleClick = {downclick}
                    size = 'w-10/12' />
      </div>
    </div>
  )
}
