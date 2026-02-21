import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Programming Languages',
    items: ['Java', 'Python', 'JavaScript', 'SQL'],
  },
  {
    title: 'Frontend',
    items: ['React.js', 'Vite', 'Tailwind CSS', 'HTML5', 'Responsive Design'],
  },
  {
    title: 'Backend',
    items: ['REST API Fundamentals'],
  },
  {
    title: 'Database',
    items: ['MySQL'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'VS Code', 'Vite', 'Firebase','Vercel'],
  },
  {
    title: 'Core Concepts',
    items: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'DBMS'],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-12"
        >
          Skills
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-primary-light dark:text-primary-dark mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full text-sm bg-primary-light/10 dark:bg-primary-dark/20 text-primary-light dark:text-primary-dark font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
