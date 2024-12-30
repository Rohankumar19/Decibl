'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface FloatingPhoneProps {
  className?: string
  direction?: 'left' | 'right'
}

export default function FloatingPhone({ className = '', direction = 'left' }: FloatingPhoneProps) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ 
        opacity: 0,
        x: direction === 'left' ? -100 : 100,
        y: 50
      }}
      animate={{ 
        opacity: 1,
        x: 0,
        y: 0
      }}
      transition={{
        duration: 1,
        delay: direction === 'left' ? 0.2 : 0.4,
        type: "spring",
        stiffness: 100
      }}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, direction === 'left' ? -3 : 3, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <Image
          src="/placeholder.svg"
          alt="Phone mockup"
          width={300}
          height={600}
          className="w-[300px] h-auto"
        />
      </motion.div>
    </motion.div>
  )
}

