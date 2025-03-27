import { motion } from 'framer-motion'

const projects = [
  {
    title: "AI-Powered Research",
    description: "Accelerating biological discoveries through advanced machine learning",
    icon: "🧬",
  },
  {
    title: "Open Science",
    description: "Fostering collaboration and knowledge sharing in the scientific community",
    icon: "🔬",
  },
  // Add more projects
]

export default function Projects() {
  return (
    <section className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{project.icon}</div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 