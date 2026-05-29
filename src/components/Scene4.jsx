import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SceneChrome } from './SceneChrome'

export default function Scene4({onNext}){
  const [count,setCount] = useState(0)

  return (
    <SceneChrome
      kicker="Scene IV · the heart catch"
      title="Catch the love before it floats away"
      subtitle="A playful little game, but the whole scene should still feel luxurious. Keep the hearts moving, glowing, and slightly dramatic."
    >
      <div className="w-full max-w-[840px]">
        <div className="glass rounded-[28px] p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="section-label">Hearts collected</div>
            <div className="text-pink-100 font-medium">{count}/15</div>
          </div>
          <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,79,139,0.10),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] min-h-[420px]">
            {[...Array(12)].map((_,i)=> {
              const left = Math.random()*90
              const delay = Math.random()*2
              const size = 38 + Math.random() * 18
              return (
                <motion.button key={i} onClick={()=>setCount(c=>Math.min(15,c+1))} initial={{y:-50, opacity:0.85}} animate={{y:['-70px','82vh'], x:[0, Math.sin(i) * 18], rotate:[0, 18, -18, 0]}} transition={{duration:5+Math.random()*3,delay,repeat:Infinity,ease:'linear'}} style={{left:`${left}%`, width:size, height:size}} className="absolute rounded-full border border-white/10 bg-gradient-to-br from-pink-400 via-pink-500 to-rose-200 shadow-[0_12px_28px_rgba(255,79,139,0.28)] flex items-center justify-center text-[18px]">❤️</motion.button>
              )
            })}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/45 to-transparent" />
          </div>
        </div>
      </div>
      {count>=15 ? (
        <div className="glass rounded-3xl p-5 sm:p-6 max-w-2xl">
          <div className="section-label mb-3">Completed</div>
          <div className="text-lg sm:text-xl text-white/90 leading-8">You've successfully collected all the love I have for you ❤️</div>
          <button onClick={onNext} className="accent-btn mt-5">Read My Heart</button>
        </div>
      ) : (
        <div className="text-white/65 text-sm sm:text-base">Tap the hearts as they drift. The higher the contrast, the more alive the scene feels.</div>
      )}
    </SceneChrome>
  )
}
