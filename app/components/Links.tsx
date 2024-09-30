

import Link from 'next/link';

type propsType={
    linkdata:any;
}



export default function Links(props:(propsType)){

    return(

        <>
        <div className="list-none mb-5">
            <Link href="mailto:Jack@jackniblett.xyz" className="hover:text-gray-600">Email</Link><br></br>
            <Link href="https://www.instagram.com/nblett/" className="hover:text-gray-600">Instagram</Link><br></br>
            <Link href="https://fontsinuse.com/type_designers/9293/jack-niblett" className="hover:text-gray-600">Fonts In Use</Link><br></br>
            </div>

{props.linkdata?.map((posts:any) => (


            <div key={posts._id}>
                {posts.links?<Link href={posts.links} className="hover:text-gray-600">{posts.links}</Link>:null}<br></br>


            </div>
            
        ))}


      

    
        
        </>


    )
}