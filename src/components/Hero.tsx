import dynamic from 'next/dynamic'

// Dynamically import motion with no SSR
const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false }
)

export default function Hero() {
  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#111827 !important', background: 'none !important' }} // Force override any other backgrounds
    >
      {/* Removed all background image/video attempts */}

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <img
            src="/assets/images/logo2.png"
            alt="BioKEA.ai Logo"
            className="w-48 mx-auto mb-8 invert"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Welcome to BioKEA
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-8">
            Transforming bioinformatics with the power of agent-based AI. Making complex 
            bioinformatics workflows simpler, faster, and more effective.
          </p>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition-colors">
            Get Started
          </button>
        </MotionDiv>
      </div>
    </section>
  )
} 