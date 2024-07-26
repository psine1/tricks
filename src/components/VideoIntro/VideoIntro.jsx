import React, { forwardRef } from 'react';
import styles from './VideoIntro.module.css';

const VideoIntro = ({  }) => {
  return (
    <>
    <video className={styles.video} autoPlay={true} muted loop>
      <source src={'/videos/header-03.mp4'} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </>
  );
};

export default VideoIntro;

