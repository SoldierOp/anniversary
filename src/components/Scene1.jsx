import React from 'react'
import { motion } from 'framer-motion'
import Particles from './Particles'
import { SceneChrome } from './SceneChrome'

export default function Scene1({onNext}){
  return (
    <SceneChrome
      kicker="Scene I · the celebration"
      title="2 Months To Us Babruuuuuu ❤️"
      subtitle="This should feel like stepping into a velvet-lit memory, where the air is softer, the colors are warmer, and everything is unmistakably about you."
    >
      <button onClick={onNext} className="accent-btn">Continue</button>
      <div className="ghost-btn">our first photo together</div>
    </SceneChrome>
  )
}
