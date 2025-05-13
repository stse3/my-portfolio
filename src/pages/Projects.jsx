import React, { useState } from 'react';
import PolaroidCard from '../components/PolaroidCard';
import PolaroidModal from '../components/PolaroidModal';
import FrontopMockup from '../assets/frontop.png';
import cafe from '../assets/cafe-compass.png';
import portfolio from '../assets/portfolio.png';
import Typewriter from 'typewriter-effect';
import wanderTO  from '../assets/WanderTO - AI.png';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Project data with descriptions, GitHub links, and YouTube video
  const projects = [
    {
      id: 1,
      image: FrontopMockup,
      title: "Real Time Seismic Vibration Data Web App",
      company: "Frontop Engineering Ltd",
      date: "Jan - April 2025",
      description: "Developed a real-time monitoring system for seismic vibration data, enabling engineers to visualize and analyze ground movement patterns instantly. The application integrates with sensor networks deployed across multiple locations, processes incoming data streams, and presents critical information through an intuitive dashboard interface with customizable alerts and historical data comparison features.",
      mediaType: "youtube",
      youtubeEmbedUrl: "https://www.youtube.com/embed/0LRET50OuQs",
      tools: [
        "C++", 
        "Google Cloud Platform (GCP)", 
        "BigQuery/CloudRun", 
        "SQL", 
        "React", 
        "Tailwind", 
        "Node.js", 
        "HTML/CSS/JS"
      ],
    },
    {
      id: 2,
      image: cafe,
      title: "Cafe-Compass: Redefining the cafe experience",
      company: "Personal Project",
      date: "2025",
      description: "Cafe-Compass is an innovative platform designed to enhance the cafe-finding experience. It uses location-based services to help users discover nearby cafes based on preferences like ambiance, specialty coffee options, and workspace availability. The app features real-time occupancy data, menu browsing, and a community review system that focuses on specific attributes coffee enthusiasts care about most.",
      mediaType: "image",
      tools: [
        "Google APIs", 
        "Postgresql", 
        "React", 
        "Tailwind", 
        "Node.js", 
        "HTML/CSS/JS", 
        "Figma"
      ],
      githubUrl: "https://github.com/stse3/cafe-compass",
    },
    {
      id: 3,
      image: wanderTO,
      title: "WanderTO AI",
      company: "Personal Project",
      date: "May 2025 - Present",
      description: "In today's work culture and tech enviornment, I was inspired to create a fullstack AI platform that could ",
      mediaType: "youtube",
      youtubeEmbedUrl: "https://www.youtube.com/embed/hz5ZMezncWE",
      tools: [
        "React", 
        "Tailwind", 
        "HTML/CSS/JS",
        "Framer-Motion",
        "Hugging Face",
        "NLP",
        "Python",
        "Pytorch"
      ],
      githubUrl: "https://github.com/stse3/wanderTO-ai",
    },
    {
      id: 4,
      image: portfolio,
      title: "Personal Portfolio",
      company: "Personal Project",
      date: "2025",
      description: "A modern, responsive portfolio website built to showcase my projects and skills as a developer. The site features interactive elements, smooth animations, and optimized performance. It includes project showcases, skill visualizations, and a contact system. The design emphasizes clean typography and intuitive navigation to create an engaging user experience.",
      mediaType: "image",
      tools: [
        "React", 
        "Tailwind", 
        "HTML/CSS/JS",
        "Framer-Motion"
      ],
      githubUrl: "https://github.com/stse3/my-portfolio",
      liveUrl: "https://sherrytse.com"
    }
  ];

  // Open modal with project details
  const openModal = (project) => {
    setSelectedProject(project);
    console.log("Opening project:", project); // Debugging
  };

  // Close modal
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="py-12 px-6">
      {/* Portfolio Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2 font-serif">
          <Typewriter
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
        {projects.map((project) => (
          <div 
            key={project.id} 
            onClick={() => openModal(project)} 
            className="cursor-pointer transition-transform duration-300 hover:-translate-y-2"
          >
            <PolaroidCard
              image={project.image}
              title={project.id === 1 ? <div><p>Real Time Seismic Vibration Data Web App</p></div> : project.title}
              company={project.company}
              date={project.date}
              tools={project.tools}
            />
          </div>
        ))}
      </div>
      
      {/* Modal */}
      {selectedProject && (
        <PolaroidModal
          isOpen={!!selectedProject}
          onClose={closeModal}
          media={selectedProject.image}
          mediaType={selectedProject.mediaType || "image"}
          youtubeEmbedUrl={selectedProject.youtubeEmbedUrl}
          title={typeof selectedProject.title === 'string' 
            ? selectedProject.title 
            : "Real Time Seismic Vibration Data Web App"}
          description={selectedProject.description}
          company={selectedProject.company}
          date={selectedProject.date}
          tools={selectedProject.tools}
          githubUrl={selectedProject.githubUrl}
          liveUrl={selectedProject.liveUrl}
        />
      )}
    </div>
  );
}