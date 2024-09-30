

type propsType={
    titledata:any;
}

export default function Title(props:(propsType)){

    return(

        <>
        <div className="mb-5">

{props.titledata?.map((posts:any) => (


            <h1 key={posts._id} >
                
                {posts.name?<p>{posts.name}</p>:null} 
                <p >{posts.heading}</p>

            </h1>
))}


        </div>
    
        
        </>


    )
};