import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import PolaroidCard from '../components/PolaroidCard';
import PolaroidModal from '../components/PolaroidModal';
import FrontopMockup from '../assets/frontop.png';
import cafe from '../assets/cafe-compass.png';
import portfolio from '../assets/portfolio.png';
import Typewriter from 'typewriter-effect';
import wanderTO  from '../assets/WanderTO - AI.png';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const typewriterRef = useRef(null);

  // Project data with descriptions, GitHub links, and YouTube video
  const projects = [
    
    {
      id: 1,
      image: cafe,
      title: "Cafe-Compass: Redefining the cafe experience",
      company: "Personal Project",
      date: "2025",
      description: "As someone who loves exploring cafes around the city, I found it challenging during remote work to understand the vibe of each café beforehand. Would it be suitable for taking meetings? \n\nWhat was the seating and ambience like? Was it more for casual coffee chats, or did they have a no-laptop policy?\n\nTo solve this problem, I created Cafe Compass—a fullstack web application that curates café information specifically for remote workers and café enthusiasts. By analyzing over 1,000+ Google reviews for cafés throughout the city, it provides AI-powered insights to help users discover the best cafés for different work styles and atmospheres, making it easier to find the perfect spot to work or relax.",
      mediaType: "youtube",
      youtubeEmbedUrl: "https://www.youtube.com/embed/Diw3ZlkDXSw",
      tools: [
        "Google APIs", 
        "PostgreSQL Supabase", 
        "React", 
        "Tailwind", 
        "Node.js", 
        "HTML/CSS/JS", 
        "Figma"
      ],
      githubUrl: "https://github.com/stse3/cafeCompass",
    },
    {
      id: 2,
      image: FrontopMockup,
      title: "Real Time Seismic Vibration Data Web App",
      company: "Frontop Engineering Ltd",
      date: "Jan - April 2025",
      description: "Developed a comprehensive real-time monitoring system for seismic vibration data, enabling engineers to visualize and analyze ground movement patterns instantly.\n\nThe application integrates seamlessly with sensor networks deployed across multiple locations, processes incoming data streams in real-time, and presents critical information through an intuitive dashboard interface. Key features include customizable alerts, historical data comparison, and advanced visualization tools for comprehensive seismic analysis.",
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
      id: 3,
      image: wanderTO,
      title: "WanderTO AI",
      company: "Personal Project",
      date: "May 2025 - Present",
      description: "WanderTO AI is a comprehensive event discovery platform that tackles the overwhelming challenge of Toronto's 200+ daily events.\n\nThe platform uses Puppeteer to dynamically scrape popular event websites, then leverages advanced NLP models—including Facebook's BART-MNLI—for intelligent event categorization and filtering. Users can explore curated events, share listings, invite friends, and foster community engagement through a clean, responsive interface designed for seamless event discovery.",
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
      description: "This is my personal portfolio designed to showcase my projects and skills as a developer! I drew inspiration from zines, magazines, and collectible trinkets to create a unique way to introduce myself and connect with visitors.\n\nFun fact: I modeled the room in my intro using Blender 3D software! The portfolio features interactive project showcases, skill visualizations, and an integrated contact system for seamless communication.",
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
                  // Use ref-based approach for cursor removal
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
        </h1>
        
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          A collection of my recent engineering projects, showcasing my skills in full-stack development,
          cloud architecture, and data visualization.
        </p>
      </div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            onClick={() => openModal(project)} 
            className="cursor-pointer"
          >
            <PolaroidCard
              image={project.image}
              title={project.id === 1 ? <div><p>Real Time Seismic Vibration Data Web App</p></div> : project.title}
              company={project.company}
              date={project.date}
              tools={project.tools}
            />
          </motion.div>
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