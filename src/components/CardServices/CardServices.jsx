import React from 'react';
import styles from './CardServices.module.css';
import Image from 'next/image';

const CardServices = () => {
  return (
    <>
    <div className={`${styles.wrapCard} flex`}>
        <div className='py-8 px-8'>
            <h3 className={`${styles.titleCard}`}>Work for Hire</h3>
            <p className={`${styles.textCard}`}>Lorem ipsum dolor sit amet consectetur. Neque mauris massa mauris.</p>
        </div>


        <div className={styles.rightSide}>
          <div className={styles.imageContainer}>

            <div className={`absolute ${styles.positionPx}`}>
              <Image src="/images/mask.png" width={256} height={280} />
            </div>
            <div className={`${styles.imageWrapper}`}>
              <Image src="/images/imgtestCard.png" width={256} height={280} alt="Image 1" />
            </div>
          </div>
        </div>



    </div>
    </>
  );
};

export default CardServices;