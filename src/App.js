import './App.css';
import { FaHome } from "react-icons/fa";

// import Hello from './01/Hello' ;
import MyClock from './02/MyClock' ;
// import MyDiv1 from './03/MyDiv1';
//import MyList from './04/MyList';
import Lotto from './05/Lotto';
import Foodmain from './06/Foodmain';
import BoxOffice from './07/BoxOffice';
//import MyBox from './08/MyBox';
import Traffic from './09/Traffic';
//import MyRef from './10/MyRef';
import Gallery from './11/Gallery';
import Festival from './12/Festival';
//import RouteMain from './13/RouteMain';
import Fcst from './14/Fcst';
import FcstList from './14/FcstList';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
    <div className="w-full xl:w-10/12 h-screen mx-auto
                    flex flex-col justify-center items-center">
      <header className='w-full h-20
                         flex justify-between items-center
                         bg-slate-200'>
        <p className='text-2xl font-bold p-5'>
          K-digital 8기
        </p>
        <ul className= 'flex justify-center items-center text-xl font-bold'>
          <li className='mx-2 p-2 hover:bg-blue-400 rounded-md'><Link to='/시계'>시계</Link></li>
          <li className='mx-2 p-2 hover:bg-blue-400 rounded-md'><Link to='/로또'>로또생성기</Link></li>
          <li className='mx-2 p-2 hover:bg-blue-400 rounded-md'><Link to='/푸드'>푸드뱅크</Link></li>
          <li className='mx-2 p-2 hover:bg-blue-400 rounded-md'><Link to='/박스오피스'>박스오피스</Link></li>
          <li className='mx-2 p-2 hover:bg-blue-400 rounded-md'><Link to ='/교통사고'>교통사고</Link></li>
          <li className='mx-2 p-2 hover:bg-blue-400 rounded-md'><Link to ='/관광'>관광</Link></li>
          <li className='mx-2 p-2 hover:bg-blue-400 rounded-md'><Link to ='/축제'>축제</Link></li>
          <li className='mx-4 p-2 hover:bg-slate-700 hover:text-white rounded-md'><Link to='/fcst'>일기예보</Link></li>
        </ul>
        <p className='text-4xl font-bold p-5'>
          <Link to='/'><FaHome /></Link>
        </p>
      </header>
      
      <main className='w-full grow
                       flex flex-col items-center
                       overflow-y-auto'>
      <Routes>
        <Route path='/시계' element = {<MyClock />} />
        {/* <MyList /> */}
      <Route path='/로또' element = {<Lotto />} />
      <Route path='/푸드' element = {<Foodmain />} />
      <Route path='/박스오피스' element = {<BoxOffice />} />
      {/* <MyBox /> */}
      <Route path='/교통사고' element = {<Traffic />} />
      {/* <MyRef /> */}
      <Route path='/관광' element = {<Gallery />} />
      <Route path='/축제' element = {<Festival />} />
      {/* <RouteMain /> */}
      <Route path='/fcst' element={<Fcst />} />
      <Route path='/fcstlist' element={<FcstList />} />
      </Routes>
      </main>
     
      <footer className='w-full h-20
                         flex justify-center items-center
                         bg-black text-white'>
        <p>K-digital 8기 류승진</p>                  
      </footer>
    </div>
    </BrowserRouter>
  );
 }

export default App;
