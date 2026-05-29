import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { SceneChrome } from './SceneChrome'

const letter = `So so so mere bebuuuuuuuuuuuuu meriiiiiiii jaaannnnn mera jigar
Mo premaaaaaaaaa mo jeeevanaaaaaa mo waifuuuuuuu
2 months innn meriiiiiiii jaaannnnn and happiest 2 months of my life kyaaa majaaa aaa rahaa haiii.
Aisa waifuuuuuuuuuuuuuuuuuu milaa haiii mujheee jooo itnaaa caring itnaa jyadaa aahhhh iloveeeeuuuuuuuuuuuuuouuuuuuuuuuuuuuu
Eachh and every dayyy i loveyouuuuuuuuuuuuuu moreee merii jaaannnnn.
I don't know kitna express kar pata hunnnn aaapkoo
Buttt itnaaa boll sakta hunn laillaaa majnu ek dusre se itna pyaar nahi Kiya hoga jitna mai aapse karta huuuu meriiiiiiii jaaannnnn.
I ammmm misiiing youuuu so muchhhhhhhhh meriiiii jaaannnn pureee dinnn bas bebu bebuuuuuuuuuuuuu bebuuuuuuuuuuuu babruuuuuuuuuuuuuuuuuuu jalebuuuu bebuuuuuuuuuuuuu chaltaa haiii dill aur dimakkk me kab meree paas aa Jaye meri jaaannnnn kabb galeee laga lunnn.
2 mahine ho gaye hein atleast 80*12 more to go meriiiiiiii jaaannnnn hehehehehehehehehehehheheh
Bebduuuuuuuuuuuuuuuuuu hasteeeee rahaaa karooo khushhhh ekdummmm.
Kuchhh bhii hooo aapkaa marddd haiii yhnnn parrr sabb handle kar lega merii jaaannnnn hehehehehehehehehehehheheh iloveeeeuuuuuuuuuuuuuouuuuuuuuuuuuuuu iloveeeeuuuuuuuuuuuuuouuuuuuuuuuuuuuu iloveeeeuuuuuuuuuuuuuouuuuuuuuuuuuuuu ssoososososososososososo muchhhhhhhhh bebduuuuuuuuuuuuuuuuuu
Merii Jaaannnnn`

export default function Scene5({onNext}){
  const [text,setText] = useState('')

  useEffect(()=>{
    let i = 1
    setText(letter.slice(0, 1))
    const timer = setInterval(()=>{
      i++
      setText(letter.slice(0, i))
      if(i >= letter.length) clearInterval(timer)
    },18)
    return ()=> clearInterval(timer)
  },[])

  return (
    <SceneChrome
      kicker="Scene V · the letter"
      title="A love letter, written slowly"
      subtitle="This section should feel like opening a velvet envelope. The text breathes, the panel glows, and the typography carries the emotion."
      className="items-start"
    >
      <motion.div className="glass rounded-[30px] p-6 sm:p-8 max-w-3xl w-full" initial={{scale:0.98,opacity:0,y:8}} animate={{scale:1,opacity:1,y:0}}>
        <div className="section-label mb-4">Dear Bebuuuu</div>
        <pre className="whitespace-pre-wrap text-[1rem] sm:text-[1.05rem] leading-8 text-white/88 font-[500] tracking-[-0.01em]">{text}</pre>
        <div className="text-right mt-8">
          <button onClick={onNext} className="accent-btn">One Last Surprise</button>
        </div>
      </motion.div>
    </SceneChrome>
  )
}
