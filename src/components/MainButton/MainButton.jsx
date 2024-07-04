import React from 'react';
import styles from './MainButton.module.css';

const MainButton = ({textContent, buttonColor = "buttonRose1",}) => {
  return (
    <>
    <button className={`mt-1 mb-1 py-3 ${styles.MainButton} ${styles[buttonColor]}`}>
      {/* Contenido del encabezado */}
      {textContent}
    </button>
    </>
  );
};

export default MainButton;