import TailButton from "../Ui/TailButton";
import { useState, useEffect, useRef } from "react";
export default function Rest() {

  //화면 재랜더링을 위한 변수
  const [tdata, setTdata] = useState([]);
  const [trs, setTrs] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false); //입력, 수정, 확인
  const [updateid, setUpdateid] = useState();  //수정할 데이터 id

  //입력값을 제어하기 위한 ref변수
  const txt1Ref = useRef();
  const txt2Ref = useRef();

  //삭제 함수
  const handleDelete = async (id) => {
    const resp = await fetch(`${url}/${id}`, {
      method: 'DELETE',
    });
  //삭제 후 데이터 반환
    const tm = tdata.filter (item => item.id !== id);

    setTdata(tm);
  };
  //수정 함수
  const handleUpdate = async (item) => {
    txt1Ref.current.value = item.title;
    txt2Ref.current.value = item.author;

    setIsUpdate(true);
    setUpdateid(item.id);
  };

  //수정
  const handleput = async () => {
    if (!txt1Ref.current.value) {
      alert('제목을 입력하세요.') ;
      txt1Ref.current.focus();
      return ;
    }
    if (!txt2Ref.current.value) {
      alert('작성자를 입력하세요.') ;
      txt2Ref.current.focus();
      return ;
    }

    const postData = { 
      title : txt1Ref.current.value,
      author : txt2Ref.current.value
    }

    const resp = await fetch(`${url}/${updateid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
  
    const data = await resp.json();
    console.log(data);

    const tm = tdata.map(item => item.id === updateid ? data : item);
    setTdata(tm);

    setIsUpdate(false);
    setUpdateid('');
    txt1Ref.current.value = '';
    txt2Ref.current.value = '';
  }

  //입력, 수정 구분 함수
  const handleok = () => {
    if (!isUpdate) handlePost();
    else handleput(); 
    };

  //컴포넌트가 생성시
  useEffect( () => {
    getFetchData();
  }, []);

  //tdtat가 변경 되었을 때 실행
  useEffect(() => {
    const tm = tdata.map( item => 
                                <tr key = {item.id}>
                                  <td>{item.title}</td>
                                  <td>{item.author}</td>
                                  <td><TailButton caption = "삭제"
                                                  color = "blue"
                                                  handleClick = {() => handleDelete(item.id)} /> 
                                  </td>
                                  <td><TailButton caption = "편집"
                                                  color = "orange"
                                                  handleClick = {() => handleUpdate(item)} /> 
                                  </td>
                                </tr>
    );
          setTrs(tm);
  },[tdata]);

  const url = 'http://localhost:3005/posts';

  const getFetchData = async () => {
    
    const resp = await fetch(url);
  
    const data = await resp.json();

    setTdata(data);
    
  };
  //입력처리 사용자 정의함수
  const handlePost = async() => {
    //입력 확인절차
    if (!txt1Ref.current.value) {
        alert('제목을 입력하세요!');
        txt1Ref.current.focus();
        return;
    }

    if (!txt2Ref.current.value) {
      alert('작성자을 입력하세요!');
      txt1Ref.current.focus();
      return;
    }

    //보낼 데이터 오브젝트로 만들기
    const postData = {
      id : updateid,
      title: txt1Ref.current.value,
      author: txt2Ref.current.value,
    };
    //입력된 데이터 반환
    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
  
    const data = await resp.json();
    console.log(data);

    setTdata([data, ...tdata]);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-11/12 grid grid-cols-1 md:grid-cols-7 
                      bg-slate-100
                      text-center my-5 p-5">
        <label htmlFor="txt1" className="my-2">제목</label>
        <div className="flex col-span-3">
          <input id="txt1"
            type="text" 
            className="form-input  w-full"
            ref={txt1Ref} />
        </div>
        <label htmlFor="txt2" className="my-2">작성자</label>
        <div className="flex">
          <input id="txt2"
            type="text"
            className="form-input w-full"
            ref={txt2Ref} />
        </div>
        <TailButton caption = {isUpdate ? '편집' : '입력'}
                    color = "blue"
                    handleClick = {handleok} />  
      </div>
      <table
        className="w-11/12 text-left text-sm font-light text-surface">
        <thead
          className="border-b border-neutral-200 font-medium">
          <tr className="bg-black text-white font-bold text-center">
            <th scope="col" className="px-6 py-3 w-3/6 text-center">제목</th>
            <th scope="col" className="px-6 py-3 w-1/6 text-center">작성자</th>
            <th scope="col" className="px-6 py-3 w-1/6 text-center">삭제</th>
            <th scope="col" className="px-6 py-3 w-1/6 text-center">편집</th>
          </tr>
        </thead>
        <tbody className="text-center h-10 p-2 border-b">
        {trs}
        </tbody>
      </table>
    </div>
  )
}
