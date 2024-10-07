import { Canvas } from '@react-three/fiber'
import React from 'react'
import HeroScene from '../three/scenes/hero-scene'

const Hero:React.FC = () => {
  return (
    <section className="bg-fixed bg-gradient-to-r w-full from-slate-900 to-rose-400 min-h-screen text-white flex flex-wrap-reverse justify-between items-center">
      {/* R3F Canvas */}
      <div className="w-full lg:w-1/2 h-72 lg:h-96">
        <Canvas camera={{position: [0,0,20]}} shadows>
          <ambientLight intensity={1} />
          <directionalLight intensity={5} position={[3, 1, 4]} />
          <HeroScene />
        </Canvas>
      </div>

      {/* Text */}
      <div 
      className="flex flex-col bg-200 gap-5 lg:w-1/2 lg:h-2/3 w-full p-14 rounded-tl-3xl rounded-bl-3xl bg-rose-200/10 backdrop-blur-md justify-center items-start">
        <h1 className="text-5xl font-extrabold">Flow3D</h1>
        <p>
          Master System Design with Interactive 3D Architecture Diagrams.
          Visualize complex systems in real-time, explore dynamic animations,
          and deepen your understanding through engaging, hands-on learning
          experiences. Turn abstract concepts into tangible knowledge with
          intuitive visuals.
        </p>
        <div>
            <button className='bg-orange-300/70 p-3 font-space-mono font-semibold rounded-lg'>Get Started</button>
        </div>
      </div>
    </section>
  )
}

export default Hero