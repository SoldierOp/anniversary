import React from 'react'
import { PHOTOS } from '../data/photos'
import Particles from './Particles'
import Confetti from './Confetti'
import { SceneChrome } from './SceneChrome'

export default function FinalScene(){
  return (
    <SceneChrome
      kicker="Final scene · forever"
      title="I Love You Bebuuuu ❤️"
      subtitle="A cinematic ending with slow-zoom memories, warm light, and the feeling that this story should keep going beyond the screen."
      className="items-start"
    >
      <Particles />
      <Confetti active={true} />
      <div className="w-full max-w-6xl relative z-10">
        <div className="glass rounded-[32px] p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4 flex-wrap mb-5">
            <div className="section-label">A forever kind of ending</div>
            <div className="text-white/70 text-sm">Slow zoom. Warm glow. Continuous memory.</div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PHOTOS.map((photo)=> (
              <div key={photo.src} className="photo-card aspect-[4/3]">
                <img src={photo.src} loading="lazy" alt={photo.title} className="h-full w-full object-cover transition-transform duration-[12000ms] ease-in-out hover:scale-110" />
                <div className="absolute left-0 right-0 bottom-0 z-10 p-4">
                  <div className="section-label mb-2">{photo.title}</div>
                  <div className="text-white/75 text-sm leading-6">{photo.caption}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-7 text-center">
            <p className="text-lg sm:text-xl text-white/80 leading-8">And countless more memories to come.</p>
            <p className="mt-2 text-white/70">Thank you for being my favorite person.</p>
            <p className="mt-2 text-white/70">Forever your idiot ❤️</p>
          </div>
        </div>
      </div>
    </SceneChrome>
  )
}
