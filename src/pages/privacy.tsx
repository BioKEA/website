import Head from 'next/head'

export default function Privacy() {
  return (
    <div className="min-h-screen pt-20">
      <Head>
        <title>Privacy Policy | BioKEA.ai</title>
        <meta name="description" content="BioKEA.ai Privacy Policy" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <section className="mb-8">
            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including:
            </p>
            <ul>
              <li>Account information (name, email, organization)</li>
              <li>Research data and analysis results</li>
              <li>Usage information and platform analytics</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>2. How We Use Your Information</h2>
            <p>
              We use the collected information to:
            </p>
            <ul>
              <li>Provide and improve our services</li>
              <li>Process your research requests</li>
              <li>Send important updates and notifications</li>
              <li>Maintain platform security</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>3. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your data:
            </p>
            <ul>
              <li>End-to-end encryption for sensitive data</li>
              <li>Regular security audits</li>
              <li>Secure data centers in the United States</li>
              <li>Access controls and authentication</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>4. Contact Information</h2>
            <p>
              For privacy-related inquiries, please contact us at:
            </p>
            <p>
              Email: privacy@biokea.ai<br />
              Address: 123 Innovation Drive, San Francisco, CA 94105
            </p>
          </section>
        </div>
      </main>
    </div>
  )
} 