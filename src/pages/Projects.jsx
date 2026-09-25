import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PolaroidCard from '../components/PolaroidCard';
import Typewriter from 'typewriter-effect';
import { projects } from '../data/projects';

const ASPECT_RATIOS = ["aspect-[16/9]", "aspect-[4/3]", "aspect-[8/5]", "aspect-[5/4]"];

export default function Projects() {
  return (
    <div className="max-w-[1100px] mx-auto px-6 py-16">
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

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-14">
          A collection of my recent engineering projects, showcasing my skills in full-stack development,
          cloud architecture, and data visualization.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="columns-1 lg:columns-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={`project-${project.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
              ease: "easeOut"
            }}
            className="group break-inside-avoid mb-6"
          >
            <Link to={`/projects/${project.slug}`}>
              <PolaroidCard
                image={project.image}
                title={project.tagline}
                company={project.team}
                date={project.timeline}
                aspect={ASPECT_RATIOS[index % ASPECT_RATIOS.length]}
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
