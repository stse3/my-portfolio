import { useState } from 'react';
import Letters from '../assets/letters.png';
import { Linkedin, Github, Mail } from 'lucide-react';

export default function Contact() {
  const [hovered, setHovered] = useState(null);

  const socialLinks = [
    { 
      id: 'linkedin', 
      icon: <Linkedin size={28} />, 
      href: 'https://linkedin.com/in/yourprofile',
      label: 'LinkedIn'
    },
    { 
      id: 'github', 
      icon: <Github size={28} />, 
      href: 'https://github.com/yourusername',
      label: 'GitHub'
    },
    { 
      id: 'email', 
      icon: <Mail size={28} />, 
      href: 'mailto:sherry.tse@mail.com',
      label: 'Email' 
    }
  ];

  return (
    <div className="flex flex-col ml-20 md:flex-row items-center justify-center gap-8 md:gap-16 px-6 py-12 md:py-16 h-full">
      {/* Left Section - Text */}
      <div className="flex flex-col items-start text-left max-w-md">
        <h1 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Let's get in touch!</h1>
        
        <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
          I love meeting new people, collaborating on cool ideas, and chatting about anything under the sun ☀️
        </p>
        
        <p className="text-base md:text-lg text-gray-700 mb-10 leading-relaxed">
          shoot me a message! 
        </p>
        
        {/* Social Links */}
        <div className="flex items-center gap-8 mt-2">
          {socialLinks.map(link => (
            <a 
              key={link.id}
              href={link.href}
              className="text-gray-800 hover:text-rose-400 transition-all duration-300 relative hover:scale-110"
              onMouseEnter={() => setHovered(link.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {link.icon}
              {hovered === link.id && (
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-80">
                  {link.label}
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
      
      {/* Right Section - Image */}
      <div className="relative">
        <img
          src={Letters}
          alt="Stack of vintage letters and postcards"
          className="w-72 md:w-96 h-auto rounded-lg object-cover"
        />


      </div>
    </div>
  );
}