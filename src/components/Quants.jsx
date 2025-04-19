 import {useState} from 'react'
 
 function Quants(){
    let [number,setNumber]=useState(1)

    return (<span className="flex justify-center">
                        <button className="border text-lg bg-gray-950 text-white w-5 rounded-sm m-1" onClick={()=>{number>0?setNumber(number-1): setNumber(number)}}>-</button>
                        <p  className="bg-white w-6 text-center rounded-sm">{number}</p>
                        <button className="border text-lg bg-gray-950 text-white w-5 rounded-sm m-1" onClick={()=>setNumber(number+1)}>+</button>
            </span>)
 }
 export default Quants