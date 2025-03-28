import Head from 'next/head'

export default function Platform() {
  return (
    <div className="min-h-screen pt-20">
      <Head>
        <title>Platform | BioKEA.ai</title>
        <meta name="description" content="BioKEA.ai Platform Features and Capabilities" />
      </Head>

      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">BioKEA Platform</h1>
        <div className="p-6 rounded-xl bg-gradient-to-br from-blue-900/50 to-yellow-500/50">
          <p className="text-xl leading-relaxed">
            Our platform is designed to make complex bioinformatics workflows accessible to researchers of all levels.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Add platform features here */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-900/50 to-purple-900/50">
            <h2 className="text-xl font-bold mb-4">AI-Powered Analysis</h2>
            <p className="text-gray-300">Advanced machine learning algorithms for biological data analysis</p>
          </div>
          {/* Add more features */}
        </div>
      </main>
    </div>
  )
} 