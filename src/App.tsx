import { motion } from "motion/react";
import { useState } from "react";
import { CardItem } from "./components/card-item";
import { ActiveCard } from "./components/active-card";
import { Credits } from "./components/credits";

export const cards = [
  {
    bgColor: 'bg-blue-600',
    name: 'A',
  },
  {
    bgColor: 'bg-red-700',
    name: 'B',
  },
  {
    bgColor: 'bg-gray-800',
    name: 'C',
  },
];

function App() {
  const [activeIndex, setActiveIndex] = useState<null | number>(null)

  return (
    <section className="w-full h-dvh flex items-center justify-center">
      <Credits />
      <motion.section 
        layout 
        className="w-80 p-4"
        style={{ boxShadow: '0px 0px 6px rgba(0, 0, 0, .3)', borderRadius: 12 }}
      >
        <div className="flex justify-between mb-6">
          <motion.h1 
            layout 
            className="font-semibold"
          >
            My wallet
          </motion.h1>
          <motion.span 
            layout
            className="text-sm"
          >
            {cards.length} cards
          </motion.span>
        </div>
        {
          activeIndex != null && (
            <ActiveCard 
              activeIndex={activeIndex} 
              setActiveIndex={setActiveIndex} 
            />
          )
        }
        {/* 160px == card height  */}
        {/* 30px == gap  */}
        <section className="relative h-[calc(160px+60px)] box-content">
          {cards.map((item, index) => (
            <CardItem
              key={index}
              index={index}
              item={item}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex} 
            />
          ))}
        </section>
      </motion.section>
    </section>
  )
}

export default App
