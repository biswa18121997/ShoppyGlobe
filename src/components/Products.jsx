
import {useState,useEffect,lazy,Suspense} from 'react';
import ProductCards from './ProductCards';
import useFetch from '../utils/useFetch'
import LoadingScreen from './LoadingScreen';
import {useSearchParams} from 'react-router-dom'


// let ProductCards=lazy(()=>import('./ProductCards'));
// let LoadingScreen=lazy(()=>import('./LoadingScreen'));


function Products(){
        const [searchParams] = useSearchParams();
        const searchItem = searchParams.get('search') || '';
    
        
        
        
       let url='https://dummyjson.com/products'
       let {data,loading,error}=useFetch(url);
       let products=data.products;
       console.log(data);

//        const searchResult = products?.filter((item)=> item.title.toLowerCase().includes(searchItem.toLowerCase()) );
//        console.log(searchResult)
       //let searchResult=products.filter((item)=>item.title.toLowerCase()==searchItem.toLowerCase());

// Search functionality with state management
       const searchResult = searchItem
        ? products?.filter((item) =>
              item.title.toLowerCase().includes(searchItem.toLowerCase())
          )
        : [];

       if(loading){
        return(
                // lazy loading
                // <Suspense fallback={<div>Loading..please Wait </div>}>
                          <LoadingScreen />
                // </Suspense>
        )
        } 
        if(error){
                console.log("the error is",error);
                return(                            
                        <div className='text-2xl text-center text-neutral-200 w-screen h-screen flex justify-center items-center bg-red-700/60 font-bold'> some thing went wrong during fetch..please try again later..or view console for more info <i className="fa-solid fa-skull-crossbones text-white text-4xl m-5"></i></div>
              )
        }
       return(
       <div>     
                {/* <h1 className='text-3xl bg-yellow-100/20 text-center border-b-2 border-black font-bold font-serif text-white p-3'>Your Search Results</h1> */}

        <div className={`${searchItem=='' ? "invisible":"visible"}`}>
                <h1 className="text-3xl text-white text-center border-b-2 border-white font-bold font-serif  p-3">Your Search Results:</h1>
                <h1 className={ `text-center text-xl text-white  ${searchResult.length<1 || searchResult==[]?"block":'hidden'} m-5`}>No Results Match your Search Query <i className="fa-solid fa-circle-exclamation  text-2xl text-red-600"></i></h1>
                <section className=" h-1/4 grid grid-cols-3 grid-rows-1 justify-center items-center">
                        {searchResult?.map((item)=><ProductCards fetched={item} key={item.id}/>)}
                </section>
        </div>

        <h1 className='text-3xl bg-yellow-100/20 text-center border-b-2 border-white font-bold font-serif text-white p-3'>All Products List</h1>

       <div className="grid grid-cols-1 grid-rows-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* lazy loading */}
        
                {products?.map((item)=> (
      
                <ProductCards fetched={item}  key={item.id} />
        ))}

       
        

       </div>
       
       </div>

       )
}
export default Products