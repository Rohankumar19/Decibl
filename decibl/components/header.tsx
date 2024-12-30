'use client'

import { useState } from 'react'
import { Menu } from 'lucide-react'
import { motion } from 'framer-motion'
import DropdownMenu from './dropdown-menu'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-[#5BB5FF] text-2xl font-bold"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Decibl
        </motion.div>
        <motion.button
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FF1988] text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu className="w-5 h-5" />
        </motion.button>
      </motion.header>
      <DropdownMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}

