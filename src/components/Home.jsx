import {Link,useSearchParams} from'react-router-dom'

function Home() {

  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams)
  // const filterParam = searchParams.get('filter');

  return (
    // display of some section on clicking of which different categories open
    <div className="h-fit  flex-col sm:flex-col  md:flex-col lg:flex-row flex items-center justify-around">
      
      <section className="grid grid-cols-1 grid-rows-1 sm:w-screen md:grid-cols-2 relative justify-center items-center top-1/5 p-4 m-2 gap-2 md:grid-rows-2 bg-gray-100/50 h-fit   ">
      
      <h1 className="text-3xl ">
      Where Your Wishlist Becomes Reality..!
      </h1>
      {/* Link to category */}
      <Link to={'/categories'}>
        <div className="bg-amber-200 rounded-4xl border-2">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUERsvgGvwn7koz-j5g90k0rNHMPSikdwTBg&s"
            className="h-1/2 w-full rounded-t-4xl" alt="picture"
          />
          <p className="p-2"> Buy modern Furniture At Minimal Stress on Your Pocket</p>
        </div>
        </Link>
        <Link to={'/categories'}>
        <div className="border rounded-4xl">
          <img className="rounded-t-4xl h-1/2 w-full"
            src="https://www.agsdevices.com/wp-content/uploads/2024/05/electronic_components_hero_image.jpg"
            alt=" picture"
          />
          <p className="p-2 "> Buy Electronics to Keep you Updated with the Tech World</p>
        </div>
        </Link>
        <h1 className="text-4xl m-2 text-neutral-700 ">From Cart to Heart – We’ve Got It All!</h1>
       
      </section>
      {/* link to products */}
    <Link to={'/products'}>
      <section  className="3/5 bg-gray-400/40 border-2 rounded-4xl p-2 m-2 ">
        <div className="flex justify-center items-center border sm:flex-row">
          <img src="https://i.pinimg.com/736x/94/c2/35/94c2356d7eb2c3dcf07fecf8f1237aa5.jpg" className="w-2/3 overflow-hidden" alt="pic"/>
          <h1 className="text-2xl font-semibold font-mono m-2">Be it Beauty Products or Daily Groceries..You get it here cheap and TOP-NOTCH</h1>
        </div>
        <div className="flex justify-center items-center">
          <div>
          <h1 className="text-2xl text-wrap font-mono">Shop Smart. Live Better.Your One-Stop Online Shop</h1> <hr/>

          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9RRp8J_v5DzFsNhhiM5jCo6tCF-R9IzAZQ&s " className="w-1/2 " alt="pic"/>
          </div>
            
            <img  src="https://splashfragrance.in/wp-content/uploads/2018/11/perfume-1.png" className="w-1/2 object-scale-down " alt="pic"/>

        </div>
      </section>
      </Link>
    </div>
  );
}
export default Home;
