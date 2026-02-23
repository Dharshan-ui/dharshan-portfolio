import { motion } from 'framer-motion'
import { Github, ExternalLink, TrendingUp, Code2 } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Employee Sentiment Analysis',
    category: 'AI/ML',
    description: 'Intelligent system for analyzing employee feedback and identifying sentiment trends',
    longDescription: 'Developed a comprehensive full-stack system that leverages NLP to analyze workplace feedback, identify sentiment patterns, and predict potential attrition risks. Implemented robust data preprocessing, exploratory data analysis, and advanced ML models.',
    impact: 'Enables HR teams to make data-driven decisions on workplace sentiment',
    highlights: [
      'NLP-based sentiment classification with 85%+ accuracy',
      'Advanced data preprocessing & feature engineering',
      'ML model evaluation with cross-validation',
      'Predictive attrition risk modeling',
      'RESTful API for real-time analysis',
    ],
    techStack: ['Python', 'NLP', 'Scikit-learn', 'React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Dharshan-ui/Employee-Sentiment-Analysis',
    liveDemo: null,
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop',
  },
  {
    id: 2,
    title: 'Musify',
    category: 'Full Stack',
    description: 'Modern music streaming platform with dynamic playlists and real-time updates',
    longDescription: 'Built a fully-featured music streaming application showcasing professional React architecture with 15+ reusable components. Features seamless state management, responsive design, and cloud-based audio storage.',
    impact: 'Production-ready streaming platform with 100% uptime on Firebase',
    highlights: [
      '15+ modular React components with composition patterns',
      'Real-time playlist & playback state management',
      'Cloud audio storage via Cloudinary',
      'Custom music player with advanced controls',
      'Fully responsive design (mobile-first)',
      'Firebase Hosting deployment',
    ],
    techStack: ['React.js', 'JavaScript', 'Tailwind CSS', 'Firebase', 'Cloudinary'],
    github: 'https://github.com/Dharshan-ui/Musify',
    liveDemo: 'https://musify-7768b.web.app',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop',
  },
]

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.2 }}
      className="group"
    >
      <div className="relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 h-full">
        {/* Image Section */}
        <div className="relative h-80 overflow-hidden bg-gray-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-80" />

          {/* Category Badge */}
          <div className="absolute top-6 left-6 flex items-center gap-2">
            <span className="px-4 py-2 bg-blue-600/90 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-blue-400/50">
              {project.category}
            </span>
          </div>

          {/* Stats */}
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
            <div className="flex items-center gap-2 text-blue-200 text-sm">
              <TrendingUp size={16} />
              <span>{project.impact}</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 space-y-6">
          {/* Description */}
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {project.longDescription}
          </p>

          {/* Highlights */}
          <div className="space-y-3">
            <h4 className="font-bold text-blue-600 dark:text-blue-400 text-sm uppercase tracking-widest">
              Key Highlights
            </h4>
            <ul className="grid gap-2">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <Code2 size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="space-y-3 border-t border-gray-200 dark:border-gray-800 pt-6">
            <h4 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-widest">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 dark:bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
            >
              <Github size={18} />
              GitHub
            </a>
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/50 to-white dark:from-blue-950/10 dark:to-slate-950 relative overflow-hidden">
      {/* Background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-300/10 to-cyan-300/10 dark:from-blue-600/5 dark:to-cyan-600/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16"
        >
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Featured Work</span>
          <h2 className="text-5xl font-bold mt-4 text-gray-900 dark:text-white">
            Showcase <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-3xl">
            From intelligent ML systems to full-stack web applications, here are some notable projects that demonstrate my technical expertise and problem-solving abilities.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">Interested in seeing more? Check out my GitHub repository</p>
          <a
            href="https://github.com/Dharshan-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
          >
            <Github size={20} />
            Explore More Projects
          </a>
        </motion.div>
      </div>
    </section>
  )
}
