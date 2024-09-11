import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

function Tag()
{
    const [tag,setTag] = useState("");
    const {gif,loading,fetchData} = useGif(tag);

    return (
        <div className="w-1/2 bg-blue-500 rounded-lg border border-blue-900
        flex flex-col items-center gap-y-5 mb-20">
            <h1 className="text-xl underline uppercase font-bold">Random {tag} Gif</h1>
            {
                loading ? (<Spinner/>) : (<img src={gif} width="450"/>)
            }

            <input
                onChange={(event) => setTag(event.target.value)}
                className="w-10/12 mb-[1px] mt-2 text-center text-sm py-2 rounded-lg outline-none"
                value={tag}
             />
            <button
            className="w-10/12 mb-4 bg-yellow-600 text-sm py-2 rounded-lg font-semibold" onClick={() => fetchData(tag)}>  
                Generate
            </button>
        </div>
    )
}

export default Tag;