
type propsType={
    bodydata:any;
}


export default function Links(props:(propsType)){

    return(

        <>
        <div>

        {props.bodydata?.map((posts:any) => (

            <div key={posts._id}>


            {posts.body?<p  className="mb-5  w-96">{posts.body}</p>:null}

          </div>

        ))}

        </div>
    
        
        </>


    )
}