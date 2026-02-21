import { motion } from 'framer-motion'

const achievements = [
  '154+ LeetCode problems solved',
  'LeetCode Rating: 1465',
  'Oracle Cloud Infrastructure 2024 & 2025 Generative AI Certified',
  'Data Science for Beginners – NASSCOM',
]

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800/50"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-12"
        >
          Achievements
        </motion.h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {achievements.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm"
            >
              <span className="text-2xl">🏆</span>
              <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
