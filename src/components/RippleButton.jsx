import React, { useRef } from 'react';
import '../styles/RippleButton.css';

const RippleButton = ({ children, className = '', ...props }) => {
  const btnRef = useRef(null);

  const createRipple = (event) => {
    const button = btnRef.current;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add('ripple');
    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
      ripple.remove();
    }
    button.appendChild(circle);
  };

  return (
    <button
      ref={btnRef}
      className={`ripple-btn ${className}`}
      onClick={createRipple}
      {...props}
    >
      {children}
    </button>
  );
};

export default RippleButton; 