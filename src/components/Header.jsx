

import { useState,useEffect } from 'react';
import { Link ,useSearchParams,useNavigate} from 'react-router-dom';
import Navbar from './Navbar.jsx';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
const navigate=useNavigate();
  const [search,setSearch]=useState("");
  console.log(search)
  let handleSearch=()=>{
    if(search.trim())
        navigate(`/products?search=${encodeURIComponent(search)}`)
      else
        alert("Please Enter a Valid Name of the Product");

        setSearch("");
  }

  return (
    <nav className="bg-orange-300/30 px-4 py-2  flex items-center justify-between flex-wrap relative">
      {/* Logo */}
      <Link to={"/"}>
      <section className=" border-b-4 rounded-full p-5 pt-0 hover:shadow-md  hover:shadow-cyan-400/50 m-1">        
        <img
          src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png"
          alt="Logo"
          className="h-[80px] w-[100px]"
        />
        <h1 className="font-extrabold text-xl">ShoppyGlobe</h1>
        </section>

      </Link>

      {/* Search Bar */}
      <section className=" flex rounded-xl justify-center items-center border-2 w-fit">
        <input
          type="text" onChange={(e)=>setSearch(e.target.value)}
          className="w-[30vw] h-[5vh] rounded-xl bg-green-300 pl-4 rounded-r-none"
          placeholder="Search" value={search}
        />
        <button onClick={handleSearch} className="text-white rounded-l-none bg-gray-800 border-2 h-[5vh] w-1/5 rounded-xl px-4 - flex justify-center items-center">
          <i className="fa-brands fa-searchengin text-xl" />
        </button>
      </section>

     
       <div className="hidden w-screen   md:flex md:flex-col" onClick={()=>setIsOpen(!isOpen)}> {/*  Navigation bar*/}
        <Navbar />
      </div>




      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden  text-black text-2xl "
      >
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`} />
      </button>

      {/* Mobile Navbar */}
      {isOpen && (
        <div className="absolute flex justify-center items-center  top-full left-0 w-full bg-orange-300/80 md:hidden z-50">
          <Navbar />
        </div>
      )}
    </nav>
  );
}

export default Header;
