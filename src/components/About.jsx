import { motion } from 'framer-motion'

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800/50"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed"
        >
          <p>
            I am a 3rd-year B.Tech Information Technology student with hands-on experience in building modern web applications using React and JavaScript.
          </p>
          <p>
            With internship experience at Test Yantra and 150+ LeetCode problems solved, I focus on writing clean, modular, and scalable code.
          </p>
          <p>
            Currently expanding my expertise in backend development with Spring Boot and RESTful architecture.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
