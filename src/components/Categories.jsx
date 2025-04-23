import useFetch from '../utils/useFetch'
import {useState,useEffect,lazy,Suspense} from 'react'
import ProductCards from './ProductCards';
import { Link,useSearchParams } from 'react-router-dom';

let ProductsCards=lazy(()=>import('./ProductCards'));
let LoadingScreen=lazy(()=>import('./LoadingScreen'))

function Categories(){
    let [filter,setFilter]=useState("");
    let [display,setDisplay]=useState([]);
    // const [searchParams, setSearchParams] = useSearchParams();

    let {data,loading,error}=useFetch("https://dummyjson.com/products/");
    

    let categories=data.products?.map((items)=>items.category);
   console.log(categories);
    let unique=['All',...new Set(categories)]       //filtering all categoriess..
    console.log('categories--->',unique);
    console.log(filter)
    // let filtered=data?.products ?.filter((items)=>items?.category  .toLowerCase()==filter.toLowerCase());
    // console.log(filtered)
    const filtered =
    filter === 'All'
      ? data?.products || []                //filtering state based on selected category...
      : data?.products?.filter(
          (item) => item.category.toLowerCase() === filter.toLowerCase()
        ) || [];

        // useEffect(() => {
        //     const filterParam = searchParams.get('filter');
        //     if (filterParam) {
        //       // Normalize case (e.g., 'Furniture' -> 'furniture' for comparison)
        //       const normalizedParam = filterParam.charAt(0).toUpperCase() + filterParam.slice(1).toLowerCase();
        //       if (unique.includes(normalizedParam)) {
        //         setFilter(normalizedParam);
        //       } else {
        //         setFilter('All');
        //         setSearchParams({}); // Clear invalid param
        //       }
        //     } else {
        //       setFilter('All');
        //       setSearchParams({});
        //     }
        //   }, [searchParams, unique]);
 
   useEffect(()=>{
    
        setDisplay(filtered);
    
   

   },[filter])
    
   


   




    return (<div>
    <div className="bg-amber-100 grid sm:grid-flow-col md:grid-flow-col sm:grid-col-1 m-1  grid-col-1 justify-center items-center ">
        {/* filterinf caategories */}
        {unique.map((items)=><div key={items} onClick={()=>setFilter(items)} className={`flex lg:flex-row flex-col   items-center h-42 m-4 p-2  ${filter.toLowerCase()==items.toLowerCase()?`bg-blue-300`: ``} duration-500  border rounded-2xl  w-fit`}>
            <img className=" rounded-l-2xl w-1/2  h-full sm:w-full lg:w-1/2" src='\Screenshot 2025-04-17 011259.png'/>
            <h1 className="  pl-2 text-xl ">{items.toUpperCase()}</h1>
        </div>)}
        </div>
        <hr/>
        {/* displaying of selected filter item */}
        <h1 className='text-3xl bg-yellow-100/20 text-center border-b-2 border-black font-bold font-serif text-white p-3'>{filter.toUpperCase()}</h1>
        <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-row-3 grid-cols-1">
            
            {display.map((items)=>
            
                <Suspense fallback={<div> <LoadingScreen /> </div>} key={items.id}>
                
                    <ProductCards fetched={items} key={items.id} />
                 </Suspense>
            )}
        </div>


        </div>)
      
}
export default Categories