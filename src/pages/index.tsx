import Head from 'next/head'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Timeline from '../components/Timeline'
import Updates from '../components/Updates'
import Team from '../components/Team'
import Footer from '../components/Footer'

const features = [
  {
    title: "Agent-Based Framework",
    description: "Our unique approach brings together a suite of intelligent agents to handle everything from data ingestion to complex analyses.",
    icon: "🤖"
  },
  {
    title: "Customizable & Scalable",
    description: "BioKEA's platform is designed to grow with your research needs, from small datasets to large-scale projects.",
    icon: "📈"
  },
  {
    title: "DeSci Data Access",
    description: "Access high-value, curated biological datasets that fuel decentralized science and collaboration.",
    icon: "🧬"
  },
  {
    title: "Smarter Discovery",
    description: "Our platform continuously learns from your data, optimizing performance and ensuring the highest accuracy.",
    icon: "🔍"
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>BioKEA – an AI-driven Bioinformatics OS</title>
        <meta name="description" content="BioKEA integrates agent-based bioinformatics, eDNA solutions via Droplet, and AI-enhanced publishing through Agentis." />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "BioKEA",
              "url": "https://biokea.ai",
              "logo": "https://biokea.ai/assets/images/logo2.png",
              "description": "BioKEA is an AI-driven Bioinformatics OS integrating agent-based bioinformatics, eDNA solutions, and AI-enhanced publishing.",
              "sameAs": [
                "https://twitter.com/biokea",
                "https://github.com/biokea"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://biokea.ai",
              "name": "BioKEA – an AI-driven Bioinformatics OS",
              "description": "BioKEA integrates agent-based bioinformatics, eDNA solutions via Droplet, and AI-enhanced publishing through Agentis."
            })
          }}
        />
      </Head>

      <main>
        {/* Use the Hero component instead of defining the hero section inline */}
        <Hero />

        {/* AI-Driven Bioinformatics Section */}
        <section className="py-20 bg-gradient-to-b from-black to-blue-900/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">AI-Driven Bioinformatics</h2>
              <p className="text-xl text-gray-300">
                We use advanced agent-based AI to automate and enhance every step of the bioinformatics process.
                Our framework of intelligent agents works together seamlessly, processing raw data, running analysis,
                and validating results—all with the goal of bringing you clearer insights, faster discoveries,
                and more reliable outcomes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-blue-900/30 to-yellow-500/30 backdrop-blur-sm"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DeSci Section */}
        <section className="py-20 bg-gradient-to-b from-blue-900/20 to-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">High-Value Curated Datasets for DeSci</h2>
              <div className="bg-gradient-to-br from-blue-900/30 to-yellow-500/30 rounded-2xl p-8">
                <p className="text-xl text-gray-300 leading-relaxed">
                  BioKEA offers access to high-value, curated biological datasets that are vital for the
                  DeSci (Decentralized Science) community. These datasets, carefully curated from cutting-edge
                  research, are designed to support the open exchange of scientific knowledge and empower
                  decentralized researchers across the globe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* eDNA Solutions Section */}
        <section id="edna" className="py-20 bg-gradient-to-b from-black to-blue-900/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">eDNA Solutions</h2>
              <p className="text-xl text-gray-300">
                From backyard biodiversity to blue-water research cruises, BioKEA's Droplet division delivers end-to-end environmental DNA (eDNA) insight.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-900/30 to-yellow-500/30 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Field Surveys</h3>
                <p className="text-gray-300">Study design, sampling logistics, and on-site collection protocols for any habitat.</p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-900/30 to-yellow-500/30 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Laboratory Analyses</h3>
                <p className="text-gray-300">Wet-lab workflows for species ID, community profiling, trophic-link tracing, and more.</p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-900/30 to-yellow-500/30 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Data Analysis & Interpretation</h3>
                <p className="text-gray-300">Phylogenetics, diversity metrics, indicator-species detection, and custom ecological models.</p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://www.dropletedna.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-yellow-500 hover:from-blue-600 hover:to-yellow-600 rounded-lg text-lg font-semibold transition-all"
              >
                Explore Droplet eDNA &raquo;
              </a>
            </div>
          </div>
        </section>

        {/* AI-Enhanced Publishing Section */}
        <section id="agentis" className="py-20 bg-gradient-to-b from-blue-900/20 to-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">AI-Enhanced Publishing</h2>
              <p className="text-xl text-gray-300">
                Agentis, BioKEA's open-access journal suite, reimagines peer review with AI co-reviewers – accelerating scientific communication while preserving rigor.
              </p>
            </div>

            <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-900/30 to-yellow-500/30 rounded-2xl p-8 mb-12">
              <ul className="space-y-4 text-gray-300 text-lg">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span><strong className="text-white">Open Access</strong> – Research is free to read, download, and share.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span><strong className="text-white">AI-Enhanced Review</strong> – Intelligent agents assist expert reviewers for faster decisions.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span><strong className="text-white">Community-Driven</strong> – Transparent governance and grassroots spirit.</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <a
                href="https://agentisj.pages.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-yellow-500 hover:from-blue-600 hover:to-yellow-600 rounded-lg text-lg font-semibold transition-all"
              >
                Visit Agentis Journals &raquo;
              </a>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Let's Build the Future of Bioinformatics Together</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Whether you're a researcher, institution, or organization, we're here to support your journey
              with smart, scalable solutions that accelerate your work and lead to more meaningful discoveries.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-yellow-500 hover:from-blue-600 hover:to-yellow-600 rounded-lg text-lg font-semibold transition-all">
              Join Us Today
            </button>
          </div>
        </section>

        <Projects />
        <Timeline />
        <Updates />
        <Team />
      </main>

      <Footer />
    </div>
  )
}