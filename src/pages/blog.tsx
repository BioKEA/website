import Head from 'next/head'
import Footer from '../components/Footer'

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Blog & Updates - BioKEA</title>
        <meta name="description" content="Latest news, updates, and roadmap milestones from BioKEA." />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Blog & Updates</h1>
        <p className="text-lg text-gray-300 mb-4">
          This section will host company news, blog posts, and roadmap updates, powered by a CMS.
        </p>
        {/* Placeholder for: CMS-driven posts, Roadmap updates moved here */}
         <div className="mt-12 p-8 bg-gray-800 rounded-lg">
           <h2 className="text-2xl font-bold mb-4">Latest Posts</h2>
           <p className="text-gray-400">[Placeholder for blog post list]</p>
        </div>
         <div className="mt-8 p-8 bg-gray-800 rounded-lg">
           <h2 className="text-2xl font-bold mb-4">Updated Roadmap</h2>
           <p className="text-gray-400">[Placeholder for roadmap content, moved from homepage]</p>
        </div>
      </main>

      <Footer />
    </div>
  )
} 