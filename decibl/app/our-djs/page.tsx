'use client'

import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

const DJS = [
  'DJ Kartik',
  'DJ Pratik',
  'DJ Prix',
  'DJ Bir',
  'DJ Shubhixx',
  'DJ Sharad SFS Official',
  'DJ James Smith',
  'DJ Neelesh',
  'DJ Cooper',
  'DJ Mohan',
  'Take Soul Music',
  'Juhi'
]

export default function OurDJs() {
  return (
    <main className="min-h-screen bg-[#0F0B2D] text-white pt-20 px-4">
      <motion.div
        className="max-w-4xl mx-auto space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold text-center">Amazing DJs That We Have</h1>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input 
            placeholder="Search DJs..." 
            className="pl-10 bg-white/10 border-white/20 text-white"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {DJS.map((dj, index) => (
            <motion.div
              key={dj}
              className="p-6 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold">{dj}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  )
}

