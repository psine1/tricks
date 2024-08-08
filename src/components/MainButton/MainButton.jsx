import React from 'react';
import styles from './MainButton.module.css';
import SvgStrokeButton from '../SvgStrokeButton/SvgStrokeButton';

const MainButton = ({textContent, buttonColor = "buttonRose1",}) => {
  return (
    <>
    <div className='relative flex justify-end'>
      <button className={`relative  py-3 ${styles.mainButton} ${styles[buttonColor]}`}>
        {/* Contenido del encabezado */}
        {textContent}
      </button>
      <div className={` absolute ${styles.wrapStroke}`}>
          <div className={`${styles.wrapStroke}`}>
            <SvgStrokeButton  />
            </div>
        </div>
    </div>
    </>
  );
};

export default MainButton;