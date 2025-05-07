import Header from './Header';
import Footer from './Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

export default function Layout() {
  const location = useLocation();
  
  // Animation variants
  const pageVariants = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
        duration: 0.3,
      }
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white px-4 py-6">
      {/* Main Container */}
      <div className="flex flex-col items-center flex-grow w-full">
        {/* Content Container */}
        <div className="w-full max-w-[1000px] min-h-[600px] bg-white border border-gray-300 rounded-3xl overflow-hidden flex flex-col mb-10">
          <Header />
          <main className="flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                className="h-full"
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
        
        {/* Footer */}
        <div className="w-full max-w-[1000px] mb-6">
          <Footer />
        </div>
      </div>
    </div>
  );
}