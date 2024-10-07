import { useEffect, useState } from 'react';
import BoxOfficeTr from './BoxOfficeTr';
export default function BoxOffice() 
{

    const [box, setBox] = useState();
    const [trs, setTrs] = useState();
    const [info, setInfo] = useState();

    const handleTrClick = (item) => {
        console.log(item);
        let tm = `[${item.movieCd} ${item.movieNm} : 누적관객수 ${parseInt(item.aduiCnt).toLocaleString()}명 입니다.]`
        setInfo(tm)
    }

    const getFetchData = () => {
        const apiKey = process.env.REACT_APP_MV_KEY; //KEY값 가져오기
        const dt = '20240929';

        let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
        url = `${url}key=${apiKey}&targetDt=${dt}`;
    
        //데이터 가져오기
        fetch(url)
         .then(resp => resp.json()) //가져온 data를 json타입으로 변환, 변수명 => 변수명.jason()
         .then(data => setBox(data.boxOfficeResult.dailyBoxOfficeList)) //json타입 data 불러오기
         .catch(err => console.log(err))
    }
    //맨 처음 한번 실행 UseEffect - React가 알아서 실행
    useEffect( () => {
        getFetchData();
    }, []);
    
    //fetch 데이터가 채워지면
    useEffect( () => {
        if (!box) return;
        console.log('box', box);
        let tm = box.map(item => <BoxOfficeTr
                                  handleClick = {() => handleTrClick(item)}
                                  mv = {item}
                                  key = {item.movieCd} />)
        setTrs(tm);
    }, [box]);
  return (
    <div className='w-full h-scrren flex flex-col justify-center items-center'>
        <div className='w-full'>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-md justify-center font-bold text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    순위
                </th>
                <th scope="col" class="px-6 py-3">
                    영화명
                </th>
                <th scope="col" class="px-6 py-3">
                    누적 관객수(명)
                </th>
                <th scope="col" class="px-6 py-3">
                    누적 매출액(W)
                </th>
                <th scope="col" class="px-6 py-3">
                    순위변동
                </th>
            </tr>
        </thead>
            <tbody>
                {trs}
            </tbody>
            <tfoot>
                <tr className='bg-black text-white w-full text-center h-10 p-2'>
                    <td colSpan={5}>{info}</td>
                </tr>
            </tfoot>
        </table>
        </div>
    </div>
  )
}

    
