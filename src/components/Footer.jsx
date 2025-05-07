import {Linkedin, Github, Mail,Copyright } from 'lucide-react'
export default function Footer(){
    
    
    return (<div className ="flex flex-row justify-between m-6">

        <div className="text-sm flex flex-row gap-1 items-center"> 
            <Copyright size={12}/>
            <div className="text-sm">2025 sherry-tse</div> </div>
    <div className="flex flex-row gap-5 justify-end">
        {/* LinkedIn Icon */}
        <a href="https://www.linkedin.com/in/tse-sherry/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={16} className="transition-transform transform hover:scale-125" />
        </a>

        {/* GitHub Icon */}
        <a href="https://github.com/stse3" target="_blank" rel="noopener noreferrer">
            <Github size={16} className="transition-transform transform hover:scale-125" />
        </a>

        {/* Mail Icon */}
        <a href="mailto:s27tse@uwaterloo.ca">
            <Mail size={16} className="transition-transform transform hover:scale-125" />
  </a>
        </div>

    </div>)
}