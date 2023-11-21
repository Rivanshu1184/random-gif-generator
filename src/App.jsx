
/* axios -> this is basically an another way to make a http request just like fetch() function.
used to make an api call . It is more secure .
-> like as in fetch() function during an api call , the output has to be converted into json format,
    but using axios no need to do that.
*/


import Random from "./components/Random"
import Tag from "./components/Tag"



export default function App() {
  return(

    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">

        <h1 className="bg-white rounded-lg w-11/12 text-center mt-[40px]
        px-10 py-2 text-4xl font-bold"> 
            RANDOM GIFS 
        </h1>

        <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">

            <Random/>

            <Tag/>

        </div>

    </div>
  )
}
