// components/Flair.js
import { useEffect } from "react";
import { gsap } from "gsap";
import styles from "./Flair.module.css"; // Asegúrate de importar los estilos CSS

const Flair = () => {
  useEffect(() => {
    gsap.set(".flair", { xPercent: -50, yPercent: -50 });

    let xTo = gsap.quickTo(".flair", "x", { duration: 0.6, ease: "power3" }),
        yTo = gsap.quickTo(".flair", "y", { duration: 0.6, ease: "power3" });

    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className={`${styles.flair} flair flair--3`}></div>;
};

export default Flair;