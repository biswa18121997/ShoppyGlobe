import {Link } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import{useState} from 'react' 
import Quants from './Quants';
import {removeItem} from '../utils/CartSlice'

function Cart(){
    
   let dispatch=useDispatch();
    function del(id){

        dispatch(removeItem(id));
        alert("item deleted");
    }

    let selector=useSelector((state)=>state.cart.Cart);
    console.log(selector)

    return(<div className="w-fit grid grid-cols-2 grid-rows-2 h-auto ">


<div className="grid grid-cols-1  grid-rows-1 md:grid-cols-2 lg:grid-cols-3 w-screen m-2 gap-2  ">{selector.length==0 || !selector?<h1 className='text-center text-white font-bold text-3xl'> No Items to Display..</h1>: ""}

    {/* fetching of cart info */}
        {selector.map((items)=><div key={items.id} className="bg-white/50 border-0 rounded-3xl h-full" >        
            <img src={items.images} className="w-full bg-amber-200 h-1/2" />
            <h3 className='font-bold m-2'>Product Name : {items.title}</h3>
            <p className=' rounded-2xl p-1 m-2 text-neutral-600 font-semibold text-sm ' >Product Tittle:{ items.description.slice(0,60)}...</p>
            <p className='m-2 bg-blue-700 w-1/3 p-1 text-center text-sm rounded-2xl text-white'>Ratings: {items.rating} <span className='text-yellow-400'>&#9734;</span></p>
            
            <section className="flex justify-around">
                <p className="m-2 text-gray-600 font-bold">Discount-{items.discountPercentage} %</p>
                <p className="m-2 text-gray-600 font-bold">{items.warrantyInformation}</p>
            </section>
                    <section className=' p-1 text-neutral-300 bg-gray-700 rounded-2xl flex  justify-around items-center w-full  '> 
                        <Link to={`/products/${items.id}`}>
                        <button className='bg-blue-400 p-2 m-2 text-white   font-semibold text-md h-full w-full rounded-2xl'>View Details / Buy</button>   
                        </Link>
                        <button onClick={()=>del(items.id)} className="bg-red-500 border p-2 rounded-2xl m-2" >Remove from cart <i className="fa-regular fa-trash-can   text-xl m-1"></i></button>
                        
                    </section>
                    
                    <Quants />
                    
                    
                    
                    
        </div>)}

</div>

    </div>)
}
export default Cart;