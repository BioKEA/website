import Head from 'next/head'
import Footer from '../components/Footer'
// Import other necessary components like Header/Navbar if applicable

export default function Investors() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Investors - BioKEA</title>
        <meta name="description" content="Information for investors regarding BioKEA's pre-seed round." />
        {/* Add other meta tags as needed */}
      </Head>

      {/* Optional: Add Header/Navbar component here */}

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Investors</h1>
        <p className="text-lg text-gray-300 mb-4">
          Information regarding our open pre-seed round, one-pager download, and contact form will be available here soon.
        </p>
        {/* Placeholder for: One-pager download, pre-seed round details, contact form */}

        {/* Example: Placeholder contact form */}
        <div className="mt-12 p-8 bg-gray-800 rounded-lg">
           <h2 className="text-2xl font-bold mb-4">Contact Investor Relations</h2>
           <p>
             Reach out to <a href="mailto:contact@biokea.ai">contact@biokea.ai</a>, we'd love to hear from you. We need your help changing the world!
           </p>
        </div>
      </main>

      <Footer />
    </div>
  )
} 