import { motion } from 'framer-motion'
import { Code2, Database, Wrench, Lightbulb, GitBranch, Cpu } from 'lucide-react'

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    items: ['Java', 'Python', 'JavaScript', 'SQL'],
    color: 'from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
    bgIcon: 'bg-blue-100 dark:bg-blue-900/30'
  },
  {
    title: 'Frontend',
    icon: Lightbulb,
    items: ['React.js', 'Vite', 'Tailwind CSS', 'HTML5', 'Responsive Design'],
    color: 'from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-purple-800/30',
    iconColor: 'text-purple-600 dark:text-purple-400',
    bgIcon: 'bg-purple-100 dark:bg-purple-900/30'
  },
  {
    title: 'Backend',
    icon: Cpu,
    items: ['REST API Fundamentals'],
    color: 'from-green-100 to-green-50 dark:from-green-900/30 dark:to-green-800/30',
    iconColor: 'text-green-600 dark:text-green-400',
    bgIcon: 'bg-green-100 dark:bg-green-900/30'
  },
  {
    title: 'Database',
    icon: Database,
    items: ['MySQL'],
    color: 'from-orange-100 to-orange-50 dark:from-orange-900/30 dark:to-orange-800/30',
    iconColor: 'text-orange-600 dark:text-orange-400',
    bgIcon: 'bg-orange-100 dark:bg-orange-900/30'
  },
  {
    title: 'Tools',
    icon: Wrench,
    items: ['Git', 'GitHub', 'VS Code', 'Vite', 'Firebase','Vercel'],
    color: 'from-cyan-100 to-cyan-50 dark:from-cyan-900/30 dark:to-cyan-800/30',
    iconColor: 'text-cyan-600 dark:text-cyan-400',
    bgIcon: 'bg-cyan-100 dark:bg-cyan-900/30'
  },
  {
    title: 'Core Concepts',
    icon: Cpu,
    items: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'DBMS'],
    color: 'from-pink-100 to-pink-50 dark:from-pink-900/30 dark:to-pink-800/30',
    iconColor: 'text-pink-600 dark:text-pink-400',
    bgIcon: 'bg-pink-100 dark:bg-pink-900/30'
  },
]

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

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 relative overflow-hidden"
    >
      {/* Background gradient element */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
            A comprehensive toolkit built through hands-on development experience and continuous learning.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className={`p-6 rounded-xl bg-gradient-to-br ${category.color} border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 group`}
              >
                <div className={`${category.bgIcon} p-3 w-fit rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-6 h-6 ${category.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/60 dark:bg-slate-700/60 text-gray-700 dark:text-gray-300 border border-gray-300/50 dark:border-slate-600/50 hover:bg-white dark:hover:bg-slate-700 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 pt-12 border-t border-gray-200 dark:border-slate-700"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">Core Proficiency Metrics</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Languages', value: '4' },
              { label: 'Frontend Frameworks', value: '3' },
              { label: 'Tools & Platforms', value: '6' },
              { label: 'Expertise Years', value: '2+' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
