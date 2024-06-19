"use client"
import { motion } from 'framer-motion'

export const Badge = () => {
  return <motion.div
    className="dark:bg-indigo-500 bg-green-500 w-3 h-2 rounded-full"
    animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity }} />
}
