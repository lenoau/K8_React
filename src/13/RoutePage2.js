import { useLocation, useSearchParams } from 'react-router-dom'

export default function RoutePage2() {

    const loc = useLocation(); //Object로 넘어온다
    console.log(loc)
    console.log(loc.pathname)
    console.log(loc.search.replace('?','').split('&'))

    const [sparams] = useSearchParams();
    const qlist = [...sparams]
    console.log(qlist)
    console.log(sparams)

  return (
    <div className='text-3xl mt-10'>
      RoutePage2
      {qlist.map(item => <span key={item[0]}>{item[1]}</span>)}
    </div>
  )
}
