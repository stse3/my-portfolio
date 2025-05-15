import React, { useState, useEffect } from 'react';
import { X, Github } from 'lucide-react';

export default function PolaroidModal({
  isOpen,
  onClose,
  media,
  mediaType = "image",
  youtubeEmbedUrl,
  title,
  description,
  company,
  date,
  tools = [],
  githubUrl,
  liveUrl
}) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      // Add animation before closing
      setTimeout(() => {
        setIsVisible(false);
      }, 300);
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  if (!isOpen && !isVisible) return null;
  
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleBackdropClick}
    >
      <div 
        className={`bg-white rounded-xl overflow-hidden shadow-2xl w-full max-w-4xl max-h-[90vh] transition-all duration-300 ${
          isOpen ? 'scale-100' : 'scale-95'
        }`}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Modal Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-10rem)] bg-white">
          {/* Media Container */}
          <div className="relative w-full h-96">
            {mediaType === "youtube" && youtubeEmbedUrl ? (
              <iframe
                src={youtubeEmbedUrl}
                title={title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <img 
                src={media} 
                alt={title} 
                className="w-full h-full object-contain bg-gray-100"
              />
            )}
          </div>
          
          {/* Project Info */}
          <div className="p-6">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center">
                <span className="font-medium text-gray-700 mr-2">Company:</span>
                <span className="text-gray-600">{company}</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-gray-700 mr-2">Date:</span>
                <span className="text-gray-600">{date}</span>
              </div>
              
              {/* Links Section */}
              <div className="flex gap-2 ml-auto">
                {/* GitHub Link */}
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors duration-200 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg"
                  >
                    <Github size={20} />
                    <span className="font-medium">View Code</span>
                  </a>
                )}
                
                {/* Live Demo Link */}
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex test-gray-500 items-center gap-2 text-white bg-rose-300 hover:bg-rose-400 transition-colors duration-200 px-4 py-2 rounded-lg"
                  >
                    <span className="font-medium">Live Demo</span>
                  </a>
                )}
              </div>
            </div>
            
            {/* Description */}
            <div className="mb-8">
              <h4 className="text-lg font-medium text-gray-800 mb-3">Description</h4>
              <div className="text-gray-600 leading-relaxed">
                {description}
              </div>
            </div>
            
            {/* Tools */}
            {tools.length > 0 && (
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}