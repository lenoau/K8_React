import { useState, useEffect } from "react";
import TrafficNav from "./TrafficNav";

export default function Traffic() {
    //전체 데이터
    const [tdata, setTdata] = useState([]);

    //대분류 데이터
    const [c1, setC1] = useState([]);
    const [selC1, setSelC1] = useState();

    //사고유형 데이터
    const [c2, setC2] = useState([]);
    const [selC2, setSelC2] = useState();

    //사고유형 정보추출
    const [info, setInfo] = useState();


    //data fetch
    const getFetchData = () => {
        const apiKey = process.env.REACT_APP_API_KEY;
        let url = "https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?page=1&perPage=18&service";
        url = `${url}Key=${apiKey}`;
        console.log(url);

        fetch(url)
        .then(resp => resp.json()) //json response
        .then(data => setTdata(data.data))  //data log
        .catch(err => console.err(err));
    }

    //맨 처음 한번 실행
    useEffect(() => {
        getFetchData();
    },[]);

    //tdata가 변경되었을 때
    useEffect(() => {
        if (!tdata) return; //초기 값 undefined일 때 return null
        console.log(tdata);
        let tm = tdata.map(item => item['사고유형대분류']);
        tm = [...new Set(tm)]; //중복 제거
        console.log(tm);

        //대분류 생성
        setC1(tm);

    }, [tdata]);

    //대분류 선택
    useEffect(() => {
        let tm2 = tdata.filter(item => item['사고유형대분류'] === selC1);
        tm2 = tm2.map(item => item['사고유형'])
        console.log(tm2)

        setC2(tm2);
    },[selC1]);

    //사고유형 선택
    useEffect(() => {
        if(!selC1 || !selC2) return;
        let tm3 = tdata.filter(item => item['사고유형대분류'] === selC1 && item['사고유형'] === selC2);
        tm3 = tm3[0]; //Object

        console.log(tm3)
        const infoKey = ['사고건수', '사망자수', '중상자수', '경상자수' , '부상신고자수'];
        
        let tmk = infoKey.map((k, idx) => <div key={selC1 + selC2 + idx}
                                            className="flex justify-center items-center">
                                            <div>
                                                {k}
                                            </div>
                                            <div className="w2/5 p-2 text-center font-bold">
                                                {parseInt(tm3[k]).toLocaleString()}
                                            </div>
                                        </div>);
        setInfo(tmk)
    },[selC2]);

  return (
    <div className="flex flex-col w-full justify-center items-center">
        {c1 && <TrafficNav title='대분류' c={c1} sel={selC1} setSel={setSelC1}/>}
        {c2 && <TrafficNav title='사고유형' c={c2} sel={selC2} setSel={setSelC2}/>}
        <div className="grid grid-cols-5 gap-2">
            {info}
        </div>
    </div>
  )
}
