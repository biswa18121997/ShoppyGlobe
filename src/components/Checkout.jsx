import {useParams} from 'react-router-dom'
import useFetch from '../utils/useFetch'
import LoadingScreen from './LoadingScreen'
import {useState} from 'react'
function Checkout(){
 
  let [add,setAdd]=useState();
  const [visa, setVisa] = useState(false);
  const [debit,setDebit]=useState(false);
  const [net,setNet]=useState(false);
  const [upi,setUpi] =useState(false);
  let params=useParams();
  const handleupi=()=>{
    setUpi(!upi);
  }

  const handlevisa = () => {
    setVisa(!visa);
    console.log("clicked",visa)
  };
  const handlenet=()=>{
    setNet(!net);
  };
  const handledebit=()=>{
    setDebit(!debit);
  };
  
  console.log(params.id);
  let {data,loading,error}=useFetch(`https://dummyjson.com/products/${params.id}`);
  console.log(data)

if(loading) 
    return <LoadingScreen />




    return (<>
      <h1 className="bg-emerald-600 text-center text-2xl m-2 font-bold">  Checkout for- {data.title} </h1>
        <div className="flex flex-col lg:flex-row gap-4 p-6 bg-gray-100/50 min-h-screen">

          <div className="flex-1 space-y-6">
            {/* delivery data /address */}
            <div className="bg-white p-4 rounded shadow-md">
              <h2 className="text-xl font-bold mb-2">Enter a delivery address</h2>
              <div className="space-y-2 flex justify-center">
                
                  
                    
                    <div className="w-2/3">
                    <input onChange={(e)=>(add=e.target.value)} name="address" className="mr-2 w-full h-[200px] border"/> <br/>
                    <button className='bg-yellow-500 p-2 m-2 rounded-2xl text-white text-xl' onClick={()=>setAdd(add)}>Save Address</button>
                    </div>
                    <img src={data.images} className="w-1/3" />
              </div>
            </div>
    
            {/* Payment Method s only*/}
            <div className="bg-white p-4 rounded shadow-md">
              <h2 className="text-xl font-bold mb-2">Choose a payment method</h2>
              <div className="space-y-2">
                {/* {['card', 'upi', 'netbanking', 'cod'].map((method) => ( */}
                  <label className="block p-2 border rounded cursor-pointer hover:bg-blue-50"  >
                    <input type="radio" name="payment" onClick={handlevisa} className="mr-2" />
                    <i className="fa-brands fa-cc-visa text-3xl m-2"></i><span>Visa Card</span>
                    <input className={`border ${visa ? 'block' : 'hidden'} rounded-md m-2 w-1/2`} placeholder="Enter card details"/>
                    
                  </label>
                  <label className="block p-2 border rounded cursor-pointer hover:bg-blue-50" >
                    <input type="radio"  name="payment" onClick={handlenet} className="mr-2"/>
                    <i className="fa-solid fa-building-columns text-3xl m-2"></i><i className="fa-solid fa-globe text-3xl m-2"></i><span> Internet Banking </span>
                    <input className={`w-1/2 border ${net ? 'block' : 'hidden'} rounded-md m-2 w-1/2`} placeholder="Enter Internet Banking Details" />
                  </label>

                  <label className="block p-2 border rounded cursor-pointer hover:bg-blue-50" >
                    <input type="radio" name="payment" onClick={handledebit}  className="mr-2" />
                    <i className="fa-solid fa-credit-card text-3xl m-2"></i> <span> Credit Card / Debit Cards</span>
                    <input className={`w-1/2 border ${debit ? 'block' : 'hidden'} rounded-md m-2 `} placeholder="Enter Debit Card Details" />
                  </label>

                  <label
                    
                    className="block p-2 border rounded cursor-pointer hover:bg-blue-50"
                  >
                    <input type="radio" name="payment" onClick={handleupi} className="mr-2" />
                    <i className="fa-brands fa-google-pay text-3xl m-2"></i><span>UPI / Phonepe / GooglePay</span>
                    <input className={`border ${upi? 'block': 'hidden'} rounded-md m-2  w-2/5`} />
                  </label>
                  <label className="block p-2 border rounded cursor-pointer hover:bg-blue-50" >
                    <input type="radio" name="paymen" className="mr-2"/>
                    <i className="fa-regular fa-money-bill-1 text-3xl m-2"></i>
                   <span>Cash-on-Delivery</span>                  
                  </label>
                {/* ))} */}
              </div>
            </div>
          </div>  
          {/* Right Section - Order Summary and addidtional order details*/}
          <div className="w-full lg:w-[35%] bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className=' font-bold'>Items Name : <br/>  <span>{data.title}  ||  {data.description}</span></span>
              </li>
              <hr/>
              <li className="flex flex-wrap font-semibold justify-between">
                <span>Shipping Address : </span>
                <span className="text-wrap"> {add}</span>
              </li>
              <li className="flex font-semibold justify-between">
                <span>Shipping Time :</span>
                <span> {data.shippingInformation}</span>
              </li>
              <hr/>
              <li className="flex font-semibold justify-between">
                <span>Tax :</span>
                <span>20%</span>
              </li>
              <li className="flex font-semibold justify-between">
                <span>Price of Product :</span>
                <span>{data.price}</span>
              </li>
              <li className="flex font-semibold justify-between">
                <span>Delivery Charges :</span>
                <span>{10}%</span>
              </li>
              <hr />
              <li className="flex  justify-between font-bold text-2xl border-t pt-2">
                <span>Total</span>
                <span>{data.price + data.discountPercentage + 50}</span>
              </li>
            </ul>
            <button onClick={()=>{alert(`ordered sucessfully: ${data.title}`)}} className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 mt-6 rounded">
              Place Your Order
            </button>
          </div>
        </div>
        </>  );
    };
    
export default Checkout