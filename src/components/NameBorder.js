import React from 'react';

const NameBorder = ({ display='block',opacity='1',children, after, color, fontSize, position, left, right, top, height = '25px', width = '80px', borderRadius = '50%', zIndex = '1', float }) => {
  const iconStyle = {
    background: color,
    borderRadius: '50%',
    fontSize,
    color: '#000',
    position,
    display: display,
    width,
    height,
    textAlign: 'left',
    paddingLeft: '20px',
    lineHeight: '78px',
    left: left,
    top: top,
    borderRadius,
    fontWeight: 'bold',
    right:right,
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

export default NameBorder;
