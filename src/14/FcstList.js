import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom" ;
import getcode from "./getcode.json" ;

export default function FcstList() {

  //목록 
  const [ops, setOps] = useState();

  //전체데이터
  const [tdata, setTdata] = useState([]) ;

  const [trs, setTrs] = useState([]);

  //form 값을 참조하기 위한 ref변수
  const selRef = useRef() ;

  //sky 항목
  const sky = {'1': '맑음', '3': '구름많음', '4': '흐림'}
  const pty = {'0': '없음', '1': '비', '2': '비/눈', '3': '눈', '4': '소나기', '5': '빗방울', '6': '빗방울눈날림', '7': '눈날림'}

  const [sParams] = useSearchParams() ;
  //http://localhost:3000/fcstlist?gubun=%EC%B4%88%EB%8B%A8%EA%B8%B0%EC%98%88%EB%B3%B4&dt=20241015&x=98&y=76$area=%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C
  const gubun = sParams.get('gubun') ;
  const dt = sParams.get('dt') ;
  const x = sParams.get('x') ;
  const y = sParams.get('y') ;
  const area = sParams.get('area') ;
  console.log(gubun, dt, x, y, area) ;

  //select가 선택이 되었을때
  const handleSelect = () => {
    console.log(selRef.current.value) ;
    if (!tdata) return ;

    const code = getcode.filter(item => item['항목값'] === selRef.current.value)[0];
    console.log(code);
    const tm = tdata.filter(item => item['category'] === selRef.current.value)
                    .map(item => <tr key={item.category + item.fcstDate + item.fcstTime}>
                                    <td>{code.항목명}({item.category})</td>
                                    <td>{item.fcstDate.slice(0,4)}.{item.fcstDate.slice(4,6)}.{item.fcstDate.slice(6,8)}</td>
                                    <td>{item.fcstTime.slice(0,2)} : {item.fcstTime.slice(2,4)}</td>
                                    <td>
                                      {
                                        item.category === 'SKY' ? sky[item.fcstValue] : item.fcstValue + code.단위
                                      }
                                    </td>
                                </tr>)
                    setTrs(tm);
    console.log(tm);
  }

  //데이터 가져오기
  const getFetchData = async(url) => {
    const resp = await fetch(url) ;
    const data = await resp.json() ;

    console.log(data.response.body.items.item) ;  
    setTdata(data.response.body.items.item)  ; 
  }

  //컴포넌트 생성시
  useEffect(()=> {
    const tm = getcode.filter(item => item.예보구분 === gubun)
                      .map(item => <option key={item.항목값}
                                           value={item.항목값}>
                                    {item.항목명}({item.항목값})
                                    </option>) ;

    setOps(tm);

    let url ='https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0' ;
    if (gubun === '단기예보') {
      url = url + `/getVilageFcst?serviceKey=${process.env.REACT_APP_API_KEY }&pageNo=1&numOfRows=1000&dataType=json`;
      url = url + `&base_date=${dt}&base_time=0500&nx=${x}&ny=${y}`;
    }
    else {
      url = url + `/getUltraSrtFcst?serviceKey=${process.env.REACT_APP_API_KEY }&pageNo=1&numOfRows=1000&dataType=json`;
      url = url + `&base_date=${dt}&base_time=0630&nx=${x}&ny=${y}`; 
    }

    console.log(url);

    getFetchData(url) ;
  },[]);

  return (
    <div className="w-full flex flex-col justify-start items-center">
      <div className="w-10/12 grid grid-cols-1 md:grid-cols-2 
                      gap-2 md:gap-4 my-5">
        <h1 className="w-full text-left text-2xl font-bold">
          {area} {gubun} ({dt.slice(0,4)}.{dt.slice(4,6)}.{dt.slice(6,8)})
        </h1>
        <select className="form-select" 
                ref={selRef}
                onChange={handleSelect}>
          <option value=''>--항목을 선택하세요.--</option>
          {ops}
        </select>
      </div> 
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-md justify-center font-bold text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    항목명
                </th>
                <th scope="col" class="px-6 py-3">
                    예측일자
                </th>
                <th scope="col" class="px-6 py-3">
                    예측시간
                </th>
                <th scope="col" class="px-6 py-3">
                    예측값
                </th>
            </tr>
            </thead>
                <tbody>
                    {trs}
                </tbody>
        </table>
      <table>
      </table>
    </div>
  )
}