'use client'

import { motion } from 'framer-motion'

export default function RefundsAndCancellation() {
  return (
    <main className="min-h-screen bg-[#0F0B2D] text-white pt-20 px-4">
      <motion.div
        className="max-w-4xl mx-auto space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold text-center">Refunds & Cancellation</h1>
        
        <motion.div
          className="prose prose-invert max-w-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2>Refund Policy</h2>
          <ol type="a">
            <li><strong>Rejected Requests:</strong> If an artist rejects a user's request, a refund will be processed instantly to the user's original payment method.</li>
            <li><strong>User Dissatisfaction:</strong> If a user is dissatisfied with the service provided after an artist accepts their request, they may apply for a refund within 2 days from the date of acceptance. The refund will be processed within 24-48 hours.</li>
          </ol>
          
          <h2>Cancellation Policy</h2>
          <ol type="a">
            <li><strong>User-initiated Cancellations:</strong> Users may cancel a request at any time before it is accepted by an artist. Upon cancellation, a full refund will be issued. The refund will be processed within 24-48 hours.</li>
          </ol>
          
          <h2>How to Request a Refund or Cancel a Service</h2>
          <p>To request a refund or cancel a request, please follow these steps:</p>
          <ol>
            <li>For rejected requests, no action is needed. The refund will be processed automatically within 24-48 hours.</li>
            <li>For user-initiated cancellations, please contact our support team at creatibl.solutions@gmail.com with your order number and a clear explanation of your request.</li>
          </ol>
          
          <h2>Exceptions</h2>
          <ol type="a">
            <li><strong>Custom Requests:</strong> Requests for custom services may be subject to different refund and cancellation policies, which will be communicated at the time of purchase.</li>
            <li><strong>Final Sale Items:</strong> Some services may be marked as "final sale" and will not be eligible for refunds or cancellations. This will be clearly indicated at the time of purchase.</li>
          </ol>
          
          <h2>Contact Us</h2>
          <p>If you have any questions or concerns regarding our Refund and Cancellation Policy, please contact us at creatibl.solutions@gmail.com.</p>
        </motion.div>
      </motion.div>
    </main>
  )
}

