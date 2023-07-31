const Navbar = () => {
    return (
        <nav className="flex flex-col items-center bg-gradient-to-r from-teal-500 to-pink-500 sm:flex-row sm:justify-between md:justify-between">
            <div className="title">
            <h1 className="text-2xl p-5 mt-2 text-white ">FreeFoodster</h1>
            </div>

         <div className="flex flex-col  items-center sm:flex-row">
             
             <div className="card m-1  hover:bg-sky-700 hover:text-white p-3 rounded-md cursor-pointer ">
                 <p>About</p>
             
             </div>
             <div className="card m-5 hover:bg-sky-700 p-3  hover:text-white rounded-md cursor-pointer">
                 <p>How it works</p>
             
             </div>
             <div className="card m-5 hover:bg-sky-700 p-3  hover:text-white rounded-md cursor-pointer">
                 <p>Source Code</p>
             
             </div>

         </div>
        </nav>
      );
}
 
export default Navbar;