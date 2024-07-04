import React, { forwardRef } from 'react';
import styles from './VideoIntro.module.css';
import PropTypes from 'prop-types';

const VideoIntro = forwardRef(({ videoSrc, autoPlay = true  }, ref) => (
    <video className={styles.video} autoPlay={true} muted loop>
      <source src={'/videos/intro.webm'} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
));

VideoIntro.propTypes = {
    videoSrc: PropTypes.string.isRequired,
  };

export default VideoIntro;

