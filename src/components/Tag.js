import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";


// use process.env  to access the key name 
// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY ;

const Tag = () =>{

    /*
    const [gif , setGif] = useState('') ;
    const [loading , setloading] = useState(false) ;

    // tag is for the input , for which we want the gif
    const [tag, setTag] = useState('') ;

    
    async function fetchData(){
        // initially loading is true
        setloading(true) ;


        // url for api call
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}` ; 

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

   
   const [tag, setTag] = useState('') ;
   
   function changeHandler(event){
       setTag(event.target.value) ;
    };

    
    const {gif , loading , fetchData} = useGif(tag) ;
    

    function clickHandler(){
        fetchData(tag) ;
    };


    return(
        <div className="w-1/2 bg-blue-500 rounded-lg border border-black
        flex flex-col items-center gap-y-5 mt-[15px]">

            <h1 className="mt-[15px] text-2xl underline font-bold uppercase">Random {tag} Gif</h1>

            {
                loading ? (<Spinner/>) : (<img src={gif} width="450" />)
            }
            

            <input
                className="bg-white text-lg w-10/12 py-2 rounded-lg mb-[3px] text-center"
                onChange={changeHandler}
                value={tag}
            />

            <button onClick={clickHandler}
            className="bg-white text-lg w-10/12 py-2 rounded-lg mb-[20px]">
                Generate
            </button>


        </div>
    )
} ;

export default Tag ;