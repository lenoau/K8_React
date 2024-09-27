import React, { useState } from 'react'
import busan from './busan.png'
import bank from './bank.png'
import market from './market.png'

export default function FoodCard({obj}) {
    const [isshow, setIsShow] = useState(false);
    const handleClick = () => {
        setIsShow(!isshow)
    }
    const objImg = {
        "광역지원센터" : busan,
        "기초푸드뱅크" : bank,
        "기초푸드마켓" : market
   }

  return (
    <div className='w-full
                      border border-gray-300
                      flex justify-center items-center'>
        <div className='w-1/3 flex justify-start items-start'>
            <img src = {objImg[obj["구분"]]}
                  alt = {obj["구분"]} />
        </div>
        <div className='w-full h-full flex flex-col justify-center items-start ml-3'>
            <div className='text-3xl font-bold'>
                {obj["사업장명"]}
            </div>
            <div className='font-bold'>
                {obj["운영주체명"]}
            </div>
            <div>
                {obj["사업장_소재지"]}
            </div>
            <div className='w-full h-8 p-2 flex justify-end items-center bg-slate-600 text-white font-bold' onClick={handleClick}>
                {isshow ? obj["연락처(대표번호)"] : ''}
            </div>
        </div>
    </div>
  )
}
