

export default function TailCard({imgUrl, title, content, kw}) {

    // let kws = '';
    // if(kw.includes(',')) {
    //     kws = kw.split(',');
    // }
    // else {
    //     kws.push(kw);
    // }

    const kws = kw.includes(',') ? kw.split(',') : [kw];
    const kwTags = kws.map(item => <sapn key={item} className="inline-flex bg-slate-50 text-sm font-bold p-2 m-1 rounded-xl">{item}</sapn>);
    console.log(kws);

    return (
        <div classsName="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            {/* <img className="rounded-t-lg" src={imgUrl} alt="" /> */}
            <div className="p-5">
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    {title}
                </h1>

                <p className="mb-3 font-normal text-gray-700">
                    {content}
                </p>

                <p>
                    {kwTags}
                </p>
            </div>
        </div>
    )
}
