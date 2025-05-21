"use client"

import { motion } from "framer-motion"

interface PageHeaderProps {
  title: string
  description?: string
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="page-header">
      <div className="container mx-auto px-4">
        <div className="page-header-content text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            <span className="gradient-text">{title}</span>
          </motion.h1>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-foreground/80 max-w-2xl mx-auto text-lg"
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
    </div>
  )
}
