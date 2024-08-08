import React from 'react';
import styles from './Services.module.css';
import CardServices from '../CardServices/CardServices';

const Services = () => {
  return (
    <>
    <section  className={`relative container mx-auto flex min-h-screen flex-col items-center justify-center p-12  gap-8 ${styles.bgServices}`}>
      <div className={`${styles.bgSection}`}></div>

          <div className={`container flex flex-col`}>
            <h5 className={`sectionName`}><span className={`highlight`}>02 |</span> Services</h5>
            <h3 className={`tittleServices`}>The <span className={`tittleServices2`}>Whole</span> <span className={`tittleServices3`}>Nine Yards</span></h3>
            <p className='text-white max-w-xl py-4'>Argentinian roots, US muscle. Trick Studios (est. 2010) crafts
            Games & Software globally. We combine nearshore ninjas with US devs & producers for a full-service punch (games, art, engineering, you name it!).</p>
          </div>

          <div className='relative container flex flex-col md:flex-row gap-10 '>          
            <CardServices
              content={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.'}
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