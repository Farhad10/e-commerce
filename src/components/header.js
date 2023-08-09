"use client";
import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import DarkModeToggle from './DarkModeToggle';
import Button from './Button';


// import ToolTip from './ToolTip';
const header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [activeLink, setActiveLink] = useState(0);

   const handleLinkClick = (linkIndex) => {
     setActiveLink(linkIndex);
   };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header>
    <nav className="bg-white bg-cover bg-center backdrop-filter backdrop-blur-sm z-50 fixed top-0 w-screen bg-opacity-50 dark:bg-opacity-50  border-gray-800 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link href="/" className={`flex items-center
              ${
                activeLink === 1 ? '' : ''
              }
              `}
              onClick={() => handleLinkClick(1)}
            >
                <Image width={40} height={40} src="/images/logo10.webp" className="mr-3 rounded-lg" alt="PolyPlex Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white hidden lg:block">Shopy</span>
            </Link>
           
            <div className="flex items-center lg:order-2">
            <div className='mx-6'>
            {/* <ToolTip id="exampleTooltip" text="This is a tooltip"> */} 
            
       <DarkModeToggle />     
{/* </ToolTip> */}
            </div>
            <div className='mx-4'>
          <Link href="/login">
            <Button text="Log In" /></Link>
            </div>
          
            
                {/* <Link href="#" className="text-white bg-[#c60000] text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-[#c60000] text-white focus:outline-none dark:focus:ring-blue-800">Log in</Link> */}
                {/* <Link href="#" className="text-white bg-[#c60000] text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-[#c60000] text-white focus:outline-none dark:focus:ring-blue-800">Get started</Link> */}
                <button onClick={toggleMenu} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                  
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
       <ul className=" flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
           <li className=' hover:scale-110 transition transform duration-500'>
               <Link href="/" className={` py-2 pr-4 pl-3   border-b border-gray-100 lg:px-4 lg:py-2 rounded-lg hover:bg-[#c60000]  lg:border-0 hover:text-white
                 ${
                    activeLink === 1 ? 'bg-[#c60000] text-white ' : ''
                  }
                  `}
                  onClick={() => handleLinkClick(1)}
                  >Home</Link>
           </li>
         
           <li className=' hover:scale-110 transition transform duration-500'>
               <Link href="/products" className={` py-2 pr-4 pl-3   border-b border-gray-100 lg:px-4 lg:py-2 rounded-lg hover:bg-[#c60000]  lg:border-0 hover:text-white
                ${
                    activeLink === 3 ? 'bg-[#c60000] text-white ' : ''
                  }
                  `}
                  onClick={() => handleLinkClick(3)}
               >Products</Link>
           </li>
        
           <li className=' hover:scale-110 transition transform duration-500'>
               <Link href="/contact" className={` py-2 pr-4 pl-3   border-b border-gray-100 lg:px-4 lg:py-2 rounded-lg hover:bg-[#c60000]  lg:border-0 hover:text-white
                ${
                    activeLink === 6 ? 'bg-[#c60000] text-white ' : ''
                  }
                  `}
                  onClick={() => handleLinkClick(6)}
               >Contact</Link>
           </li>
       </ul>
   </div>
            {isMenuOpen && (
       <div className="lg:hidden z-50 absolute top-[100%] left-0 duration-500 transition-all bg-white dark:bg-gray-800 justify-between items-center w-full  lg:w-auto lg:order-1" id="mobile-menu-2">
       <ul className=" flex flex-col mt-4 text-center font-medium lg:flex-row lg:space-x-8 lg:mt-0">
           <li>
               <Link href="/" className={`block py-2 pr-4 pl-3 hover:scale-110 transition transform duration-500     border-b border-gray-100 lg:px-4 lg:py-2 rounded-lg hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 dark: lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700
                 ${
                    activeLink === 1 ? ' text-blue-800' : ''
                  }
                  `}
                  onClick={() => handleLinkClick(1)}
               >Home</Link>
           </li>
      
           <li>
               <Link href="/produ" className={`block py-2 pr-4 pl-3 hover:scale-110 transition transform duration-500     border-b border-gray-100 lg:px-4 lg:py-2 rounded-lg hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 dark: lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700
                ${
                    activeLink === 3 ? ' text-blue-800' : ''
                  }
                  `}
                  onClick={() => handleLinkClick(3)}
               >Products</Link>
           </li>
          
       
      
           <li>
               <Link href="/contact" className={`block py-2 pr-4 pl-3 hover:scale-110 transition transform duration-500     border-b border-gray-100 lg:px-4 lg:py-2 rounded-lg hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 dark: lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700
                ${
                    activeLink === 6 ? ' text-blue-800' : ''
                  }
                  `}
                  onClick={() => handleLinkClick(6)}
               >Contact</Link>
           </li>
       </ul>
       
   </div>
   
      )}
        </div>
    </nav>
</header>
  )
}

export default header
