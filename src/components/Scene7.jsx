import React from 'react'
import { SceneChrome } from './SceneChrome'

export default function Scene7({onNext}){
  return (
    <SceneChrome
      kicker="Scene VII · the video"
      title="A message from me to you"
      subtitle="This frame should feel like a private premiere: glowing border, soft light, and a video that sits like the centerpiece of the whole experience."
      className="items-start"
    >
      <div className="w-full max-w-4xl">
        <div className="glass rounded-[30px] p-4 sm:p-5">
          <div className="photo-card rounded-[24px] overflow-hidden">
            <video src="/src/assets/videos/WhatsApp%20Video%202026-05-29%20at%2023.32.55.mp4" controls className="w-full aspect-video object-cover bg-black" />
          </div>
          <div className="mt-4 text-white/78 text-center leading-7">Everything I couldn't fit into words.</div>
        </div>
        <div className="mt-6 flex justify-center">
          <button onClick={onNext} className="accent-btn">Finish Our Journey</button>
        </div>
      </div>
    </SceneChrome>
  )
}
