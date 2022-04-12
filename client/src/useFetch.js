import { useState , useEffect } from "react"

const useFetch = (url) => {
     //loading message 
    const [isPending,setIsPending] = useState(true)
    //ERROR handlin
    const [error,setError] = useState(null)
    //Data 
    const [data,setData] = useState(null)
    //abort controller 
    // useEffect is called every time the page is rendered
    //we can use use effect with no dependencies at first page start to get data from the api and setState for the list to be rendered
    // .then waits for a promise that results from asynchronous operation and take a value from it 
    // promise is an object that returns a value after completion of asynchronous operation
    useEffect(() =>{
        const abortContr = new AbortController();  
        fetch(url ,{signal : abortContr.signal})
        .then(list => {
            if (!list.ok){
                throw Error("couldn't find data at this resource");
            }
            return list.json()
        })
        .then(jsonList => {
            setData(jsonList);
            setIsPending(false);
            setError(null)
        })
        .catch(err =>{
            if (err.name === "AbortError"){
                console.log('aborted')
            }
            else{
                setIsPending(false)
                setError(err.message)
            }  
        })

        return () => abortContr.abort(); }
        , [url]) //url is a dependency that leeds useEffect to work only if event happen to url 
    return {data, error, isPending};
}

export default useFetch ;
