import { useState,useEffect } from "react";
import axios from "axios";

function useGif(tag)
{
    const [gif ,setGif] = useState(" ");
    const [loading,setLoading] = useState(false);

    async function fetchData(tag)
    {
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=RRDtJUYB8enLoLemaA10IWLxayFyLKoH`;
        const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);
        const imageSource = data.data.images.downsized.url;
        setGif(imageSource);
        setLoading(false);
    }

    useEffect(() => {
        fetchData('car');
    },[])

    return {gif,loading, fetchData};
    
}

export default useGif;