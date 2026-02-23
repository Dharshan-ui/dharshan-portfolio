import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const scrollVariants = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section id="home" className="relative min-h-screen pt-20 pb-20 flex items-center overflow-hidden bg-gradient-to-br from-white via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-950 dark:to-blue-950/20">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl dark:from-blue-600/10 dark:to-cyan-600/10 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-400/15 to-pink-400/15 rounded-full blur-3xl dark:from-purple-600/10 dark:to-pink-600/10 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Subtitle */}
            <motion.div className="inline-block">
              <span className="px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full border border-blue-200 dark:border-blue-800">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-900 leading-tight">
                <span className="block text-gray-900 dark:text-white">Dharshan R</span>
                <span className="block bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-600 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-300 bg-clip-text text-transparent">Full Stack Developer</span>
              </h1>
            </div>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed">
              I build scalable, responsive, and production-ready web applications. Specializing in React, Java, and modern backend architecture with a focus on performance and user experience.
            </motion.p>

            {/* Stats Row */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-6 py-4 border-y border-gray-200 dark:border-gray-800">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">3+</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Projects Delivered</p>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">2+</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Years Learning</p>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">10+</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Tech Stack</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 inline-flex items-center gap-2 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  View My Work
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="/Dharshan_resume (1).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-300 inline-flex items-center gap-2"
              >
                <Download size={18} />
                Get Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 pt-4">
              <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Connect:</span>
              <a
                href="https://github.com/Dharshan-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group"
                aria-label="GitHub"
              >
                <Github size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/dharshan-r-5b6b91342/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Visual - Code/Design Element */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:flex flex-col gap-4"
          >
            {/* Floating Code Card */}
            <motion.div
              animate={{ y: [-20, 20, -20] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-900 dark:to-black rounded-2xl p-6 border border-slate-700 dark:border-slate-800 shadow-2xl">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <code className="text-sm font-mono text-green-400">
                  <div>&lt;Developer</div>
                  <div className="ml-4">skills=&#123;['React', 'Java',</div>
                  <div className="ml-4">'Performance']&#125;</div>
                  <div className="ml-4">passionate=&#123;true&#125;</div>
                  <div>&gt;</div>
                </code>
              </div>
            </motion.div>

            {/* Decorative Element */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-600/10 dark:to-cyan-600/10 rounded-xl p-4 border border-blue-200 dark:border-blue-800/50 text-center"
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">⚡</div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Fast Performance</p>
              </motion.div>
              <motion.div
                animate={{ rotate: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-600/10 dark:to-pink-600/10 rounded-xl p-4 border border-purple-200 dark:border-purple-800/50 text-center"
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">🎨</div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Clean Design</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        variants={scrollVariants}
        animate="animate"
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-sm font-medium">Explore more</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
