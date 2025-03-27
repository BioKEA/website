import Head from 'next/head'
import Team from '../components/Team'

export default function TeamPage() {
  return (
    <div className="min-h-screen pt-20">
      <Head>
        <title>Our Team | BioKEA.ai</title>
        <meta name="description" content="Meet the BioKEA.ai team" />
      </Head>
      <Team />
    </div>
  )
} 