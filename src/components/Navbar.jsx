import {Link } from 'react-router-dom'
// import {length} from '../utils/CartSlice'
import {useSelector} from 'react-redux'


function Navbar(){

    
    let Clength=useSelector((state)=>state.cart.Cart.length);

    const NavList=[
        {
            ListName:"HOME",
            Link:"/"
        },
        {
            ListName:"CATEGORIES",
            Link:"/categories"
        },
        {
            ListName:"PRODUCTS",
            Link:"/products"
        },
        
        {
            ListName: "MyCart",
            Link:"/cart",
            icon: <i className ="fa-solid fa-cart-shopping  "></i>

        }
        
        
    ];

    

return(
    <ul className="flex flex-col md:flex-row bg-gray-800/50 w-full justify-center items-center">
        {NavList.map((item,index)=>     //navbar Mapping..
                <Link to={item.Link} key={item.ListName} >
                    
                <li key={index} className="hover:text-neutral-800 font-bold text-xl p-2 m-5  text-white hover:bg-blue-300 hover:rounded-xl hover:border shadow-lg hover:shadow-cyan-500  duration-500">
                <h1 className=" p-2 rounded-4xl">
                        {NavList[index].ListName} 
                        {item.icon}
                        <span className={ `${item.ListName=="MyCart"?`text-sm bg-red-500 text-white p-1 rounded-full`:""}`}>{item.ListName=="MyCart"?Clength:""}</span>
                        </h1>
                    
                </li>
                </Link>
            )}
    </ul>

)

}
export default Navbar;