import React from 'react';
import styles from './CardServices.module.css';
import Image from 'next/image';

const CardServices = ({content, title, imageSrc}) => {
  return (
    <>
    <div className={` relative   ${styles.card} flex w-full sm:h-auto md:h-80 `}>

            <div className={`${styles.content} w-6/12 h-full`} >
              <h1 className={`${styles.titleCard} pr-5`}>{title}</h1>
              <p className={`${styles.textCard} pr-5`}>{content}</p>
              <div className={`${styles.footerCard} w-6/12`}>
                <Image
                  className=''
                  src="/images/more.svg"
                  alt="card-image"
                  width={36}    
                  height={36}             
                />
              </div>
            </div>

              <div className={`${styles.imgRight} w-4/12 h-full`}>             
              </div>

              <div className={`${styles.wrapImage}`}>
                  <Image
                      className={`${styles.imgCard}`}
                          src="/images/hexagonBg.svg"
                          alt="hexagonBg-image"
                          width={300}
                          height={300}                        
                  />

                  <Image
                      className={`${styles.characterImg}`}
                          src={imageSrc}
                          alt="hexagonBg-image"
                          width={448}
                          height={568}
                  />
              </div>                
    </div>

    </>
  );
};

export default CardServices;