import React from 'react'
import { motion } from 'framer-motion'

export function SceneChrome({ kicker, title, subtitle, children, className = '' }){
  return (
    <div className={`scene-shell ${className}`}>
      <div className="scene-panel glass">
        <div className="scene-content">
          <div className="absolute inset-0 pointer-events-none opacity-80">
            <div className="floating-orb" style={{left:'-80px', top:'-50px', width:'220px', height:'220px', background:'radial-gradient(circle, rgba(255,79,139,0.28), rgba(255,79,139,0))'}} />
            <div className="floating-orb" style={{right:'-70px', top:'120px', width:'160px', height:'160px', background:'radial-gradient(circle, rgba(255,255,255,0.12), rgba(255,255,255,0))'}} />
            <div className="floating-orb" style={{left:'16%', bottom:'-90px', width:'240px', height:'240px', background:'radial-gradient(circle, rgba(255,180,205,0.12), rgba(255,180,205,0))'}} />
          </div>
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] items-center">
            <div>
              {kicker ? <div className="hero-kicker mb-5">{kicker}</div> : null}
              {title ? <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="soft-title glow text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight">{title}</motion.h1> : null}
              {subtitle ? <p className="romantic-copy mt-5 max-w-2xl text-[1rem] sm:text-[1.06rem]">{subtitle}</p> : null}
              <div className="mt-8 flex flex-wrap gap-3">{children}</div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[28px] overflow-hidden border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,79,139,0.22),transparent_28%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="section-label w-fit mb-3">A tiny love universe</div>
                  <div className="text-white/85 text-sm sm:text-base leading-7">
                    Every screen should feel like a memory being unfolded, not a page being visited.
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
