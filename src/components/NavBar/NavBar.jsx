'use Client'
import Link from 'next/link';
import { useState } from 'react';
import Image from "next/image";
import styles from "./NavBar.module.css";
import MainButton from '../MainButton/MainButton';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`pt-8 ${styles.navFixed}`}>      
        <div className={`flex h-16 `}>
          <div className="flex items-center justify-between grow">
              <div className={`flex flex-shrink-0 w-2/12 items-center justify-center ${styles.wrapLogoBlend}`}>
                  <Image      
                      className={`${styles.logoBlend}`}          
                      src="/images/logo-white.svg"
                      width={154}
                      height={200}
                      alt="logo Tricks"
                    />  
              </div>

              <div className='W-10/12 px-4 sm:px-6 lg:px-4'>
                        <div className={` z-20 hidden  md:flex space-x-8 ${styles.navBarRight}`}>
                        <Link href="/" className="text-white hover:text-fuchsia-300 px-2 py-4 rounded-md text-sm font-medium">
                            Services
                        </Link>
                        <Link href="/about" className="text-white hover:text-fuchsia-300 px-2 py-4 rounded-md text-sm font-medium">
                            About Us
                        </Link>
                        <Link href="/contact" className="text-white hover:text-fuchsia-300 px-2 py-4 rounded-md text-sm font-medium">
                            Team
                        </Link>
                        <Link href="/contact" className="text-white hover:text-fuchsia-300 px-2 py-4 rounded-md text-sm font-medium">
                            Carrers
                        </Link>
                        <Link href="/contact" className="text-white hover:text-fuchsia-300 px-2 py-4 rounded-md text-sm font-medium">
                            Work with us
                        </Link>      
                        <MainButton textContent={'Send Message'} buttonColor = "buttonRose1" />
                        </div>
                        
            </div>

          </div>

          <div className="-mr-2 flex md:hidden">
            <button 
              onClick={toggleMenu} 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

        </div>

    </nav>
  );
};

export default NavBar;