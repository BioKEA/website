import Head from 'next/head'

const features = [
  {
    title: "AI-Powered Sequence Analysis",
    description: "Advanced deep learning models for protein and DNA sequence analysis, enabling faster and more accurate predictions.",
    icon: "🧬"
  },
  {
    title: "Structure Prediction",
    description: "State-of-the-art protein structure prediction using our proprietary AI models, trained on extensive biological datasets.",
    icon: "🔬"
  },
  {
    title: "Cloud Computing Integration",
    description: "Seamless integration with major cloud providers for scalable computing power and storage solutions.",
    icon: "☁️"
  },
  {
    title: "Collaborative Research Tools",
    description: "Built-in tools for team collaboration, version control, and research documentation.",
    icon: "👥"
  }
]

export default function Features() {
  return (
    <div className="min-h-screen pt-20">
      <Head>
        <title>Features | BioKEA.ai</title>
        <meta name="description" content="Explore BioKEA.ai's powerful features for biological research" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Platform Features
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="p-8 rounded-xl bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
} 