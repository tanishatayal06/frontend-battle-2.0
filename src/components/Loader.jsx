import React from 'react';
import loaderVideo from '../assets/loader.mp4';

const Loader = () => (
  <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#111'}}>
    <video src={loaderVideo} autoPlay loop muted width="120" height="120" style={{borderRadius: '50%'}}>
      Sorry, your browser doesn't support embedded videos.
    </video>
  </div>
);

export default Loader; 