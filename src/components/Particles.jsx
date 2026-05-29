import React from 'react'

export default function Particles(){
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(18)].map((_,i)=> (
          <div key={i} className="absolute w-6 h-6 text-pink-400 opacity-70 animate-float" style={{left: `${Math.random()*100}%`, top: `${Math.random()*100}%`, transform: `translateY(${Math.random()*20}px)`}}>
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#ff4f8b" d="M12 21s-7-4.35-9.2-7.1C-0.1 10.8 3.2 5 8.5 6.4 11 7.2 12 9 12 9s1-1.8 3.5-2.6C20.8 5 24.1 10.8 21.2 13.9 19 16.65 12 21 12 21z" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  )
}
