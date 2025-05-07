import { motion, AnimatePresence } from "framer-motion";
import PaperNote from '../assets/paper-note.png';

export default function TrinketModal({ trinket, onClose}) {
  if (!trinket) return null;

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  const postcardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5, 
      rotate: -15, 
      y: 50,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0, 
      y: 0,
      filter: "blur(0px)",
      transition: { 
        type: "spring",
        stiffness: 200,
        damping: 20,
        mass: 1.2,
        delay: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      rotate: 10, 
      y: -30,
      filter: "blur(8px)",
      transition: { duration: 0.3 }
    }
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="backdrop"
        className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          key="postcard"
          className="relative p-6 rounded-lg max-w-md w-full overflow-hidden"
          style={{
            backgroundImage: `url(${PaperNote})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '400px',
          }}
          variants={postcardVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.button
            className="absolute top-1 right-1 rounded-full flex items-center justify-center text-gray-800 font-bold text-xl hover:scale-125 "
            onClick={onClose}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            ×
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
