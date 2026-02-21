import { motion } from 'framer-motion'

const links = [
  { label: '📧 dharshanvva16@gmail.com', href: 'mailto:dharshanvva16@gmail.com' },
  { label: '🔗 LinkedIn', href: 'https://www.linkedin.com/in/dharshan-r-5b6b91342/' },
  { label: '💻 GitHub', href: 'https://github.com/Dharshan-ui' },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900"
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4"
        >
          Let's connect and build something impactful.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 dark:text-gray-400 mb-12"
        >
          Reach out for collaborations, opportunities, or just a friendly chat.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="block px-6 py-4 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-primary-light/10 dark:hover:bg-primary-dark/20 hover:text-primary-light dark:hover:text-primary-dark transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
