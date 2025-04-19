import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {addItem} from '../utils/CartSlice'


function ProductCards({fetched}){
    //cart dispatcher reduxx
    const dispatch = useDispatch();
    function Additem(){
        
        dispatch(addItem(fetched));
        alert("item added to cart")
    }




    return(
        // individual Cards component
                <div  className=' border flex flex-col m-3 p-1 rounded-4xl items-center bg-neutral-300 justify-center'>
                    <img src={fetched.images} className='h-1/2  w-2/3 rounded-t-4xl  hover:shadow-2xl mb-7' alt="" />
                    <h3 className='font-bold'>Product Name : {fetched.title}</h3>
                    <p className=' rounded-2xl p-1 m-2 text-[#666] font-semibold text-sm' >Product Tittle:{ fetched.description.slice(0,40)}...</p>
                    {/* <p className='bg-blue-200 block w-full text-center rounded-3xl'>Category:{fetched.category}</p><span className=''>Discount:{fetched.discountPercentage}%</span> */}
                    <section className='m-1 text-neutral-300 bg-emerald-600 p-1 rounded-2xl flex  justify-around items-center w-full sm:flex-wrap sm:flex-col lg:flex-row'> 
                        <p className='bg-blue-300  p-1 m-1 text-center text-sm rounded-2xl font-semibold text-black'>Ratings: {fetched.rating} <i className="fa-solid fa-star-half-stroke   text-yellow-700"></i></p>
                        <Link to={`/products/${fetched.id}`}>
                        <button className='bg-blue-950 hover:bg-blue-700 p-2 m-1 text-md font-semibold h-full w-full rounded-2xl'>View Details / Buy</button>   
                        </Link>
                         <button onClick={Additem} className='m-1 border bg-red-800 w-1/3 rounded-4xl p-1 '>Add to Cart<i className="fa-solid fa-cart-shopping"></i></button>
                    </section>
                    
                            
                </div>
        
    )}
    
export default ProductCards