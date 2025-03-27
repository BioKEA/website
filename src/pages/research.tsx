import Head from 'next/head'

export default function Research() {
  return (
    <div className="min-h-screen pt-20">
      <Head>
        <title>Research | BioKEA.ai</title>
        <meta name="description" content="BioKEA.ai Research and Publications" />
      </Head>

      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Research</h1>
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Add research content here */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-900/50 to-purple-900/50">
            <h2 className="text-xl font-bold mb-4">Latest Publications</h2>
            <p className="text-gray-300">Exploring the frontiers of AI in biological research</p>
          </div>
        </div>
      </main>
    </div>
  )
} 