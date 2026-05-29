import React, { useEffect, useState } from 'react'
import { PHOTOS } from '../data/photos'
import { motion } from 'framer-motion'
import Confetti from './Confetti'
import { SceneChrome } from './SceneChrome'

function shuffle(a){
  return a.map((v,i)=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(x=>x[1])
}

export default function Scene2({onNext}){
  const [board,setBoard] = useState([])
  const [message,setMessage] = useState('')
  const [celebrate,setCelebrate] = useState(false)

  useEffect(()=>{ setBoard(shuffle(PHOTOS.slice(0,4).map(photo => photo.src))) },[])

  function swap(i,j){
    const b = board.slice();
    [b[i],b[j]] = [b[j],b[i]]
    setBoard(b)
  }

  function check(){
    const target = PHOTOS.slice(0,4).map(photo => photo.src)
    if(board.join(',') === target.join(',')){
      setMessage('Just like these memories, everything feels complete with you.')
      setCelebrate(true)
      setTimeout(()=> setCelebrate(false), 3500)
    }
  }

  useEffect(()=>{ check() },[board])

  return (
    <SceneChrome
      kicker="Scene II · memory challenge"
      title="Put the memory back together"
      subtitle="A cute little puzzle, but presented like a framed keepsake. Tap the tiles to swap them until the story feels complete."
    >
      <Confetti active={celebrate} />
      <div className="w-full max-w-[560px]">
        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          {board.map((src,idx)=> (
            <motion.button key={src} type="button" whileHover={{scale:1.02}} whileTap={{scale:0.98}} onClick={()=>{
              const next = (idx+1)%board.length
              swap(idx,next)
            }} className="photo-card aspect-square text-left">
              <img src={src} alt={`memory tile ${idx+1}`} loading="lazy" />
            </motion.button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3 max-w-xl">
        {message ? (
          <div className="glass rounded-3xl p-5 text-white/90 leading-7 border border-pink-400/20">
            <div className="section-label mb-3">Solved</div>
            <div className="text-lg sm:text-xl">{message}</div>
            <div className="mt-4">
              <button onClick={onNext} className="accent-btn">See Our Moments</button>
            </div>
          </div>
        ) : (
          <div className="text-white/65 text-sm sm:text-base">Tap tiles to swap them. The goal is not to rush, but to make the arrangement feel right.</div>
        )}
      </div>
    </SceneChrome>
  )
}
