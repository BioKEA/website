import { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import motion with no SSR
const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false }
)

export default function Hero() {
  const [videoFailed, setVideoFailed] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current

    if (video) {
      const handleError = () => {
        console.error("Video failed to load, using fallback image")
        setVideoFailed(true)
      }

      const handleCanPlay = () => {
        setVideoFailed(false)
      }

      video.addEventListener('error', handleError)
      video.addEventListener('canplay', handleCanPlay)

      // If video takes too long to load, use the fallback image
      const timeoutId = setTimeout(() => {
        if (video.readyState === 0) {
          setVideoFailed(true)
        }
      }, 3000)

      return () => {
        video.removeEventListener('error', handleError)
        video.removeEventListener('canplay', handleCanPlay)
        clearTimeout(timeoutId)
      }
    }
  }, [])

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video or fallback image background */}
      {videoFailed ? (
        <img
          src="/assets/videos/videoV1.png"
          alt="BioKEA Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      ) : (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/assets/videos/videoV1.mp4" type="video/mp4" />
        </video>
      )}

      {/* Semi-transparent blue-purple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-yellow-500/30 z-5" />
      <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dark overlay for better text visibility */}

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-yellow-500">
            AI-Powered Science at Scale
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-8">
            Coupling cutting-edge agentic AI frameworks with wet-lab based protocol. Preparing to empower robotics to build the future.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-yellow-500 hover:from-blue-600 hover:to-yellow-600 rounded-lg text-lg font-semibold transition-all">
            Get Started
          </button>
        </MotionDiv>
      </div>
    </section>
  )
}