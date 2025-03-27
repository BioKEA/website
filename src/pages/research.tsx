import Head from 'next/head'

export default function Research() {
  return (
    <div className="min-h-screen pt-20">
      <Head>
        <title>Research | BioKEA.ai</title>
        <meta name="description" content="BioKEA.ai Research and Publications" />
      </Head>

      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Our Research</h1>
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Add research content here */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-900/50 to-yellow-500/50">
            <p className="text-xl leading-relaxed">
              BioKEA's research team is focused on advancing the field of computational biology through innovative AI approaches.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
} 