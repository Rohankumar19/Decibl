'use client'

import { motion } from 'framer-motion'
import { Music, Headphones } from 'lucide-react'
import Image from 'next/image'

const MusicWave = () => (
  <div className="flex items-end space-x-1 h-4">
    {[1, 2, 3, 4].map((i) => (
      <motion.div
        key={i}
        className="w-1 bg-[#7B5EFF]"
        animate={{
          height: ['20%', '100%', '20%'],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          delay: i * 0.1,
        }}
      />
    ))}
  </div>
)

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      <motion.div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 max-w-[300px]"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="relative">
          <Image
            src="/placeholder.svg?height=600&width=300"
            alt="iPhone mockup"
            width={300}
            height={600}
            className="w-full h-auto"
          />
          <div className="absolute top-[15%] left-[15%] right-[15%] bottom-[15%] bg-[#0F0B2D]/80 rounded-3xl flex items-center justify-center">
            <MusicWave />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 max-w-[300px]"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <div className="relative">
          <Image
            src="/placeholder.svg?height=600&width=300"
            alt="iPhone mockup"
            width={300}
            height={600}
            className="w-full h-auto"
          />
          <div className="absolute top-[15%] left-[15%] right-[15%] bottom-[15%] bg-[#0F0B2D]/80 rounded-3xl flex items-center justify-center">
            <MusicWave />
          </div>
        </div>
      </motion.div>
      
      <motion.div
        className="text-center space-y-6 max-w-2xl mx-auto z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold space-y-2">
          <motion.span
            className="block text-[#7B5EFF]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            DECIBL
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            REQUEST YOUR SONG
          </motion.span>
        </h1>

        <motion.p
          className="text-gray-400 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Innovating the Club Industry
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex -space-x-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-white bg-gray-800"
              />
            ))}
          </div>
          <span className="text-[#7B5EFF]">+10k users</span>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.button
            className="px-8 py-3 rounded-full bg-[#FF1988] text-white font-semibold flex items-center gap-2 min-w-[200px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Music className="w-5 h-5" />
            REQUEST SONG
          </motion.button>
          
          <motion.button
            className="px-8 py-3 rounded-full bg-[#7B5EFF] text-white font-semibold flex items-center gap-2 min-w-[200px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Headphones className="w-5 h-5" />
            DJ Login
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}

