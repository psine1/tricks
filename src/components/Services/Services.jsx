import React from 'react';
import styles from './Services.module.css';
import CardServices from '../CardServices/CardServices';

const Services = () => {
  return (
    <>
    <section  className={`relative flex min-h-screen flex-col items-center justify-around p-24 ${styles.bgServices}`}>
      <div className={`${styles.bgSection}`}></div>

          <div className={`max-w-7xl flex flex-col container`}>
            <h3 className={`${styles.tittleServices}`}>The <b>Whole Nine Yards</b></h3>
            <p className='text-white max-w-xl'>Argentinian roots, US muscle. Trick Studios (est. 2010) crafts
            Games & Software globally. We combine nearshore ninjas with US devs & producers for a full-service punch (games, art, engineering, you name it!).</p>
          </div>

          <div className='relative max-w-7xl flex flex-col md:flex-row gap-5'>          
            <CardServices
              content={'A continuación te muestro cómo podrías crear la misma card en un proyecto de Next.js. Supongamos que ya tienes un proyecto de Next.js'}
              title={'Work for hire'}
              footer={'pie de pag'}
              imageSrc={'/images/imgtestCard.png'}
              style={{ top: `50%` }}
            />
            <CardServices
              content={'Argentinian roots, US muscle. Trick Studios (est. 2010) crafts Games & Software globally. Ninjas We combine nearshore ninjas'}
              title={'Co Development'}
              footer={'pie de pag'}
              imageSrc={'/images/imgCard2.png'}
              
            />            
          </div>        
    </section>
    </>
  );
};

export default Services;