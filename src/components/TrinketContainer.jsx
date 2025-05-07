import { useState, useEffect, useRef } from 'react';

export default function TrinketCollection({ icons }) {
  const [positions, setPositions] = useState([]);
  const containerRef = useRef(null);
  
  const ICON_SIZE = 60;
  // Adjust this factor to control spacing between icons
  // Higher value = more space between icons (0.6-0.7 is a good starting point)
  const SPACING_FACTOR = 0.65;
  
  useEffect(() => {
    if (containerRef.current && icons.length > 0) {
      arrangeInCircle();
    }
    window.addEventListener('resize', arrangeInCircle);
    return () => window.removeEventListener('resize', arrangeInCircle);
  }, [icons]);
  
  const arrangeInCircle = () => {
    const container = containerRef.current;
    if (!container) return;
    
    const width = container.clientWidth;
    const height = container.clientHeight;
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Calculate radius to position icons in a perfect circle
    // Use a smaller radius than container to ensure icons stay within bounds
    const radius = Math.min(width, height) / 2 - ICON_SIZE;
    
    const newPositions = icons.map((_, index) => {
      // Calculate position on the circle
      // Multiply by SPACING_FACTOR to create space between icons
      const angle = (index / (icons.length * SPACING_FACTOR)) * 2 * Math.PI;
      const x = centerX + radius * Math.cos(angle) - ICON_SIZE / 2;
      const y = centerY + radius * Math.sin(angle) - ICON_SIZE / 2;
      
      return { left: x, top: y };
    });
    
    setPositions(newPositions);
  };
  
  return (
    <div
      ref={containerRef}
      className="trinket-container"
      style={{
        position: 'relative',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        border: '2px solid #aaa',
        margin: '0 auto',
        overflow: 'hidden',
        background: '#fdfdfd',
      }}
    >
      {icons.map((icon, index) => (
        <div
          key={index}
          className="trinket-icon"
          style={{
            position: 'absolute',
            left: positions[index]?.left || 0,
            top: positions[index]?.top || 0,
            width: ICON_SIZE,
            height: ICON_SIZE,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            backgroundColor: '#f0f0f0',
            boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
            transition: 'all 0.5s ease',
            cursor: 'pointer',
          }}
        >
          {icon}
        </div>
      ))}
    </div>
  );
}