import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";


// use process.env  to access the key name 
// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY ;

const Random = () =>{

    /*
    const [gif , setGif] = useState('') ;
    const [loading , setloading] = useState(false) ;

    
    async function fetchData(){
        // initially loading is true
        setloading(true) ;


        // url for api call
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}` ; 

        // calling api using axios and it returns a promise
        const {data} = await axios.get(url) ;
        
        const imageSource = data.data.images.downsized_large.url ; 
        // console.log(imageSource) ;

        // setting the gif as imageSource
        setGif(imageSource) ;


        // at last when we get and set the gif , we makes loading false
        setloading(false) ;
    };

    // useEffect calls only for first time render
    useEffect( ()=>{
        fetchData() ;
    } , [] ) ;
*/

// insteading of writing the same above code for Tag , we will create our own hook.

    const {gif , loading , fetchData} =  useGif() ;


    function clickHandler(){
        fetchData() ;
    }

    return(
        <div className="w-1/2 bg-green-400 rounded-lg border border-black
        flex flex-col items-center gap-y-5 mt-[15px]">

            <h1 className="mt-[15px] text-2xl underline font-bold uppercase">A Random Gif</h1>

            {
                loading ? (<Spinner/>) : (<img src={gif} width="450" />)
            }
            

            <button onClick={clickHandler}
            className="bg-white text-lg w-10/12 py-2 rounded-lg mb-[20px]">
                Generate
            </button>


        </div>
    )
} ;

export default Random ;