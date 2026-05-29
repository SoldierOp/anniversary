import React from 'react'
import { PHOTOS } from '../data/photos'
import { motion } from 'framer-motion'
import Particles from './Particles'
import { SceneChrome } from './SceneChrome'

export default function Scene3({onNext}){
  return (
    <SceneChrome
      kicker="Scene III · a timeline of us"
      title="Moments that became music"
      subtitle="A horizontal timeline that feels like walking through a gallery of the best parts of us. Every card should feel like a memory on display."
    >
      <Particles />
      <div className="w-full overflow-x-auto py-2">
        <div className="flex gap-5 pb-2 pr-2">
          {PHOTOS.map((photo)=> (
            <motion.div key={photo.src} whileHover={{ y: -8, scale: 1.02 }} className="photo-card w-[min(80vw,320px)] flex-shrink-0">
              <img src={photo.src} alt={photo.title} loading="lazy" className="h-[260px]" />
              <div className="absolute left-0 right-0 bottom-0 z-10 p-4">
                <div className="section-label mb-2">Memory</div>
                <div className="text-white text-lg font-medium">{photo.title}</div>
                <div className="mt-2 text-white/72 text-sm leading-6">{photo.caption}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <button onClick={onNext} className="accent-btn">One More Challenge ❤️</button>
    </SceneChrome>
  )
}
