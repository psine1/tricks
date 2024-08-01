import styles from './SvgStrokeButton.module.css';

const SvgStrokeButton = (props) => (
  <svg
  className={`${styles.svgStyles}`}
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 178 42"  
    preserveAspectRatio="none" // Permite que el SVG pierda sus proporciones
    xmlSpace="preserve"
    clipPathUnits="objectBoundingBox"
    {...props}
  >
    <path
      className={`${styles.stroke}`}
      d="M2,41.2c-0.7,0-1.2-0.6-1.2-1.2V26.6c0-0.1,0-0.4,0-0.4s0-0.1,0-0.2V12.6c0-1.9,0.7-3.7,2.1-5.1l4.5-4.6
		c1.4-1.4,3.2-2.2,5.2-2.2H176c0.7,0,1.2,0.6,1.2,1.2v13c0,0.2,0,0.4,0,0.6l0,0.1l0,0.1c0,0.1,0,0.1,0,0.2v13c0,1.9-0.7,3.7-2.1,5.1
		l-4.9,5c-1.4,1.4-3.2,2.2-5.2,2.2H2z"
    />
  </svg>
);
export default SvgStrokeButton;