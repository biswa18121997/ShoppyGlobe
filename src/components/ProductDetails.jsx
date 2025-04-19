import useFetch from '../utils/useFetch'
import {useParams,Link} from 'react-router-dom'
import LoadingScreen from './LoadingScreen';


function ProductDetails(){

let params=useParams();
console.log(params.id);

let {data,loading,error}=useFetch(`https://dummyjson.com/products/${params.id}`);

if(loading) 
    return <LoadingScreen />





    return(<div className="flex flex-col md:flex-col lg:flex-row items-center bg-gray-400/50 border-2 ">
        
        
            <img src={data.images} className="lg:w-1/2 w-full h-full p-2 m-2 bg-blue-300 md-" />
            <div className="border-2 p-2 m-4 bg-white flex flex-col w-full   overflow-y-scroll h-screen pb-56">
                <section>
                    {/*  very detailed description of products  */}
                    <h1 className="text-2xl font-mono m-2">{data?.description}</h1> <hr/>
                    <h2 className="text-lg text-black font-bold">Rating-{data?.rating} <i className="fa-regular fa-star-half-stroke text-yellow-500"></i></h2>

                    <h1 className="text-xl text-neutral-600 font-bold">Name of the Product : {data?.title}</h1>
                    <h1 className="m-2 flex justify-between"><span className="text-xl text-neutral-600 font-bold">Brand :{data?.brand}</span> <span className='text-xl text-neutral-600 font-bold'>Category : {data?.category}</span></h1>
                    <hr />
                    <h1 className="font-bold text-xl underline underline-offset-8 text-blue-800 m-1 text-center">Dimensions / Weights & Measures:    </h1>
                    <section className="grid grid-cols-2 grid-rows-2 bg-gray-500 rounded-2xl p-2 m-2">
                        
                        <h2 className=" p-1 text-white font-bold">Height-{data?.dimensions?.height}</h2>
                        <h2 className=" p-1 text-white font-bold">Depth - {data?.dimensions?.depth}</h2>
                        <h2 className=" p-1 text-white font-bold">Width - {data?.dimensions?.width}</h2>
                        <h2 className=" p-1 text-white font-bold">Weight - {data?.weight}</h2>
                    </section>
                    <hr/> 
                    <h2 className='text-lg font-semibold m-1 p-1'>Minimum Order Quantity (MOQ) -{data?.minimumOrderQuantity}</h2>
                    <h2 className='text-lg font-semibold m-1 p-1'>Return Policy - {data?.returnPolicy}</h2>
                    <h2 className='text-lg font-semibold m-1 p-1'>Warranty Information - {data?.warrantyInformation}</h2>
                    <h2 className='text-lg font-semibold m-1 p-1'>Stocks left - {data?.stock }</h2>
                    <h2 className='text-lg font-semibold m-1 p-1'>Shipping Details - {data?.shippingInformation}</h2>

                    {/* horizontally scrollable review section */}
                    <h1 className='text-center font-bold text-xl underline underline-offset-8 text-blue-800 m-2'>Reviews & Opinions:-</h1>
                    <div className='flex overflow-x-scroll bg-cyan-100 w-full border-t-2 border-b-2'>{data?.reviews?.map((items)=>(<div key={items.reviewerEmail} className='border bg-amber-50/50 rounded-2xl flex h-fit flex-col max-w-full text-nowrap w-fit  flex-nowrap p-4 m-4 '> 
                                                            <p className='text-xl mt-0'>@User- {items.reviewerName}</p>
                                                            <p className='text-sm text-neutral-600'>E-mail1@-{items.reviewerEmail}</p>
                                                            <p className='text-lg font-semibold'>Ratings- {items.rating} <i className="fa-regular fa-star-half-stroke text-yellow-500"></i></p>
                                                            comment :
                                                            <p className=' p-5 border-2 rounded-4xl m-1'><br/> <span >{items.comment}</span></p>
                                                            <p>{items?.data?.slice(0,11)}</p>
                                                        </div>))}
                    
                    </div>
                </section>
                {/* Checkout button  */}
            <Link to={`/checkout/${data?.id}`}>
                <button className='border bg-amber-700 p-2 m-2 relative left-1/4 hover:bg-amber-500 font-extrabold text-2xl rounded-2xl text-white hover:text-black duration-300 w-1/2'> BUY / CHECKOUT</button>
                </Link>

            </div>

            
        



    </div>)
}

export default ProductDetails