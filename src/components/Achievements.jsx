import { motion } from 'framer-motion'
import { Award, Target, Zap, Shield } from 'lucide-react'

const achievements = [
  {
    icon: Target,
    title: 'Problem-Solving Excellence',
    stat: '154+',
    description: 'LeetCode problems solved',
    subtext: 'Consistent practice in DSA',
    color: 'from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
    bgIcon: 'bg-blue-100 dark:bg-blue-900/30'
  },
  {
    icon: Award,
    title: 'Algorithm Mastery',
    stat: '1465',
    description: 'Current LeetCode Rating',
    subtext: 'Data structures & algorithms expertise',
    color: 'from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-purple-800/30',
    iconColor: 'text-purple-600 dark:text-purple-400',
    bgIcon: 'bg-purple-100 dark:bg-purple-900/30'
  },
  {
    icon: Shield,
    title: 'Cloud Certification',
    stat: 'AWS & Oracle',
    description: 'Oracle Cloud Infrastructure 2024 & 2025',
    subtext: 'Generative AI certified professional',
    color: 'from-orange-100 to-orange-50 dark:from-orange-900/30 dark:to-orange-800/30',
    iconColor: 'text-orange-600 dark:text-orange-400',
    bgIcon: 'bg-orange-100 dark:bg-orange-900/30'
  },
  {
    icon: Zap,
    title: 'Data Science Foundation',
    stat: 'NASSCOM',
    description: 'Data Science for Beginners',
    subtext: 'Machine learning fundamentals mastered',
    color: 'from-green-100 to-green-50 dark:from-green-900/30 dark:to-green-800/30',
    iconColor: 'text-green-600 dark:text-green-400',
    bgIcon: 'bg-green-100 dark:bg-green-900/30'
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

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 relative overflow-hidden"
    >
      {/* Background gradient element */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-400/10 to-purple-400/10 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 dark:from-purple-400 dark:via-pink-400 dark:to-red-400 bg-clip-text text-transparent">
              Achievements & Certifications
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
            Recognized expertise in problem-solving, cloud technologies, and continuous learning.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {achievements.map((achievement) => {
            const IconComponent = achievement.icon
            return (
              <motion.div
                key={achievement.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`p-6 sm:p-8 rounded-2xl bg-gradient-to-br ${achievement.color} border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-300 group`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`${achievement.bgIcon} p-4 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-7 h-7 ${achievement.iconColor}`} />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                      {achievement.stat}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  {achievement.description}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {achievement.subtext}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Stats summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 pt-12 border-t border-gray-200 dark:border-slate-700"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">4</div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">Total Certifications</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">2025</div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">Latest Achievement</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">154+</div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">Problems Solved</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">100%</div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">Completion Rate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
