import { useState } from 'react'
import Head from 'next/head'

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Here you would typically integrate with your email service
    // For now, we'll just log the data
    console.log('Sending email to frederik@biokea.ai')
    console.log('Form data:', formData)
    
    // You can integrate with services like SendGrid, AWS SES, or your own email server
    try {
      // Add your email sending logic here
      alert('Thank you for your message! We will get back to you soon.')
      setFormData({ email: '', message: '' })
    } catch (error) {
      alert('There was an error sending your message. Please try again.')
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
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
} 