import fooddata from './fooddata.json';
import FoodCard from './FoodCard';
import {useState} from 'react';
import TailButton from '../Ui/TailButton';

export default function Foodmain() {
    const [tags, setTags] = useState();

    //운영주체 분류를 중복 제거하여 버튼으로 만들기
    let tm = fooddata.map(item => item["운영주체 분류"].replace(' ', ''));
    tm = [...new Set(tm)];

    const bts = tm.map(item => <TailButton key = {item}
                                           caption = {item} 
                                           color = 'blue' 
                                           handleClick = {()=>handleFood(item)} />);
   
    const handleFood = (c) => {
      console.log(c);
      let tm = fooddata.filter(item => item["운영주체 분류"].replace(' ', '') === c) // filter() 함수로 item["운영주체 분류"]에 item이 포함된 fooddata만 setTags로 저장
                       .map(item => <FoodCard obj={item} key={item.사업장명}/>);
      setTags(tm);
    };

  return (
    <div className='w-full flex flex-col justify-start'>
      <div className='w-full h-20 bg-blue-100
                      flex
                      justify-center
                      items-center'>
       {bts}
      </div>
      <div className='w-full grow grid grid-cols-1 xl:grid-cols-2 gap-4 p-4'>
        {tags}
      </div>
    </div>
  )
}
