import { useState, useRef } from 'react';
import TrinketModal from '../components/TrinketModal';
import Trinket from '../components/Trinket';
import Typewriter from 'typewriter-effect';

import {
  TV, 
  Airpods, 
  Bao, 
  Coffee, 
  Files, 
  Paintbrushes, 
  Bag, 
  PaperBag, 
  Camera
} from '../assets/trinket';

export default function About() {
  const [selectedTrinket, setSelectedTrinket] = useState(null);
  const [hoveredTrinket, setHoveredTrinket] = useState(null);
  const [page, setPage] = useState('intro');//options: intro, bag_play
  const containerRef = useRef(null);
  
  // Define the icon size
  const ICON_SIZE = 180;
  
  // Define the trinkets with predefined positions based on "What's in my bag?" layout
  const trinkets = [
    {
      id: 1,
      image: Coffee, // Top left
      description: "i'm a huge cafe lover and i'm always looking to explore new places in new cities :)",
      position: { x: "30%", y: "20%" }
    },
    {
      id: 2,
      image: Bao, // Top center
      description: "you can find me eating dim sum with my family on sundays! ",
      position: { x: "50%", y: "20%" }
    },
    {
      id: 3,
      image: Camera, // Top right
      description: "i'm a huge fan of photography and i'll be snapping tons of photos on vacations <3",
      position: { x: "70%", y: "18%" }
    },
    {
      id: 4,
      image: PaperBag, // Middle left
      description: "I'm the event lead for UW/UX, Waterloo's largest UI/UX community, and a Software Developer for UW Blueprint - building tech for non profits.",
      position: { x: "20%", y: "45%" }
    },
    {
      id: 5,
      image: Airpods, // Middle right
      description: "some of my current favourite artists include frank ocean, boy pablo and matt maltese! ",
      position: { x: "77%", y: "48%" }
    },
    {
      id: 6,
      image: Files, // Bottom left
      description: "i'm currently a 2A systems design engineering student at the university of waterloo!",
      position: { x: "20%", y: "70%" }
    },
    {
      id: 7,
      image: Bag, // Bottom center-left
      description: "My past internships include Software Engineering at Sun Life's GenAI team, data engineering for TTC/Metrolinx projects at Frontop Engineering! ",
      position: { x: "40%", y: "75%" }
    },
    {
      id: 8,
      image: Paintbrushes, // Bottom center-right
      description: "i'm always looking for ways to blend creativity, art and design with tech!",
      position: { x: "60%", y: "75%" }
    },
    {
      id: 9,
      image: TV, // Bottom right
      description: "some of my current favourite movies are pride and prejudice and into the spiderverse!",
      position: { x: "77%", y: "75%" }
    }
  ];

  const openModal = (trinket) => {
    setSelectedTrinket(trinket);
  };

  const closeModal = () => {
    setSelectedTrinket(null);
  };

  return (
    <div className="w-full text-center">
      <div
        ref={containerRef}
        className="relative h-[500px] w-[90%] mx-auto"
      >
        {/* Central Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center hover:scale-125 transition-all duration-500">
          <h2 className="text-3xl font-serif">What's in</h2>
          <h2 className="text-3xl font-serif">my bag?</h2>
        </div>
        
        {/* Trinkets */}
        {trinkets.map((trinket) => (
          <div
            key={trinket.id}
            className="absolute transition-all duration-800 hover:scale-125 cursor-pointer"
            style={{
              // Position based on the predefined coordinates using percentage
              left: trinket.position.x,
              top: trinket.position.y,
              width: `${ICON_SIZE}px`,
              height: `${ICON_SIZE}px`,
              transform: 'translate(-50%, -50%)' // Center the element on its position
            }}
            onClick={() => openModal(trinket)}
            onMouseEnter={() => setHoveredTrinket(trinket)}
            onMouseLeave={() => setHoveredTrinket(null)}
          >
            <Trinket
              image={trinket.image}
              description={trinket.description}
            />
            
            {/* Hover Tooltip */}
            {hoveredTrinket && hoveredTrinket.id === trinket.id && (
              <div className="absolute z-10 bg-white border border-gray-300 rounded-lg shadow-lg p-3 max-w-xs min-w-48 text-sm text-gray-800 pointer-events-none transform -translate-x-1/2 -translate-y-full -mt-2 left-1/2 top-0">
                <div className="font-medium mb-1 text-center">Preview:</div>
                <div className="text-xs text-center leading-relaxed">
                  {trinket.description}
                </div>
                {/* Small arrow pointing down */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-300"></div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="text-xs text-gray-500">
          <Typewriter
        onInit={(typewriter) => {
            typewriter
            .typeString("click the objects to get to know me!")
            .callFunction(() => {
                // Use requestAnimationFrame for smoother cursor removal
                requestAnimationFrame(() => {
                const cursor = document.querySelector('.Typewriter__cursor');
                if (cursor) {
                    cursor.style.transition = 'opacity 0.3s ease';
                    cursor.style.opacity = '0';
                }
                });
            })
            .start();
        }}
        options={{
            delay: 50,
            loop: false,
            cursor: '|',
        }}
        />
      </div>
     

   
      
      {selectedTrinket && (
        <TrinketModal
          trinket={selectedTrinket}
          onClose={closeModal}
        />
      )}
    </div>
  );
}