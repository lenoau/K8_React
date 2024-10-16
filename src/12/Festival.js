import React from 'react'
import { useState, useEffect, useRef } from 'react';
import TailCard from '../Ui/TailCard';

export default function Festival() {
    // 전체 데이터
    const [tdata, setTdata] = useState([]);

    //구정보
    const [gunm, setGunm] = useState([]);

    //선택된 축제정보
    const [tags, setTags] = useState();

    //select box 제어
    const gu = useRef();

    const getFetchData = async () => {
        const apiKey = process.env.REACT_APP_API_KEY;
        let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`;
        url = `${url}serviceKey=${apiKey}&pageNo=1&numOfRows=40&resultType=json`;

        console.log(url);
        // fetch(url)
        //  .then(resp => resp.json())
        //  .then(data => console.log(data))
        //  .catch(error => console.error('Error:', error))

        const resp = await fetch(url);
        const data = await resp.json();
        console.log("getFetch:", data.getFestivalKr.item);
        setTdata(data.getFestivalKr.item);
    }
    
    //option이 선택이 되면
    const handleSelect = () => {
        console.log(gu.current.value);
        const tm = tdata.filter(item => item.GUGUN_NM === gu.current.value)
                        .map(item => <TailCard
                                    key={item.UC_SEQ}    
                                    imgUrl = {item.MAIN_IMG_THUMB}
                                    title = {item.TITLE}
                                    content = {item.MAIN_PLACE}
                                    kw = {item.PLACE} />);
                                    
                        setTags(tm);
        console.log(tm)
    }

    //컴포넌트 생성시 한번만 실행
    useEffect(() => {
        getFetchData();
    },[]);

    //tdata 채워지면 실행
    useEffect(() => {
        // if (!tdata ||  tdata.length === 0) return;
        let tm = tdata.map(item => item.GUGUN_NM)
        tm = [...new Set(tm)].sort();
        console.log("tm = ", tm);

        tm = tm.map(item => <option
                                    key = {item}
                                    value = {item}>        
                                    {item}
                            </option>);
        setGunm(tm);

    },[tdata]);
    return (
    <div className="w-full flex flex-col justify-center">
      <div className="w-10/12 p-5 flex justify-center items-center">
        <select className='w-1/2 form-select' ref={gu} onChange={handleSelect}>
            <option value=''>구를 선택하세요</option>
            {gunm}
        </select>
      </div>
      <div className="w-10/12 p-2 grid grid-1 lg:grid-cols-2 xl:grid-cols-3">
      {tags}
      </div>
    </div>
  )
}
