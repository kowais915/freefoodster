import {useState } from 'react';

const Navbar = () => {
    const [clicked, setClicked] = useState(false)

    const handleClick = ()=>{

        return setClicked((old) => !old)

    }
    return (
        <nav className="flex flex-row justify-between p-2  items-center bg-gradient-to-r  from-teal-500 to-pink-500 sm:flex-row sm:justify-between md:justify-between">
            <div className="flex flex-row justify-between ">


                <div className="">
                
                  <h1 className="text-2xl p-5 mt-2 text-white  ">FreeFoodster</h1>

                </div>
           
               

            </div>

         <div className="flex flex-col   items-center hidden flex-col md:flex md:justify-end sm:flex-row  sm:flex-row md:visible ml-12">
             
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


         <div className='flex flex-col items-center'>
             {/* // * svg icon */}
             <div className="md:hidden "  onClick={handleClick}>
             
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
             
            </div>

            { clicked && 
             <div className="flex flex-col md:hidden  items-center  flex-col md:flex  sm:flex-row  sm:flex-row md:visible">
             
                 <div className="card   hover:bg-sky-700 hover:text-white p-3 rounded-md cursor-pointer ">
                     <p>About</p>
             
                 </div>
                 <div className="card  hover:bg-sky-700 p-3  hover:text-white rounded-md cursor-pointer">
                     <p>How it works</p>
             
                 </div>
                 <div className="card  hover:bg-sky-700 p-3  hover:text-white rounded-md cursor-pointer">
                     <p>Source Code</p>
             
                 </div>
             
             </div>

            }
         </div>


       

        

        </nav>
      );
}
 
export default Navbar;