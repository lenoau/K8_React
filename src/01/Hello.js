function Hello()
{
    let today = new Date();
    today = today.toLocaleString();
    let name = '';
    return (
        //jsx는 반드시 하나의 태그만 return 가능
        //fragment tag<> 태그는 묶어주는 역할만 함 기능은 없음
        <>
        <p className="p1">
            Hello React!!
        </p>
        <p className="text-4xl text-emerald-300">
            {name === 'PNU'? '부산대 류승진' : '류승진'}
        </p>
        <p style={{backgroundColor:'gray', color:'white'}}>
            {/*new Date().toLocaleString()*/}
            {today}
        </p>
        </>
    );
}

export default Hello;