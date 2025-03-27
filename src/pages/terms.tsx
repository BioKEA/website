import Head from 'next/head'

export default function Terms() {
  return (
    <div className="min-h-screen pt-20">
      <Head>
        <title>Terms of Service | BioKEA.ai</title>
        <meta name="description" content="BioKEA.ai Terms of Service" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

          <section className="mb-8">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using BioKEA.ai's services, you agree to be bound by these Terms of Service 
              and all applicable laws and regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2>2. Service Description</h2>
            <p>
              BioKEA.ai provides AI-powered biological research tools and services. We reserve the right 
              to modify or discontinue any aspect of our services at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2>3. User Responsibilities</h2>
            <ul>
              <li>Maintain accurate account information</li>
              <li>Protect account credentials</li>
              <li>Use services in compliance with applicable laws</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>4. Data Usage</h2>
            <p>
              You retain ownership of your research data. By using our services, you grant us a license 
              to process and analyze your data as necessary to provide our services.
            </p>
          </section>

          <section className="mb-8">
            <h2>5. Limitation of Liability</h2>
            <p>
              BioKEA.ai is provided "as is" without warranties of any kind. We are not liable for any 
              damages arising from the use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2>6. Contact Information</h2>
            <p>
              For legal inquiries, please contact:<br />
              Email: legal@biokea.ai<br />
              Address: 123 Innovation Drive, San Francisco, CA 94105
            </p>
          </section>
        </div>
      </main>
    </div>
  )
} 