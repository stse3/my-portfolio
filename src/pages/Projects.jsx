import PolaroidCard from '../components/PolaroidCard';
import FrontopMockup from '../assets/frontop.png';
import cafe from '../assets/cafe-compass.png';
import portfolio from '../assets/portfolio.png';
import Typewriter from 'typewriter-effect';
export default function Projects() {
  return (
    <div className="py-12 px-6">
            {/* Portfolio Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2 font-serif "><Typewriter
    onInit={(typewriter) => {
        typewriter
        .typeString("Portfolio")
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
</h1>
        
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          A collection of my recent engineering projects, showcasing my skills in full-stack development,
          cloud architecture, and data visualization.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        <PolaroidCard
          image={FrontopMockup}
          title={<div><p>Real Time Seismic Vibration Data Web App</p> </div>}
          company="Frontop Engineering Ltd"
          date="2025"
          tools={[
            "C++", 
            "Google Cloud Platform (GCP)", 
            "BigQuery/CloudRun", 
            "SQL",
            "React", 
            "Tailwind", 
            "Node.js", 
            "HTML/CSS/JS"
          ]}
        />
                <PolaroidCard
          image={cafe}
          title="Cafe-Compass: Redefining the cafe experience"
          company="Personal Project"
          date="2025"
          tools={[
            "Google APIs", 
            "Postgresql", ,
            "React", 
            "Tailwind", 
            "Node.js", 
            "HTML/CSS/JS", 
            "Figma"
          ]}
        />
         <PolaroidCard
          image={portfolio}
          title="Personal Portfolio"
          company="Personal Project"
          date="2025"
          tools={[
            "React", 
            "Tailwind", 
            "HTML/CSS/JS"
          ]}
        />
        </div>

      
    </div>
  );
}