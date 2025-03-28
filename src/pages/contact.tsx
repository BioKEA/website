import { useState } from 'react'
import Head from 'next/head'

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  })
  const [status, setStatus] = useState({
    type: '', // 'success' or 'error'
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [testEmailUrl, setTestEmailUrl] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })
    setTestEmailUrl('')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you for your message! We will get back to you soon.'
        })
        
        // If using a test account, show the preview URL
        if (data.testAccount && data.testAccount.previewUrl) {
          setTestEmailUrl(data.testAccount.previewUrl)
        }
        
        setFormData({ email: '', message: '' })
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'There was an error sending your message. Please try again.'
        })
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'There was an error sending your message. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen pt-20">
      <Head>
        <title>Contact | BioKEA.ai</title>
        <meta name="description" content="Contact BioKEA.ai - Located in California" />
      </Head>

      <main className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Location</h2>
              <p className="text-gray-300 mb-4">
                BioKEA.ai<br />
                123 Innovation Drive<br />
                San Francisco, CA 94105<br />
                United States
              </p>
              <p className="text-gray-300">
                Email: frederik@biokea.ai<br />
                Phone: +1 (555) 123-4567
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-3 rounded-lg bg-gray-900 border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full p-3 rounded-lg bg-gray-900 border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              {status.message && (
                <div className={`p-3 rounded-lg ${status.type === 'success' ? 'bg-green-900/50 text-green-300' : 'bg-red-900/50 text-red-300'}`}>
                  {status.message}
                </div>
              )}
              
              {testEmailUrl && (
                <div className="p-3 rounded-lg bg-blue-900/50 text-blue-300">
                  <p className="mb-2">Test email sent! View it here:</p>
                  <a 
                    href={testEmailUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-300 underline hover:text-blue-200 break-all"
                  >
                    {testEmailUrl}
                  </a>
                </div>
              )}
              
              <button
                type="submit"
                className={`w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-yellow-500 hover:from-blue-600 hover:to-yellow-600 rounded-lg transition-all flex justify-center items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
} 