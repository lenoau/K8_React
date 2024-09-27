import React from 'react'

export default function TailBall({n}) {
    const ballColor = {
        'b0' : 'bg-yellow-800',
        'b1' : 'bg-red-800',
        'b2' : 'bg-sky-800',
        'b3' : 'bg-purple-800',
        'b4' : 'bg-orange-800',
    }
  return (
    <div className={`flex w-20 h-20 m-2 
                    justify-center items-center 
                    rounded-full
                    font-bold text-2xl ${ballColor['b' + Math.floor(n /10)]} text-white`}>
      {n}
    </div>
  )
}
