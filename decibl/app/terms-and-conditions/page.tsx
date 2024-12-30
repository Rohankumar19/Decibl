'use client'

import { motion } from 'framer-motion'

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-[#0F0B2D] text-white pt-20 px-4">
      <motion.div
        className="max-w-4xl mx-auto space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold text-center">Terms & Conditions</h1>
        
        <motion.div
          className="prose prose-invert max-w-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p>Welcome to Decibl. These terms and conditions outline the rules and regulations for the use of our website and services.</p>
          
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Decibl's website if you do not accept all of the terms and conditions stated on this page.</p>
          
          <h2>2. License to Use Website</h2>
          <p>Unless otherwise stated, Decibl and/or its licensors own the intellectual property rights for all material on Decibl. All intellectual property rights are reserved.</p>
          
          <h2>3. User Account</h2>
          <p>If you create an account on our website, you are responsible for maintaining the security of your account, and you are fully responsible for all activities that occur under the account and any other actions taken in connection with it.</p>
          
          <h2>4. Limitations</h2>
          <p>In no event shall Decibl or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Decibl's website.</p>
          
          <h2>5. Governing Law</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws of [Your Country] and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
        </motion.div>
      </motion.div>
    </main>
  )
}

