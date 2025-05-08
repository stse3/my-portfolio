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
  const [page, setPage] = useState('intro');//options: intro, bag_play
  const containerRef = useRef(null);
  
  // Define the icon size
  const ICON_SIZE = 180;
  
  // Define the trinkets with predefined positions based on "What's in my bag?" layout
  const trinkets = [
    {
      id: 1,
      image: Coffee, // Top left
      description: "i'm a huge café enthusiast--i could spend hours visiting different cafes around the city, chatting with friends, and exploring new communities <3",
      position: { x: "30%", y: "20%" }
    },
    {
      id: 2,
      image: Bao, // Top center
      description: "my cantonese heritage is of huge importance to me, visiting relatives in hong kong, dim sum meals with friends and relatives over steamed baos",
      position: { x: "50%", y: "20%" }
    },
    {
      id: 3,
      image: Camera, // Top right
      description: "i am a huge fan of photography, especially of buildings, new cities in my travels.",
      position: { x: "70%", y: "18%" }
    },
    {
      id: 4,
      image: PaperBag, // Middle left
      description: "surprise! fun fact: i am a middle child <3",
      position: { x: "20%", y: "45%" }
    },
    {
      id: 5,
      image: Airpods, // Middle right
      description: "i've been playing piano since i was 5, and i love to use it as a way to express my emotions, or take a step back.",
      position: { x: "77%", y: "48%" }
    },
    {
      id: 6,
      image: Files, // Bottom left
      description: "if you made it here! check out some of my projects i've poured my love into <3",
      position: { x: "20%", y: "70%" }
    },
    {
      id: 7,
      image: Bag, // Bottom center-left
      description: 'i carry all of my valuables in my tote bag.',
      position: { x: "40%", y: "75%" }
    },
    {
      id: 8,
      image: Paintbrushes, // Bottom center-right
      description: "art's and crafts and creativity is my love, i still find ways to incorporate and bridge the intersection in tech!",
      position: { x: "60%", y: "75%" }
    },
    {
      id: 9,
      image: TV, // Bottom right
      description: "I am a movie fanatic.",
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
          >
            <Trinket
              image={trinket.image}
              description={trinket.description}
            />
          </div>
        ))}
      </div>
      <div className="text-xs text-gray-500">
          <Typewriter
        onInit={(typewriter) => {
            typewriter
            .typeString("click the objects to get to know me!")
            .callFunction(() => {
                // Wait a bit after typing to remove the cursor
                setTimeout(() => {
                const cursor = document.querySelector('.Typewriter__cursor');
                if (cursor) {
                    cursor.style.opacity = '0'; // Or: cursor.remove();
                }
                }, 500); // Delay to ensure typing animation finishes
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