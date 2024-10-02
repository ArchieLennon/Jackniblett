
interface Data {
    title: string;
    _id: string;
    heading: string;
    body: string;
    links: string;
    name:string;
}





interface propsType{
    titledata:Data[]
}

export default function Title({titledata}:propsType){

    return(

        <>
        <div className="mb-5">

{titledata?.map((titledata) => (


            <h1 key={titledata._id} >
                
                {titledata.name?<p>{titledata.name}</p>:null} 
                <p >{titledata.heading}</p>

            </h1>
))}


        </div>
    
        
        </>


    )
};