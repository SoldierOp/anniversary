import React, { useRef, useState, Suspense, lazy } from 'react'
const Intro = lazy(()=> import('./components/Intro'))
const Scene1 = lazy(()=> import('./components/Scene1'))
const Scene2 = lazy(()=> import('./components/Scene2'))
const Scene3 = lazy(()=> import('./components/Scene3'))
const Scene4 = lazy(()=> import('./components/Scene4'))
const Scene5 = lazy(()=> import('./components/Scene5'))
const Scene6 = lazy(()=> import('./components/Scene6'))
const Scene7 = lazy(()=> import('./components/Scene7'))
const SecretPage = lazy(()=> import('./components/SecretPage'))
const FinalScene = lazy(()=> import('./components/FinalScene'))

export default function App(){
  const [scene, setScene] = useState('intro')
  const audioRef = useRef(null)

  const start = ()=>{
    setScene(1)
    setTimeout(()=>{
      if(audioRef.current){
        audioRef.current.src = '/src/assets/music/Tum%20Se%20Hi%20Jab%20We%20Met%20320%20Kbps.mp3'
        audioRef.current.play().catch(()=>{})
      }
    },200)
  }

  return (
    <div>
      <audio ref={audioRef} preload="none" loop />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        {scene === 'intro' && <Intro onStart={start} />}
        {scene === 1 && <Scene1 onNext={()=>setScene(2)} />}
        {scene === 2 && <Scene2 onNext={()=>setScene(3)} />}
        {scene === 3 && <Scene3 onNext={()=>setScene(4)} />}
        {scene === 4 && <Scene4 onNext={()=>setScene(5)} />}
        {scene === 5 && <Scene5 onNext={()=>setScene(6)} />}
        {scene === 6 && <Scene6 onNext={()=>setScene(7)} />}
        {scene === 7 && <Scene7 onNext={()=>setScene('final')} />}
      </Suspense>
      {scene === 'final' && <FinalScene />}

      <button onClick={()=>setScene('secret')} aria-hidden className="fixed left-2 top-2 w-6 h-6 opacity-0">s</button>
      {scene === 'secret' && <SecretPage />}
    </div>
  )
}
