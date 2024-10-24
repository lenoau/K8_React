import Recoil2 from "./Recoil2"
import Recoil3 from "./Recoil3"
import { AtomN, AtomN2 } from "./AtomN";
import { useRecoilValue } from "recoil";

export default function Recoil1() {

const x = 1;
const y = 2;

const n = useRecoilValue(AtomN);
const n2 = useRecoilValue(AtomN2);

  return (
    <div className="w-10/12 h-4/5 flex flex-col bg-orange-200 font-bold mt-10 p-5">
      Recoil1 (n = {n} , n2 = {n2})
      <div className="flex">
      <Recoil2 y2={1}/>
      <Recoil2 y2={2}/>
      <Recoil2 y2={3}/>
      </div>
        <Recoil3 x3={x} y3={y}/>
    </div>
  )
}

