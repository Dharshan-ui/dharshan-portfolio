import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/Dharshan-ui',
    label: 'GitHub',
    color: 'hover:text-gray-700 dark:hover:text-gray-300'
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/dharshan-r-5b6b91342/',
    label: 'LinkedIn',
    color: 'hover:text-blue-600 dark:hover:text-blue-400'
  },
  {
    icon: Mail,
    href: 'mailto:dharshanvva16@gmail.com',
    label: 'Email',
    color: 'hover:text-red-600 dark:hover:text-red-400'
  },
]

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 relative">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/50 dark:to-blue-900/10 pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <a href="#" className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Dharshan R
            </a>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Full Stack Developer | Problem Solver | Continuous Learner
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-xs">
              Building elegant solutions for complex problems.
            </p>
          </motion.div>

          {/* Navigation links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social and CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Connect
            </h3>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((link) => {
                const IconComponent = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={`p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 ${link.color} transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-slate-700`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
            <a
              href="mailto:dharshanvva16@gmail.com"
              className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all text-sm"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-slate-700 to-transparent my-8 md:my-12" />

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>by Dharshan R | © {currentYear} All rights reserved</span>
          </div>
          
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>

        {/* Subtle tech stack indicator */}
        <div className="pb-4 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-600">
            Crafted with React, Vite, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
