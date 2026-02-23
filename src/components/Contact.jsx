import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, ArrowRight } from 'lucide-react'

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'dharshanvva16@gmail.com',
    href: 'mailto:dharshanvva16@gmail.com',
    description: 'Send me a message directly',
    color: 'from-red-100 to-pink-50 dark:from-red-900/30 dark:to-pink-800/30',
    iconColor: 'text-red-600 dark:text-red-400',
    bgIcon: 'bg-red-100 dark:bg-red-900/30',
    borderColor: 'border-red-200 dark:border-red-800/30'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect with me',
    href: 'https://www.linkedin.com/in/dharshan-r-5b6b91342/',
    description: 'Let\'s connect professionally',
    color: 'from-blue-100 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-800/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
    bgIcon: 'bg-blue-100 dark:bg-blue-900/30',
    borderColor: 'border-blue-200 dark:border-blue-800/30'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'View my projects',
    href: 'https://github.com/Dharshan-ui',
    description: 'Check out my code and projects',
    color: 'from-gray-100 to-slate-50 dark:from-gray-900/30 dark:to-slate-800/30',
    iconColor: 'text-gray-700 dark:text-gray-400',
    bgIcon: 'bg-gray-100 dark:bg-gray-900/30',
    borderColor: 'border-gray-200 dark:border-gray-800/30'
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

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800 relative overflow-hidden"
    >
      {/* Background gradient element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 dark:from-blue-400 dark:via-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Whether you have a question or just want to connect, feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {contacts.map((contact) => {
            const IconComponent = contact.icon
            return (
              <motion.a
                key={contact.label}
                variants={itemVariants}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ y: -8 }}
                className={`group p-6 rounded-2xl bg-gradient-to-br ${contact.color} border ${contact.borderColor} shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                <div className={`${contact.bgIcon} p-4 w-fit rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-6 h-6 ${contact.iconColor}`} />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">
                  {contact.label}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {contact.description}
                </p>
                <p className="font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2 group-hover:gap-3 transition-all">
                  {contact.value}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </p>
              </motion.a>
            )
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 dark:from-blue-700 dark:via-cyan-700 dark:to-blue-700 rounded-2xl p-8 sm:p-12 text-white text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/20 rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to collaborate?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              I'm excited about opportunities where I can contribute my frontend development expertise
              and grow as a full-stack engineer. Let's create something impactful together.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:dharshanvva16@gmail.com"
                className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2 group"
              >
                Get In Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://github.com/Dharshan-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white/20 hover:bg-white/30 border border-white/30 hover:border-white/50 text-white font-bold rounded-lg transition-all flex items-center gap-2 group"
              >
                View GitHub
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Response time note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center text-gray-600 dark:text-gray-400 text-sm"
        >
          <p>✨ I usually respond within 24 hours</p>
        </motion.div>
      </div>
    </section>
  )
}
