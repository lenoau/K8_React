import { AtomN, AtomN2 } from "./AtomN"
import { useRecoilValue } from "recoil"

export default function Recoil2({y2}) {

    const n = useRecoilValue(AtomN);
    const n2 = useRecoilValue(AtomN2);

  return (
    <div className="w-1/3 flex flex-col bg-orange-500 font-bold mt-10 p-5 mx-2">
      Recoil2 (x = {n}, n = {n2})
    </div>
  )
}
