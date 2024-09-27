import {useState} from "react"; //useState 재렌더링 하기 위해 useState Hook을 import (좋아요 클릭시 값 증가)
export default function MyListItem({imgUrl ,content, title}) {
  const [n, setN] = useState(0); //값을 2개 받아야(2번째 값은 Set{N}) useState Hook을 사용 할 수 있다.
  const hClick = () => {
    setN(n + 1);
    console.log();
  }
  return (
    <div className='w-full
                      border border-gray-300
                      flex justify-center items-center'>
      <div className='w-1/3 flex justify-start items-start'>
        {<img src={imgUrl} alt='HTML' /> }
      </div>
      <div className='w-2/3 h-full flex flex-col justify-between items-center'>
        <div>
          <div className="tit text-2xl font-bold">
            {title}
          </div>
          <div>
            {content}
          </div>
        </div>
        <div className = "good flex w-full justify-end items-end mr-8">
          <div className="heart cursor-pointer" onClick = {hClick}>❤️</div>
          <span className = "good2 mx-2">좋아요</span>
          <span>{n}</span>
        </div>
      </div>
    </div>
  )
}
