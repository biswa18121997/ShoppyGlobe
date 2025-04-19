import {useState,useEffect} from 'react'


function useFetch(URL){

    let [data,setData]=useState([])
    let [loading,setLoading]=useState(true)
    let [error,setError]=useState(false)

    useEffect(()=>{

        async function fetcher(){

            try{
                let fetched=await fetch(URL);
                let fetched_json=await fetched.json();
                setData(fetched_json);
                setLoading(false);
            
            }
            catch(e){
                setError(e);
                setLoading(false);

            }
            finally{
                setLoading(false);
                
            }

        }
        fetcher();
    },[URL])

    return {data,loading,error}
}
export default useFetch;
