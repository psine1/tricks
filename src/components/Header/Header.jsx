import React from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import NavBar from '../NavBar/NavBar';
import VideoIntro from '../VideoIntro/VideoIntro';
import MainButton from '../MainButton/MainButton';
import { FaBeer } from "react-icons/fa";

const Header = ({  }) => {
  return (
    <>
    <div className={`max-w-7xl container ${styles.color} flex justify-center content-center`}>
          <NavBar></NavBar>
    </div>          

    <header className={` flex relative ${styles.header}`}>
      <div className={`${styles.bgHeader}`}></div>
      <div className={`${styles.gradientHeader}`}></div>
      <div className={`${styles.wrapHeader} justify-center content-center`}>

        <div className=' gap-2 flex '>
            <div className={ ` w-full  `}>          
              <div className={ `${styles.clipped} items-end	`}>  
                  <div className='flex relative overflow-hidden flex-row content-between p-8 w-full justify-between '>
                      <div className={``}>
                        <p className={`${styles.textHeader} `}>WE GREW UP <br /> PLAYING VIDEOGAMES</p>
                        <h1 className={`${styles.titleHeaderTop}`}><span className={`text-white`}>NOW WE</span></h1>
                        <h1 className={`${styles.titleHeaderBottom}`}>MAKE THEM</h1>
                      </div>
                      <div className='self-end px-14'>
                        <MainButton textContent={`GET STARTED`} buttonColor= "buttonRose1" className={`p-8`}/>                        
                      </div>
                  </div> 
                <VideoIntro />                 
              </div>
            </div>
        </div> 

      </div>
    </header>
    </>
  );
};

export default Header;