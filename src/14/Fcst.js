import TailButton from '../Ui/TailButton';
import getxy from './getxy.json';
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function Fcst() {
  // const sido = getxy.map(item => item["1단계"])
  //                   .map(item => <option key={item} value={item}>
  //                                 {item}                 
  //                                 </option>) ;

  // let sido = [] ;
  // for (let i = 0 ; i < getxy.length ; i++) {
  //   sido.push(getxy[i]["1단계"]) ;
  // }

  const sido = getxy.map(item => <option key={item["1단계"]}
                                    value={item["1단계"]}>
                                    {item["1단계"]}
                                  </option>);
  
  const navigate = useNavigate();

  //날짜
  const txtDt = useRef();
  //지역
  const txtArea = useRef() ;

  //버튼이 눌러졌을때
  const handleOk = (gubun) => {
    if (txtDt.current.value === '') {
      alert('날짜를 선택하세요.')
      txtDt.current.focus();
      return;
    }
    if (txtArea.current.value === '') {
      alert('지역을 선택하세요.')
      txtArea.current.focus();
      return;
    }

    console.log(gubun)
    const dt = txtDt.current.value.replaceAll('-','') ;
    const loc = getxy.filter(item => item["1단계"] === txtArea.current.value)[0] ;
    const x = loc["격자 X"];
    const y = loc["격자 Y"];

    navigate(`/fcstlist?gubun=${gubun}&dt=${dt}&x=${x}&y=${y}&area=${txtArea.current.value}`) ;
  }
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="w-full text-center text-3xl my-10 font-bold">
        일기예보선택
      </h1>
      <div className="w-10/12 grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
        <input type='date'
          ref = {txtDt}
          className="form-input w-full"
          id='txt1' />
        <select className="form-select w-full"
                ref={txtArea}>
          <option value=''>--지역을 선택하세요.</option>
          {sido}
        </select>
        <TailButton caption='초단기예보'
          color='blue'
          handleClick={() => handleOk('초단기예보')}
          size='w-1/2' />
        <TailButton caption='단기예보'
          color='blue'
          handleClick={() => handleOk('단기예보')}
          size='w-1/2' />
      </div>
    </div>
  )
}