

type propsType={

    bodydata:{
  map(arg0: (posts: any) => import("react").JSX.Element): import("react").ReactNode | Iterable<import("react").ReactNode>;
  title: string;
  _id: string;
  heading: string;
  body: string;
  links: string;
    }
     
    

}





// type propsType={

    
    
    


// }


export default function Links(props:propsType){
    
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