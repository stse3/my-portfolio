import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EmojiProvider, Emoji } from "react-apple-emojis";
import { Link } from 'react-router-dom';
import emojiData from "react-apple-emojis/src/data.json";
import Studio from '../assets/studio.png';
import HomePaper from '../assets/Home-Paper.png';
import Typewriter from 'typewriter-effect';

// Import stamps
import aboutStamp from '../assets/about-stamp.png';
import experienceStamp from '../assets/experience-stamp.png';
import extracurricularStamp from '../assets/extracurricular-stamp.png';
import projectsStamp from '../assets/projects-stamp.png';

// Import company logos
import sunlifelogo from '../assets/logos/sunlife.png';
import uwuxlogo from '../assets/logos/uwux.png';
import saltlogo from '../assets/logos/salt.png';
import frontoplogo from '../assets/logos/frontop.png';
import blueprintlogo from '../assets/logos/blueprint.png';
import playstationlogo from '../assets/playstation-logo.jpeg';

const EXPERIENCE = [
  {
    company: "PlayStation",
    role: "Technical Program Manager + Software Engineering Intern",
    dates: "May – Aug 2026",
    logo: playstationlogo,
    url: "https://sonyinteractive.com/en/",
  },
  {
    company: "Sun Life",
    role: "Software Engineer Intern, GenAI Team",
    dates: "Sep – Dec 2025",
    logo: sunlifelogo,
    url: "https://www.sunlife.com",
  },
  {
    company: "Frontop Engineering",
    role: "Software Engineering Intern",
    dates: "Jan – Apr 2025",
    logo: frontoplogo,
    url: null,
  },
];

const textContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center px-6 py-10 md:px-20 md:py-16">
      <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center max-w-[1000px] w-full">

        {/* Text Section */}
        <div className="flex flex-col gap-8">
          <motion.div
            className="text-3xl md:text-4xl font-serif"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hi, I'm Sherry Tse.")
                  .callFunction(() => {
                    // Use requestAnimationFrame for smoother cursor removal
                    requestAnimationFrame(() => {
                      const cursor = document.querySelector('.Typewriter__cursor');
                      if (cursor) {
                        cursor.style.transition = 'opacity 0.1s ease';
                        cursor.style.opacity = '0';
                      }
                    });
                  })
                  .start();
              }}
              options={{
                delay: 25,
                loop: false,
                cursor: '|',
              }}
            />
          </motion.div>

          <EmojiProvider data={emojiData}>
            <motion.div
              className="text-base md:text-md leading-relaxed space-y-6 font-sans"
              variants={textContainerVariants}
              initial="hidden"
              animate="show"
            >
              <motion.p variants={itemVariants}>
                i’m a systems design engineering student at the univeristy of waterloo{" "}
                <Emoji name="construction worker" width={20} className="inline" />
              </motion.p>
              <motion.p variants={itemVariants}>
                I've always been interested in the <em>how</em> and <em>why</em> of what we build for users, and I hope to be able to blend my background in design{" "}
                <Emoji name="artist palette" width={20} className="inline" />, software{" "}
                <Emoji name="laptop" width={20} className="inline" />{" "} and leadership{" "}
                <Emoji name="hammer and wrench" width={20} className="inline" />{" "} to build meaningful tech.
              </motion.p>
              <motion.p variants={itemVariants}>
                You'll often find me taking endless photos of cool buildings and sceneries, exploring the coziest cafés in Toronto, or crocheting in my bedroom{" "}
                <Emoji name="love letter" width={20} className="inline" />
              </motion.p>
              <motion.div variants={itemVariants}>
                <p className="text-md mb-3">Previous experience:</p>
                <motion.ul
                  className="list-disc list-outside pl-5 space-y-2.5"
                  variants={listVariants}
                  initial="hidden"
                  animate="show"
                >
                  {EXPERIENCE.map((exp) => (
                    <motion.li key={exp.company} variants={itemVariants} className="flex items-center gap-2">
                      <motion.img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-5 h-5 object-contain rounded-sm shrink-0"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      />
                      <span>
                        {exp.role} @{" "}
                        {exp.url ? (
                          <a
                            href={exp.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline underline-offset-2 hover:opacity-70 transition-opacity"
                          >
                            {exp.company}
                          </a>
                        ) : (
                          exp.company
                        )}
                        {" "}· {exp.dates}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
              <motion.div variants={itemVariants} className="flex flex-row gap-1">
                <p>
                  check out my projects,
                </p>
                <Link
                  to="/projects"
                  className="underline underline-offset-2 hover:scale-105 transition-all duration-300"
                >
                  here!
                </Link>
              </motion.div>
            </motion.div>
          </EmojiProvider>
        </div>

        {/* Image Section */}
        <motion.img
          src={Studio}
          alt="Sherry's workspace"
          className="w-96 md:w-96 h-auto rounded-xl"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
        />

      </div>
    </div>
  );
}
