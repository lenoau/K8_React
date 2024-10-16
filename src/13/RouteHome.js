import { Link } from 'react-router-dom'
import React from 'react'

export default function RouteHome() {
  return (
    <div className='w-1/2 grid grid-cols-2 text-2xl'>
      <div>
        <h1 className='text-3xl mb-5 p-5 flex justify-center items-center bg-blue-50'>page1</h1>
        <ul>
            <li><Link to='/page1/🍎/바나나'>사과🍎</Link></li>
            <li><Link to='/page1/🍌/사과'>바나나🍌</Link></li>
            <li><Link to='/page1/오렌지/🥕'>당근🥕</Link></li>
        </ul>
      </div>
      <div>
        <h1 className='text-3xl mb-5 p-5 flex justify-center items-center bg-blue-100'>page2</h1>
        <ul>
            <li><Link to='/page2?item=🍎&item2=바나나'>사과🍎</Link></li>
            <li><Link to='/page2?item=🍌&item2=사과'>바나나🍌</Link></li>
            <li><Link to='/page2?item=오렌지&item2=🥕'>당근🥕</Link></li>
        </ul>
      </div>
    </div>
  )
}
