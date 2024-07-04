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
          <NavBar></NavBar>

    <header className={`${styles.header}`}>
      <div className={`${styles.wrapHeader}`}>
        <div className=' gap-2 flex'>
            <div className={ `flex flex-col justify-between items-center basis-2/12 `}> 
                <div></div>
                <div className='self-start	'>  
                  <p className={`${styles.textLeft}`}>
                    TIME <br /> TO PLAY
                  </p>          
                </div>
            </div>

            <div className={ `basis-10/12	   `}>          
              <div className={ `${styles.clipped} items-end	`}>  
                  <div className='flex relative overflow-hidden flex-row content-between p-8 w-full justify-between '>
                      <div className={``}>
                        <p className={`${styles.textHeader} `}>WE GREW UP PLAYING VIDEOGAMES</p>
                        <h1 className={`${styles.titleHeaderTop}`}><span className={`text-white`}>NOW WE</span></h1>
                        <h1 className={`${styles.titleHeaderBottom}`}>MAKE THEM</h1>
                      </div>
                      <div className='self-end px-10'>
                        <MainButton textContent={`Get Started`} buttonColor= "buttonWhite" className={`p-4`}/>                        
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