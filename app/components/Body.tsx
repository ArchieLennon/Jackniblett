
interface Data {
  title: string;
  _id: string;
  heading: string;
  body: string;
  links: string;
}





interface propsType{

    bodydata:Data[]
     
    

}





// type propsType={

    
    
    


// }


export default function Links({bodydata}:propsType){
    
    return(

        <>
        <div>

        {bodydata?.map((bodydata) => (

            <div key={bodydata._id}>


            {bodydata.body?<p  className="mb-5  w-96">{bodydata.body}</p>:null}

          </div>

        ))}

        </div>
    
        
        </>


    )
}