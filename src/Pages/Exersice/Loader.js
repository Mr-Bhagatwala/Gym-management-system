import React from 'react';

const Loader = () => {
  return (
    <div className="loader" style={loaderStyle}></div>
  );
};

const loaderStyle = {
  width: '50px',
  aspectRatio: '1',
  borderRadius: '50%',
  background: `
    radial-gradient(farthest-side, #ffa516 94%, #0000) top/8px 8px no-repeat,
    conic-gradient(#0000 30%, #ffa516)`,
  WebkitMask: 'radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0)',
  animation: 'l13 1s infinite linear'
};

export default Loader;
