import React, { useEffect, useState } from 'react'

function randomInt(min,max){ return Math.floor(Math.random()*(max-min+1))+min }

export default function Confetti({active=false}){
  const [pieces,setPieces] = useState([])
  useEffect(()=>{
    if(!active) return setPieces([])
    const p = Array.from({length:40}).map(()=>({
      left: Math.random()*100,
      bg: [`#ff4f8b`,'#ffd1e0','#fff0f6','#ffb0c9'][Math.floor(Math.random()*4)],
      rot: randomInt(0,360),
      delay: Math.random()*0.6
    }))
    setPieces(p)
    const t = setTimeout(()=> setPieces([]), 5000)
    return ()=> clearTimeout(t)
  },[active])

  if(!active) return null
  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {pieces.map((c,i)=> (
        <div key={i} style={{left:`${c.left}%`, top:0, transform:`rotate(${c.rot}deg)`}} className="absolute">
          <div style={{background:c.bg}} className="w-3 h-5 rounded-sm animate-fall"/>
        </div>
      ))}
      <style>{`
        .animate-fall{ animation: fall 2.6s linear forwards; }
        @keyframes fall{ to { transform: translateY(100vh) rotate(360deg); opacity: 0 } }
      `}</style>
    </div>
  )
}
