import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Particles from './Particles'

const lines = [
  'Hey Bebuuuu ❤️',
  "Today isn't just another day...",
  "It's been 2 amazing months with you.",
  'And I made something special for you.',
  'Ready?'
]

export default function Intro({ onStart }){
  const [display, setDisplay] = useState(lines[0])

  useEffect(()=>{
    let mounted = true
    let lineTimer
    let charTimer
    const typeLine = (lineIndex) => {
      if(!mounted || lineIndex >= lines.length) return
      const line = lines[lineIndex]
      let charIndex = 1
      setDisplay(line.slice(0, 1))
      charTimer = setInterval(()=>{
        if(!mounted) return
        charIndex += 1
        setDisplay(line.slice(0, charIndex))
        if(charIndex >= line.length){
          clearInterval(charTimer)
          lineTimer = setTimeout(()=> typeLine(lineIndex + 1), 700)
        }
      }, 45)
    }
    typeLine(0)
    return ()=>{
      mounted = false
      clearInterval(charTimer)
      clearTimeout(lineTimer)
    }
  },[])

  return (
    <div className="scene-shell">
      <Particles />
      <div className="scene-panel glass overflow-hidden">
        <div className="scene-content">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,79,139,0.16),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.08),transparent_20%)]" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-center min-h-[82vh]">
            <div className="max-w-2xl">
              <div className="hero-kicker mb-5">Two months, one story</div>
              <motion.div initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} className="text-3xl sm:text-5xl lg:text-7xl font-semibold soft-title glow">
                <pre className="whitespace-pre-wrap">{display}</pre>
              </motion.div>
              <p className="romantic-copy mt-6 max-w-xl text-[1rem] sm:text-[1.08rem]">
                A tender little world made for the person who turns every ordinary moment into something warm, luminous, and worth holding close.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <motion.button whileHover={{scale:1.03}} whileTap={{scale:0.98}} onClick={onStart} className="accent-btn">
                  Begin Our Story ✨
                </motion.button>
                <div className="ghost-btn inline-flex items-center">Made with love, not templates</div>
              </div>
            </div>
            <div className="relative">
              <div className="photo-card aspect-[4/5]">
                <img src="/src/assets/photos/photo1.jpeg" alt="intro memory" className="h-full w-full object-cover opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
                <div className="absolute left-5 bottom-5 right-5">
                  <div className="section-label mb-3">Hello, my favorite person</div>
                  <div className="text-xl font-medium leading-8 text-white/90">
                    A soft beginning to a love story that keeps getting more beautiful the longer it unfolds.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
