import Head from 'next/head'
import Footer from '../components/Footer'

export default function DropletEDNA() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Droplet eDNA - BioKEA</title>
        <meta name="description" content="BioKEA's Droplet division offers end-to-end environmental DNA (eDNA) services." />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-4 mb-8">
          <img 
            src="/assets/images/Pillar3-Droplet.png" 
            alt="Droplet eDNA Pillar Icon"
            className="h-20 w-auto" />
          <h1 className="text-4xl font-bold">Droplet eDNA</h1>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-12 mt-12">
          <p className="text-xl text-gray-300">
            BioKEA's Droplet division delivers end-to-end environmental DNA (eDNA) insight, from field surveys to data analysis, enabling powerful biodiversity monitoring and ecological research.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-900/30 to-yellow-500/30 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Field → Lab → Analysis Pipeline</h2>
            <p className="text-gray-400 text-center">[Placeholder for pipeline description/graphic]</p>
        </div>

        <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-900/30 to-yellow-500/30 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Case Studies</h2>
            <p className="text-gray-400 text-center">[Placeholder for eDNA case studies]</p>
        </div>

        <div className="text-center mb-12"> 
            <a
            href="https://www.dropletedna.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-yellow-500 hover:from-blue-600 hover:to-yellow-600 rounded-lg text-lg font-semibold transition-all"
            >
            Visit External Droplet Site &raquo;
            </a>
        </div>
      </main>

      <Footer />
    </div>
  )
} 