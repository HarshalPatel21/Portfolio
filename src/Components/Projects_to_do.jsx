import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

const dummyCards = [
  { id: 1, title: "Project 1", color: "bg-red-300" },
  { id: 2, title: "Project 2", color: "bg-blue-300" },
  { id: 3, title: "Project 3", color: "bg-green-300" },
  { id: 4, title: "Project 4", color: "bg-yellow-300" },
];

function Projects_to_do() {
  const [cards, setCards] = useState(dummyCards);

  const [scrollY, setScrollY] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(true); // Track scroll direction
  const [isAnimating, setIsAnimating] = useState(false); // Track animation state

  const handleScroll = (e) => {
    // Only allow scroll if no animation is in progress
    if (isAnimating) return;

    const newScrollY = e.deltaY;

    // If scroll is down, add to scrollY; if scroll is up, subtract from scrollY
    if (newScrollY > 0) {
      setScrollY((prev) => prev + newScrollY);
      setScrollingDown(true);
    } else {
      setScrollY((prev) => prev + newScrollY);
      setScrollingDown(false);
    }

    const threshold = 200; // Increase threshold for slower removal

    if (scrollY > threshold && cards.length > 1 && scrollingDown) {
      setIsAnimating(true); // Start animation
      setCards((prev) => prev.slice(1)); // Remove the top card when scrolling down
      setScrollY(0); // Reset scroll tracking
    }

    // When scrolling up, push the card back in
    if (
      !scrollingDown &&
      scrollY < -threshold &&
      cards.length < dummyCards.length
    ) {
      setIsAnimating(true); // Start animation
      setCards((prev) => [dummyCards[prev.length], ...prev]); // Add the next card when scrolling up
      setScrollY(0); // Reset scroll tracking
    }
  };

  const onAnimationComplete = () => {
    setIsAnimating(false); // Allow scrolling after animation completes
  };

  return (
    <div
      className=" h-screen  overflow-hidden relative"
      onWheel={handleScroll} // Detect scroll
    >
      <div className="font-bold text-lg mb-2 sticky top-0">Projects </div>
      <AnimatePresence>
        {cards.map((card, index) => {
          return (
            <motion.div
              key={card.id}
              className={`absolute w-72 h-48 flex items-center justify-center text-xl font-bold text-white ${card.color} rounded-lg shadow-lg mt-24`}
              initial={{ y: 50, opacity: 0 }}
              animate={{
                x: scrollY > 200 && index === 0 ? 500 : 0,
                y: -index * 10,
                opacity: 1,
                scale: 1 - index * 0.05,
                rotate: (index % 2 === 0 ? -1 : 1) * index * 5,
              }}
              exit={{ y: -200, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              style={{
                zIndex: dummyCards.length - index,
              }}
              onAnimationComplete={onAnimationComplete}
            >
              {card.title}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export default Projects_to_do;
