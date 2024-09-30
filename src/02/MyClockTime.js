import { useState, useEffect } from "react";

function MyClockTime() {

  const [cTime, setCTime] = useState(new Date());

  useEffect(() => {
    const tm = setInterval(() => {       //setInterval은 클리어 하기전 까지 계속 작동됨
      setCTime(new Date());
    }, 1000);

    return () => {clearInterval(tm)};
  }, []);                     // use effect가 발동할 때 [] 빈 대괄호이면 한번만 돌려주는 역할

    

  return(
    <div className="w-full flex justify-center items-start text-2xl font-bold">
    {cTime.toLocaleTimeString()}
    </div>
  );
}

export default MyClockTime ;