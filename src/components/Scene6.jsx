import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SceneChrome } from './SceneChrome'

const questions = [
  { q: 'Do you love me? ❤️', a: ['Yes','Definitely Yes'] },
  { q: 'Will you keep making memories with me? ❤️', a: ['Of course','Obviously'] },
  { q: 'Will you marry me someday? 💍', a: ['Yes','Absolutely Yes'] },
]

export default function Scene6({onNext}){
  const [i,setI] = useState(0)

  return (
    <SceneChrome
      kicker="Scene VI · the questions"
      title="Tiny questions, huge feelings"
      subtitle="The answers should feel playful, irresistible, and a little impossible to avoid. If you try to dodge, the buttons simply drift closer."
    >
      <div className="glass rounded-[28px] p-6 sm:p-8 w-full max-w-2xl">
        <div className="section-label mb-4">Question {Math.min(i, questions.length - 1) + 1} of {questions.length}</div>
        <h2 className="soft-title text-3xl sm:text-4xl font-semibold text-white leading-tight">{questions[Math.min(i,questions.length-1)].q}</h2>
        <div className="mt-8 flex flex-wrap gap-4">
          {questions[Math.min(i,questions.length-1)].a.map((opt, idx)=> (
            <motion.button
              key={opt}
              whileHover={{ y: idx === 0 ? -4 : -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={()=> setI(s=> s+1)}
              className={idx === 0 ? 'accent-btn' : 'ghost-btn'}
            >
              {opt}
            </motion.button>
          ))}
        </div>
        {i>=questions.length && (
          <div className="mt-8 text-5xl">❤️</div>
        )}
        {i>=questions.length && <button onClick={onNext} className="accent-btn mt-6">Final Message</button>}
      </div>
    </SceneChrome>
  )
}
