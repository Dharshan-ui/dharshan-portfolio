import { motion } from 'framer-motion'

const experience = {
  title: 'Frontend Intern',
  company: 'Test Yantra',
  period: 'Mar 2025 – Apr 2025',
  points: [
    'Built and deployed a production-ready music streaming application',
    'Implemented responsive UI components using React & Tailwind',
    'Integrated Cloudinary for media storage and optimization',
    'Collaborated with QA team for UI validation and workflow improvements',
  ],
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-12"
        >
          Experience
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative pl-8 border-l-2 border-primary-light dark:border-primary-dark"
        >
          <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary-light dark:bg-primary-dark" />
          <div className="space-y-2 pb-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              {experience.title} – {experience.company}
            </h3>
            <p className="text-primary-light dark:text-primary-dark font-medium">
              {experience.period}
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 mt-4">
              {experience.points.map((point, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-primary-light dark:text-primary-dark">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
