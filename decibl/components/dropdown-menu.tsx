'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { X } from 'lucide-react'

interface DropdownMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function DropdownMenu({ isOpen, onClose }: DropdownMenuProps) {
  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'Join A Event', href: '/join-event' },
    { title: 'Our DJs', href: '/our-djs' },
    { title: 'Terms & Conditions', href: '/terms-and-conditions' },
    { title: 'Our Privacy', href: '/privacy-policy' },
    { title: 'Refunds & Cancellation', href: '/refunds-and-cancellation' },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed right-0 top-0 h-full w-full max-w-sm bg-[#0F0B2D] z-50 p-6"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white hover:text-gray-300"
            >
              <X className="w-6 h-6" />
            </button>
            <nav className="mt-12">
              <ul className="space-y-4">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="text-white hover:text-[#7B5EFF] text-lg font-medium block py-2"
                      onClick={onClose}
                    >
                      {item.title}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

