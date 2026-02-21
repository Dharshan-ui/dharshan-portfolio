import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const typingPhrase = "Building scalable digital experiences.";
const typingSpeed = 80
const eraseSpeed = 50
const pauseDuration = 2000

function TypingAnimation() {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < typingPhrase.length) {
          setText(typingPhrase.slice(0, text.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration)
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1))
        } else {
          setIsDeleting(false)
        }
      }
    }, isDeleting ? eraseSpeed : typingSpeed)
    return () => clearTimeout(timeout)
  }, [text, isDeleting])

  return (
    <span className="text-primary-light dark:text-primary-dark font-medium">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex items-center bg-white dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              Dharshan R
            </h1>
            <p className="text-xl text-primary-light dark:text-primary-dark font-semibold">
              Full Stack Developer | React & Java Enthusiast
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl">
              I design and develop scalable, responsive, and performance-driven web applications with strong foundations in Data Structures and backend architecture.
            </p>

            {/* Typing line */}
            <p className="text-lg text-gray-700 dark:text-gray-300 min-h-[2rem]">
              <TypingAnimation />
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-light dark:bg-primary-dark text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                🚀 View Projects
              </motion.a>
              <motion.a
                href="https://colourful-harlequin-xygmhdi5r0.edgeone.app/Dharshan_resume%20(1).pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark rounded-lg font-semibold hover:bg-primary-light/10 dark:hover:bg-primary-dark/10 transition-colors"
              >
                📄 Download Resume →
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <motion.a
                href="https://github.com/Dharshan-ui"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-3 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                aria-label="GitHub"
              >
                <span className="font-medium">💻 GitHub</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/dharshan-r-5b6b91342/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-3 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                aria-label="LinkedIn"
              >
                <span className="font-medium">🔗 LinkedIn</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right - Decorative / Optional visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center relative"
          >
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary-light to-accent dark:from-primary-dark dark:to-accent opacity-20 blur-3xl" />
            <div className="absolute w-48 h-48 rounded-lg border-2 border-primary-light/30 dark:border-primary-dark/30 rotate-12" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
