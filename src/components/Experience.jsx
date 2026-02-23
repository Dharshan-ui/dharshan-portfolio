import { motion } from 'framer-motion'
import { Briefcase, Calendar, CheckCircle2, Globe } from 'lucide-react'

const experience = {
  role: 'Frontend Engineer Intern',
  company: 'Test Yantra',
  location: 'On-Site',
  period: 'Mar 2025 – Apr 2025',
  description: 'Built and optimized a production-ready music streaming application with modern React best practices and responsive design patterns.',
  achievements: [
    'Built and deployed a production-ready music streaming application with React & modern web technologies',
    'Implemented responsive UI components achieving 100% mobile compatibility using Tailwind CSS',
    'Integrated Cloudinary for intelligent media storage, optimization, and dynamic image transformation',
    'Collaborated with QA team for comprehensive UI testing, validation, and workflow optimization',
  ],
  highlights: [
    'Full-stack feature implementation from UI design to deployment',
    'Real-time user feedback integration and iterative improvements',
    'Cloud-based media processing and optimization',
  ]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  },
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden"
    >
      {/* Background gradient element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Professional growth through real-world project delivery and team collaboration.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Vertical timeline for larger screens */}
          <div className="hidden md:block absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400 dark:from-blue-600 dark:via-cyan-600 dark:to-blue-600" />

          <motion.div
            variants={itemVariants}
            className="md:ml-32 bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Header with icon */}
            <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-b border-gray-200 dark:border-slate-700">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                    <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      {experience.role}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mt-1">
                      {experience.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Meta information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{experience.period}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">{experience.location}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
                {experience.description}
              </p>

              {/* Key Achievements */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full" />
                  Key Achievements
                </h4>
                <ul className="space-y-3">
                  {experience.achievements.map((achievement, index) => (
                    <li key={index} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full" />
                  Impact Areas
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {experience.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800/30"
                    >
                      <p className="text-sm font-semibold text-blue-900 dark:text-blue-300">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline dot (desktop) */}
            <div className="hidden md:flex absolute -left-16 top-12 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-4 border-blue-600 dark:border-blue-400 items-center justify-center">
              <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
            </div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 pt-8 border-t border-gray-200 dark:border-slate-700 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Looking for more experience and opportunities to grow my full-stack development skills.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-lg transition-shadow"
          >
            Let's Connect
          </a>
        </motion.div>
      </div>
    </section>
  )
}
