import { useNavigate } from 'react-router-dom';
import { EmojiProvider, Emoji } from "react-apple-emojis";
import { Link } from 'react-router-dom';
import emojiData from "react-apple-emojis/src/data.json";
import Studio from '../assets/studio.png';
import Typewriter from 'typewriter-effect';


export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 md:px-20">
      <div className="flex flex-col md:flex-row gap-12 items-center max-w-[1000px] w-full">
        
        {/* Text Section */}
        <div className="flex flex-col gap-5">
        <div className="text-3xl md:text-4xl font-serif">
            <Typewriter
    onInit={(typewriter) => {
        typewriter
        .typeString("Hi, I'm Sherry Tse.")
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

        </div>

          <EmojiProvider data={emojiData}>
            <div className="text-base md:text-lg leading-relaxed space-y-4 font-sans">
              <p>
                i’m a systems design engineering student at the univeristy of waterloo{" "}
                <Emoji name="construction worker" width={20} className="inline" />
              </p>
              <p>
                i’m an engineer{" "}
                <Emoji name="hammer and wrench" width={20} className="inline" />, designer{" "}
                <Emoji name="artist palette" width={20} className="inline" />, and coder{" "}
                <Emoji name="laptop" width={20} className="inline" />
              </p>
              <p>
              I'm passionate about using technology to build community and create human-centered designs that blend technical innovation with creativity
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

            </div>
          </EmojiProvider>
        </div>

        {/* Image Section */}
        <img src={Studio} alt="Sherry's workspace" className="w-96 md:w-96 h-auto rounded-xl " />

      </div>
    </div>
  );
}
