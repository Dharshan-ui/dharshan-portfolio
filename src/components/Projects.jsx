import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Employee Sentiment Analysis',
    description: 'A machine learning-based project designed to analyze employee feedback and identify sentiment trends for organizational insights.',
    highlights: [
      'NLP-based sentiment scoring',
      'Data preprocessing & feature engineering',
      'Model evaluation and performance analysis',
      'Insight-driven interpretation for HR decision-making',
    ],
    techStack: ['Python', 'Machine Learning', 'Data Analysis'],
    github: 'https://github.com/Dharshan-ui/Employee-Sentiment-Analysis',
    liveDemo: null,
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
  },
  {
    title: 'Musify – Music Streaming Web Application',
    description: 'A fully functional music streaming web application built with modern frontend architecture.',
    highlights: [
      'Modular component-based UI using React',
      'Dynamic state management for playback & playlists',
      'Cloudinary integration for media storage',
      'Fully responsive and optimized UI',
      'Deployed using Firebase Hosting',
    ],
    techStack: ['React', 'Tailwind CSS', 'Firebase', 'Cloudinary'],
    github: 'https://github.com/Dharshan-ui/Musify',
    liveDemo: 'https://musify-7768b.web.app',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=400&fit=crop',
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800/50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-12"
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group rounded-xl overflow-hidden bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Key Highlights</h4>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <span className="text-primary-light dark:text-primary-dark">•</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded bg-primary-light/10 dark:bg-primary-dark/20 text-primary-light dark:text-primary-dark"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-light dark:text-primary-dark font-semibold hover:underline"
                  >
                    GitHub →
                  </a>
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark font-semibold hover:underline"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
