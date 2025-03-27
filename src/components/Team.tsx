import { motion } from 'framer-motion'
import { TeamMember } from '../types'

const teamMembers: TeamMember[] = [
  {
    name: "Sean Jungbluth",
    role: "Co-Founder & CEO",
    image: "/assets/images/profile-sean.png",
    bio: "Sean is a passionate microbial ecologist, oceanographer, and advocate for ML/AI innovation. He is eager to explore the transformative potential of computationally-driven advancements, both within the scientific realm and across various fields."
  },
  {
    name: "Dr. Frederik Schulz",
    role: "Co-Founder & CTO",
    image: "/assets/images/profile-frederik.png",
    bio: "Dr. Frederik Schulz is a microbiologist and expert in using AI/ML for discovery and characterization of novel bacterial, archaeal, and eukaryotic microbes and viruses in complex samples."
  }
]

export default function Team() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Team</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full relative z-10"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-blue-400 mb-4">{member.role}</p>
              <p className="text-gray-300 leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 