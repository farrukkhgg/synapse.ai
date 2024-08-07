import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const cursorOutline = document.querySelector('.cursor-outline');
    if (cursorOutline) {
      cursorOutline.animate(
        {
          left: `${pos.x}px`,
          top: `${pos.y}px`,
        },
        { duration: 500, fill: 'both' }
      );
    }
  }, [pos]);

  return (
    <>
      <div
        className="cursor-dot fixed top-0 left-0 w-2 h-2 bg-green-500 transform -translate-x-1/2 -translate-y-1/2 rounded-full z-10 pointer-events-none"
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      ></div>
      <div className="cursor-outline fixed top-0 left-0 w-8 h-8 border-2 border-green-500 transform -translate-x-1/2 -translate-y-1/2 rounded-full z-10 pointer-events-none"></div>
    </>
  );
};

export default Cursor;
