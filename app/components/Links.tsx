

import Link from 'next/link';

interface Data {

    title: string;
    _id: string;
    heading: string;
    body: string;
    links: string;
    name: string;

}










interface propsType{
    linkdata:Data[]
}



export default function Links({linkdata}:propsType){

    return(

        <>
        <div className="list-none mb-5">
            <Link href="mailto:Jack@jackniblett.xyz" className="hover:text-gray-600">Email</Link><br></br>
            <Link href="https://www.instagram.com/nblett/" className="hover:text-gray-600">Instagram</Link><br></br>
            <Link href="https://fontsinuse.com/type_designers/9293/jack-niblett" className="hover:text-gray-600">Fonts In Use</Link><br></br>
            </div>

{linkdata?.map((linkdata) => (


            <div key={linkdata._id}>
                {linkdata.links?<Link href={linkdata.links} className="hover:text-gray-600">{linkdata.links}</Link>:null}<br></br>


            </div>
            
        ))}


      

    
        
        </>


    )
}