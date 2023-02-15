import src1 from "../public/pxfuel.png"
import src4 from "../public/pxfuel2.png"
import BoxTemp from './boxTemp'
import Spline from '@splinetool/react-spline';
import { DiIllustrator, DiPhotoshop } from 'react-icons/di'
import {SiBlender, SiVisualstudiocode} from 'react-icons/si'
export default function Home() {
  return (
    <>
    <div className='flex '>
      <section className=' lg:visible invisible flex-auto w-1/5 order-first sticky top-0 h-screen left-0 bg-white border-r border-black'>
        <h1 className='py-6 px-2 text-6xl font-bold'>Dario Maier <br></br> Tolic</h1>
        <p className='py-2 px-2 text-gray-800 text-sm'>Designer and Developer based in Germany who loves to being creative,organized and playful in my work.</p>
        <div className='text-5xl flex  justify-center gap-16 px-4 py-3 text-black'>   
          <DiIllustrator/>
          <DiPhotoshop/>
          <SiBlender/>
          <SiVisualstudiocode/>
        </div>
        <div className="min-w-fit h-fit">



           <Spline scene="https://prod.spline.design/HVZYbTiTvTI3En8X/scene.splinecode" />

        </div>
        <div className='bottom-0 absolute w-full '>
          <a className='' href='#'>
            <div className='group overflow-hidden hover:h-32 hover:bg-orange-300 max-w-26 pl-2 h-12 border-l-0 border-r-0 border border-black'>
            <p className='font-medium'>WORKS</p>
            <p className=' opacity-0 group-hover:opacity-100 font-small'>I have a klot of experience and work mostly with these frameworks: \N Tailwindcss,NextJS,C# and Java Spring</p>
            </div>
          </a>
            <div className=' group overflow-hidden hover:h-32 hover:bg-blue-300  max-w-26 pl-2 h-12 border-l-0 border-r-0  border-t-0 border border-black'>
              <p className=' font-medium'>ABOUT</p>
              <p className=' opacity-0 group-hover:opacity-100 font-small'>I have a klot of experience and work mostly with these frameworks: \N Tailwindcss,NextJS,C# and Java Spring</p>
            </div>
            <div className='hover:bg-green-300 grid content-end pb-2 pl-2 h-12   border-r-0 border-l-0  border-t-0 border border-black'>
              <p className=' font-medium'>CONTACT</p>
            </div>
        </div>
      </section>
        <main className=' bg-white  '>
          <section className="">
          
          <div className='right-0 flex gap-4 gap-y-20 flex-wrap  px-12 pt-12'>
              
            <BoxTemp name="PLAYGROUND" img1={src4}/>
            <BoxTemp name="BLENDER" img1={src1} />
            <BoxTemp name="AEX EE A D" img1={src1} />
            <BoxTemp name="ZZ!>3W" img1={src4} />
            <BoxTemp name="ILLUSION" img1={src4} />
          
            
          </div>
        </section>
        
        <section className="grid grid-cols-3 justify-between max-w-screen bottom-0">
          <div className='hover:bg-red-300  pl-2 h-12 border-l-0  border border-black'>
            <p className='font-medium'>WORKS</p>
          </div>
          
          <div className='hover:bg-purple-300  pl-2 h-12 border-l-0  border border-black'>
            <p className='font-medium'>WORKS</p>
          </div>
          <div className='hover:bg-yellow-300  pl-2 h-12 border-l-0 border-r-0 border pr-4 border-black  pt-2'>
            <p className='text-xs  text-gray-400 text-right font-light '>
              2023 ShiroDev <br></br>
              Made with NextJS and Tailwind</p>
          </div>
          </section>
      </main>
    </div>
    </>
  )
}
