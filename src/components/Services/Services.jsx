import React from 'react';
import styles from './Services.module.css';
import CardServices from '../CardServices/CardServices';

const Services = () => {
  return (
    <>
    <section  className={`flex min-h-screen flex-col items-center justify-around p-24 bg-gradient-to-tr from-[#02D0D9] via-purple-500 to-[#4D3589] ${styles.bgServices}`}>
        <div className={`max-w-7xl flex flex-col container`}>
          <h3 className={`${styles.tittleServices}`}>The <b>Whole Nine Yards</b></h3>
          <p className='text-white max-w-xl'>Argentinian roots, US muscle. Trick Studios (est. 2010) crafts
          Games & Software globally. We combine nearshore ninjas with US devs & producers for a full-service punch (games, art, engineering, you name it!).</p>
        </div>
        <div className='max-w-7xl flex justify-center	items-center gap-10 '>
          <CardServices />
          <CardServices />
        </div>
    </section>
    </>
  );
};

export default Services;