import Head from 'next/head'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Head>
        <title>Contact - BioKEA</title>
        <meta name="description" content="Contact information for BioKEA.ai" />
      </Head>

      <main className="container mx-auto px-4 py-16 flex-grow flex items-center justify-center">
        <div className="text-center p-8 bg-gray-800 rounded-lg shadow-lg">
          <img 
            src="/assets/images/team.png" 
            alt="BioKEA Team / Robot Faces Placeholder"
            className="max-h-40 w-auto mx-auto mb-6 rounded-md" />
          <h1 className="text-3xl font-bold mb-4">biokea.ai</h1>
          <p className="text-xl text-gray-300 mb-2">
            Berkeley, CA, USA
          </p>
          <p className="text-xl text-gray-300">
            Email: <a href="mailto:contact@biokea.ai" className="text-blue-400 hover:text-blue-300 underline">contact@biokea.ai</a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
} 