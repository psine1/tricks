import React, { forwardRef } from 'react';
import styles from './VideoIntro.module.css';

const VideoIntro = ({  }) => {
  return (
    <>
    <video className={styles.video} autoPlay={true} muted loop>
      <source src={'/videos/intro.webm'} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </>
  );
};

export default VideoIntro;

