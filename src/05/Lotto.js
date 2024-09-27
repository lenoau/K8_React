import TailButton from "../Ui/TailButton";
//import TailBall from "./TailBall";
import { useState } from "react";
import TailBall from "./TailBall";

export default function Lotto() {
  const [numbers, setNumbers] = useState();
    const handleClick1 = () => {
        let arr = [];

        while(arr.length < 7) {
        let n = Math.floor(Math.random() * 45) + 1; //1~45 랜덤수 생성
        if (!arr.includes(n)) arr.push(n); //중복값을 제외
        }

        const bonus = arr.splice(-1) //보너스번호 1개 분리
        arr.sort((a, b) => a - b); //숫자 오름차순 정렬
        arr = arr.concat(bonus);  //배열에 bonus번호 결합

        let tm = arr.map(item => <TailBall key = {item} n={item} />);
        tm.splice(6, 0, <div className="text-3xl font-bold mx-2" key="sp"> + </div>); // + 기호 7번째 자리에 추가
        console.log(tm);
        setNumbers(tm);
    }

  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center mb-10">
        {numbers}
      </div>
        <div className="w-full flex justify-center items-center">
            <TailButton caption='로또번호생성' color='blue' handleClick={handleClick1}/>
        </div>
    </div>
        
  )
}
