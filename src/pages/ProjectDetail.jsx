import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Github } from 'lucide-react';
import { projects } from '../data/projects';

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'solution', label: 'Solution' },
];

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function getYoutubeId(embedUrl) {
  return embedUrl?.match(/embed\/([^?]+)/)?.[1] ?? null;
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [videoActive, setVideoActive] = useState(false);
  const youtubeId = project?.mediaType === "youtube" ? getYoutubeId(project.youtubeEmbedUrl) : null;

  if (!project) {
    return (
      <div className="max-w-[700px] mx-auto px-6 py-24 text-center">
        <p className="text-gray-600 mb-4">Project not found.</p>
        <Link to="/projects" className="underline">Back to projects</Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1100px] mx-auto px-6 py-6 flex flex-col md:flex-row gap-12">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col gap-8 min-w-36 shrink-0">
        <Link to="/projects" className="flex items-center gap-2 text-sm hover:opacity-60 transition-opacity">
          ← Back
        </Link>
        <nav className="flex flex-col gap-2 text-sm sticky top-12">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollToSection(s.id)}
              className="text-left text-gray-500 hover:text-black transition-colors"
            >
              {s.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <div className="flex flex-col gap-12 w-full">
        <Link to="/projects" className="md:hidden flex items-center gap-2 text-sm hover:opacity-60 transition-opacity">
          ← Back
        </Link>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h4 className="text-sm text-gray-500">{project.team} · {project.timeline}</h4>
            <h1 className="text-3xl md:text-4xl font-serif">{project.tagline}</h1>
          </div>

          {/* Hero media */}
          <div className="relative w-full aspect-[16/9] border border-black/10 overflow-hidden bg-gray-100">
            {youtubeId ? (
              videoActive ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`}
                  title={project.tagline}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setVideoActive(true)}
                  className="group relative w-full h-full block"
                  aria-label={`Play video for ${project.tagline}`}
                >
                  <img
                    src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
                    alt={project.tagline}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-200">
                    <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="black"><path d="M8 5v14l11-7z" /></svg>
                    </span>
                  </span>
                </button>
              )
            ) : (
              <img src={project.image} alt={project.tagline} className="w-full h-full object-cover" />
            )}
          </div>

          {/* Metadata */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <div className="flex w-full flex-col gap-2">
              <h4 className="text-sm font-medium text-black">Role</h4>
              <p className="text-sm text-gray-600">{project.role}</p>
            </div>
            <div className="flex w-full flex-col gap-2">
              <h4 className="text-sm font-medium text-black">Timeline</h4>
              <p className="text-sm text-gray-600">{project.timeline}</p>
            </div>
            <div className="flex w-full flex-col gap-2">
              <h4 className="text-sm font-medium text-black">Team</h4>
              <p className="text-sm text-gray-600">{project.team}</p>
            </div>
            <div className="flex w-full flex-col gap-2">
              <h4 className="text-sm font-medium text-black">Skills</h4>
              <div className="flex flex-col gap-0.5">
                {project.stack.map((tool) => (
                  <p key={tool} className="text-sm text-gray-600">{tool}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Links */}
          {(project.githubUrl || project.liveUrl) && (
            <div className="flex gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm border border-black/10 px-4 py-2 hover:bg-black/5 transition-colors duration-200"
                >
                  <Github size={16} /> View Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm bg-rose-300 text-white px-4 py-2 hover:bg-rose-400 transition-colors duration-200"
                >
                  Live Demo
                </a>
              )}
            </div>
          )}
        </div>

        {/* Overview */}
        <section id="overview" className="flex flex-col gap-3">
          <h4 className="text-sm font-medium text-black">Overview</h4>
          <p className="text-gray-600 leading-relaxed">{project.overview}</p>
        </section>

        {/* Solution */}
        <section id="solution" className="flex flex-col gap-3">
          <h4 className="text-sm font-medium text-black">Solution</h4>
          <ul className="list-disc list-outside pl-5 text-gray-600 leading-relaxed space-y-2">
            {project.solution.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
