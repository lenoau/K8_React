import React from 'react'
export default function BoxOfficeTr({handleClick, mv}) {

  return (
    <tr onClick = {handleClick} className="bg-white border-b ">
        <td class="px-6 py-4">
            {mv.rank}
        </td>
        <td class="px-6 py-4">
            {mv.movieNm}
        </td>
        <td class="px-6 py-4">
            {parseInt(mv.audiAcc).toLocaleString()}
        </td>
        <td class="px-6 py-4">
             {parseInt(mv.salesAcc).toLocaleString()}
        </td>
        <td class="px-6 py-4">
             {mv.rankInten > 0 ? <span className='text-green-500 pr-3'>▲</span> : 
              mv.rankInten < 0 ? <span className='text-red-500 pr-3'>▼</span>  : '-'}
             {mv.rankInten != 0 && Math.abs(mv.rankInten)}
        </td>
    </tr>
  )
}
