import Head from 'next/head'

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <Head>
        <title>About | BioKEA.ai</title>
        <meta name="description" content="About BioKEA.ai - Revolutionizing biological research with AI" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-16">About BioKEA.ai</h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-300">
                At BioKEA.ai, we're dedicated to accelerating biological research through 
                cutting-edge artificial intelligence. Our platform combines advanced machine 
                learning with deep biological expertise to solve complex challenges in life sciences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-300">
                Founded in San Francisco, California, BioKEA.ai emerged from a collaboration 
                between leading AI researchers and biologists. We recognized the potential of 
                AI to revolutionize how we understand and work with biological systems.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Our Technology</h2>
              <p className="text-gray-300">
                Our proprietary AI models are trained on extensive biological datasets, 
                enabling unprecedented accuracy in protein structure prediction, sequence 
                analysis, and molecular interaction modeling. We're committed to pushing 
                the boundaries of what's possible in computational biology.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Our Values</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Innovation in biological research</li>
                <li>Scientific rigor and reproducibility</li>
                <li>Open collaboration with the research community</li>
                <li>Ethical AI development</li>
                <li>Environmental sustainability</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
} 