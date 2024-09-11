import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

function Random()
{

    const {gif,loading,fetchData} = useGif();
    return (
        <div className="w-1/2 bg-green-500 rounded-lg border border-green-900
        flex flex-col items-center gap-y-5">
            <h1 className="text-xl underline uppercase font-bold">A Random Gifs</h1>
            {
                loading ? (<Spinner/>) : (<img src={gif} width="450"/>)
            }
            <button
            className="w-10/12 mb-4 mt-2 bg-yellow-600 text-sm py-2 rounded-lg font-semibold" onClick={() => fetchData()}>
                Generate
            </button>
        </div>
    )
}

export default Random;