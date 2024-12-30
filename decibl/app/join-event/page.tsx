'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'

export default function JoinEvent() {
  const [activeTab, setActiveTab] = useState('live')

  return (
    <main className="min-h-screen bg-[#0F0B2D] text-white pt-20 px-4">
      <motion.div
        className="max-w-4xl mx-auto space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold text-center">Join a Party Near You</h1>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input 
            placeholder="Search for events..." 
            className="pl-10 bg-white/10 border-white/20 text-white"
          />
        </div>

        <Tabs defaultValue="live" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="live">Live Now</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid gap-4">
          {/* Placeholder for events */}
          <motion.div
            className="p-6 rounded-lg bg-white/5 border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-xl font-semibold">No events found</p>
            <p className="text-gray-400">Check back later for upcoming events</p>
          </motion.div>
        </div>
      </motion.div>
    </main>
  )
}

