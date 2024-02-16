import React from 'react';

const IconStyle = ({ bottom='0', opacity = '1', type, children, after, color, fontSize, position, display = 'block', left, margin = '0px', top, height = '60px', width = '60px', borderRadius = '50%', zIndex = '1' }) => {
  const iconStyle = {
    background: '#333',
    borderRadius: '50%',
    fontSize,
    color,
    position,
    display: display,
    width,
    height,
    textAlign: 'center',
    lineHeight: '80px',
    left,
    top,
    bottom: bottom,
    margin: margin,
    borderRadius,
    opacity: opacity
  };

  const iconBeforeStyle = {
    content: "''",
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    borderRadius,
    background: color,
    zIndex: '-1',
    transform: 'scale(1.1)',
    boxShadow: `0 0 15px ${color}, 0 0 20px #000000`,
    color,
    opacity: opacity
  };

  return (
    <div style={iconStyle}>
      <div style={iconBeforeStyle}>
        {children}
      </div>
      {after}
    </div>
  );
};

export default IconStyle;
