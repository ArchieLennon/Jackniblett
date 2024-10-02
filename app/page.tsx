import Links from "./components/Links";
import Title from "./components/Title";
import Body from "./components/Body";

import {client} from '@/app/lib/sanity';



// interface Data {
//   title: string;
//   _id: string;
//   heading: string;
//   body: string;
//   links: string;
// }


async function getProjects(){
  const query = `*[type == posts]{
  title,
    _id,
    name,
    heading,
    body,
    links
   }`
   
   //now this part fetches it

   const data = await client.fetch(query);
   return data;
}


export const revalidate = 60;




export default async function Home() {

const data = await getProjects();


// :Data[]
// console.log(data)

  return (



<div className="h-screen w-screen overflow-hidden bg-white font-sans p-5 text-pretty text-left text-lg leading-5 md:text-sm md:leading-4 lg:text-sm lg:leading-4 ">



<Title titledata={data} ></Title>
<Body bodydata={data} ></Body>
<Links linkdata={data} ></Links>


  
</div>





  );
}
