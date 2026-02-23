import { motion } from 'framer-motion'
import { Code2, Brain, Zap, Target } from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    title: 'Full Stack Development',
    description: 'Building end-to-end solutions with React, Java, and modern frameworks',
  },
  {
    icon: Brain,
    title: 'Problem Solving',
    description: '150+ LeetCode problems solved with strong DSA fundamentals',
  },
  {
    icon: Zap,
    title: 'Performance First',
    description: 'Optimizing for speed, scalability, and user experience',
  },
  {
    icon: Target,
    title: 'Clean Architecture',
    description: 'Writing modular, maintainable code following best practices',
  },
]

export default function About() {
  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 dark:from-blue-600/5 dark:to-cyan-600/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16"
        >
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">About</span>
          <h2 className="text-5xl font-bold mt-4 text-gray-900 dark:text-white">
            Crafting Quality <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Software</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-3xl leading-relaxed">
            I'm a passionate Full Stack Developer focused on building scalable, responsive applications. With a solid foundation in Data Structures and modern web technologies, I deliver production-ready solutions that combine technical excellence with great user experience.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - More Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Background</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I am a 3rd-year B.Tech Information Technology student with hands-on experience in modern web development. During my internship at Test Yantra, I developed production-ready applications and gained practical insights into real-world development practices.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Philosophy</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I believe in writing clean, maintainable code that scales. Every project is an opportunity to solve problems efficiently and create value. I continuously learn and adapt to stay current with modern technologies.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Current Focus</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Expanding expertise in backend development with Spring Boot, microservices architecture, and advancing system design skills. Deepening proficiency in React and exploring AI/ML applications.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: idx * 0.1 }}
                  className="group p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="p-3 w-fit rounded-lg bg-blue-100 dark:bg-blue-900/30 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-3 gap-4 pt-16 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">150+</div>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">LeetCode Problems</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">3+</div>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">Projects Deployed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">10+</div>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">Technologies</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
