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


export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center px-6 py-16 md:px-20">
      <div className="flex flex-col md:flex-row gap-12 items-center max-w-[1000px] w-full  ">
        
        {/* Text Section */}
        <div className="flex flex-col gap-5">
        <div className="text-3xl md:text-4xl font-serif">
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

        </div>

          <EmojiProvider data={emojiData}>
            <motion.div 
              className="text-base md:text-md leading-relaxed space-y-4 font-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              <p>
                i’m a systems design engineering student at the univeristy of waterloo{" "}
                <Emoji name="construction worker" width={20} className="inline" />
              </p>
              <p>
                I've always been interested in the <em>how</em> and <em>why</em> of what we build for users, and I hope to be able to blend my background in design{" "}
                <Emoji name="artist palette" width={20} className="inline" />, software{" "}
                <Emoji name="laptop" width={20} className="inline" />{" "} and leadership{" "}
                <Emoji name="hammer and wrench" width={20} className="inline" />{" "} to build meaningful tech.
              </p>
              <p>
              You'll often find me taking endless photos of cool buildings and sceneries, exploring the coziest cafés in Toronto, or crocheting in my bedroom{" "}
                <Emoji name="love letter" width={20} className="inline" />
              </p>
              <div className="flex flex-row gap-1">
                <p>
                  check out my projects,
                </p>
                <Link
                  to="/projects"
                  className="underline underline-offset-2 hover:scale-105 transition-all duration-300"
                >
                  here!
                </Link>

              </div>

            </motion.div>
          </EmojiProvider>
        </div>

        {/* Image Section */}
        <img src={Studio} alt="Sherry's workspace" className="w-96 md:w-96 h-auto rounded-xl " />

      </div>
      

    </div>
  );
}
