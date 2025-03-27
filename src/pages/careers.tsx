import Head from 'next/head'

const positions = [
  {
    title: "Senior Machine Learning Engineer",
    department: "AI Research",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Lead the development of novel AI models for biological sequence analysis."
  },
  {
    title: "Computational Biologist",
    department: "Research",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Apply machine learning techniques to solve complex biological problems."
  },
  {
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    description: "Build and maintain our web platform and APIs."
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Shape the future of our AI-powered biological research platform."
  }
]

export default function Careers() {
  return (
    <div className="min-h-screen pt-20">
      <Head>
        <title>Careers | BioKEA.ai</title>
        <meta name="description" content="Join BioKEA.ai - Career opportunities in AI and biological research" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-8">Careers</h1>
          
          <p className="text-xl text-gray-300 text-center mb-16">
            Join us in revolutionizing biological research with AI
          </p>

          <div className="space-y-6">
            {positions.map((position, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-blue-900/30 to-purple-900/30"
              >
                <h2 className="text-2xl font-bold mb-2">{position.title}</h2>
                <div className="flex flex-wrap gap-4 mb-4 text-sm">
                  <span className="px-3 py-1 bg-blue-900/50 rounded-full">
                    {position.department}
                  </span>
                  <span className="px-3 py-1 bg-purple-900/50 rounded-full">
                    {position.location}
                  </span>
                  <span className="px-3 py-1 bg-green-900/50 rounded-full">
                    {position.type}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{position.description}</p>
                <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
} 