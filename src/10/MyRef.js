import React from 'react'
import TailButton from '../Ui/TailButton'
import { useState, useRef, useEffect } from 'react';

export default function MyRef() {

    //컴포넌트 변수
    let valC = 0;

    //State 변수
    const [up, setUp] = useState(0);

    //Ref 변수  >> 버튼을 누르면 값은 증가하는데 화면에 반응이 안됨 State 변수를 변화 시켜야 변화됨 (렌더링 되는 시점에서만 반응 하고 싶을 때 사용)
    const valR = useRef(0);

    const x = useRef();
    const y = useRef();
    const z = useRef();
  

    const handleClick = () => {
        valC += 1;
        console.log('valC = ', valC);
    };
    const handleClick2 = () => {
        setUp(up + 1);
    };
    const handleClick3 = () => {
        valR.current += 1;
        console.log('valR = ', valR.current);
    };
    const handleClick4 = () => {
        if(x.current === '' && y.current === '') {
            alert('값을 입력하세요');
            y.current.focus();
            return;
        }
        z.current.value = parseInt(x.current.value) + parseInt(y.current.value);
    };

    useEffect(() => {
        x.current.focus();
    },[]);

    const handleFocus = () => {
        z.current.value = '';
    }

  return (
    <>
    <div className='w-3/5 grid grid-cols-3 gap-2 my-10'>
        <div className='text-xl font-bold text-blue-800'>
            컴포넌트 변수: {valC}
        </div>
        <div className='text-xl font-bold text-orange-800'>
            State 변수: {up}
        </div>
        <div className='text-xl font-bold text-lime-800'>
            Ref 변수: {valR.current}
        </div>
        <div>
        <TailButton caption = '컴포넌트변수'
                    color = 'blue'
                    handleClick = {handleClick}/>
        </div>
        <div>
        <TailButton caption = 'State 변수'
                    color = 'orange'
                    handleClick = {handleClick2}/>
        </div>
        <div>
        <TailButton caption = 'Ref 변수'
                    color = 'lime'
                    handleClick = {handleClick3}/>
        </div>
       
    </div>
    <div className='w-3/5 grid grid-cols-5 gap-2 p-2 bg-slate-300'>
    <div className='flex justify-center items-center text-center'>
        <input ref={x} type='number' id='txt1' name='txt1' className='h-10 w-20 text-center'
                                                            onFocus={handleFocus}/>
    </div>
    <div className='flex justify-center items-center text-center text-2xl font-bold'>
        +
    </div>
    <div className='flex justify-center items-center text-center'>
        <input ref={y} type='number' id='txt2' name='txt2' className='h-10 w-20 text-center'/>
    </div>
    <div className='flex justify-center items-center text-center'>
    <TailButton caption = '='
                    color = 'orange'
                    handleClick = {handleClick4}/>
    </div>
    <div>
        <input ref={z} type='number' id='txt2' name='txt2' className='h-10 w-20 text-center'/>
    </div>
    </div>
    </>
  )
}
