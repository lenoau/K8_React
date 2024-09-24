import MyListData from './MyListData.json' ;
import MyListItem from './MyListItem';
export default function MyList() {

  const tags = MyListData.map(item => <MyListItem
                                       key = {item.title}  // title로 key prop 설정
                                       content = {item.content}
                                       imgUrl = {item.imgUrl}
                                       title = {item.title} /> );

  return (
    <div className='w-10/12 grid grid-cols-1 lg:grid-cols-2 gap-4'>
      {tags}
    </div>
  )
}
