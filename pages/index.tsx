import img1 from "../public/img/img1.png"
import img2 from "../public/img/img2.png"
import img3 from "../public/img/img3.png"
import img4 from "../public/img/img4.png"
import img5 from "../public/img/img7.png"
import img6 from "../public/img/img6.png"
import BoxTemp from './boxTemp'
import Spline from '@splinetool/react-spline';
import { DiIllustrator, DiPhotoshop } from 'react-icons/di'
import {SiBlender, SiVisualstudiocode} from 'react-icons/si'
export default function Home() {
  return (
    <>
   
 
      <div className='flex'>
        <section className=' lg:visible invisible flex-auto w-1/3 order-first sticky h-screen left-0 top-0 bg-white border-r border-black z-1'>
          <h1 className='py-6 px-2 text-4xl font-bold'>Dario Maier Tolic</h1>
          <p className='py-2 px-2 text-gray-800 text-sm'>Designer and Developer based in Germany who loves to being creative,organized and playful in my work.</p>
        
          <div className="min-w-fit h-1/2">



            <Spline scene="https://prod.spline.design/HVZYbTiTvTI3En8X/scene.splinecode" />

          </div>
          <div className='bottom-0 absolute w-full '>
            <a className='' href='#'>
              <div className='group overflow-hidden hover:h-32 transition-all duration-500 hover:bg-orange-300 max-w-26 pl-2 h-12 border-l-0 border-r-0 border border-black'>
              <p className='font-medium'>WORKS</p>
              <p className=' opacity-0 group-hover:opacity-100 text-xs transition-all duration-500'>I have a klot of experience and work mostly with these frameworks: \N Tailwindcss,NextJS,C# and Java Spring</p>
              </div>
            </a>
              <div className=' group overflow-hidden hover:h-32 hover:bg-blue-300 transition-all duration-500 max-w-26 pl-2 h-12 border-l-0 border-r-0  border-t-0 border border-black'>
                <p className=' font-medium'>ABOUT</p>
                <p className=' opacity-0 group-hover:opacity-100 text-xs transition-all duration-500'>I'm a creative and experienced front-end designer and developer with a passion for crafting beautiful, user-friendly websites. From concept to code, I bring a unique blend of artistry and technical skill to every project.</p>
              </div>
              <div className='hover:bg-green-300 grid content-end pb-2 pl-2 h-12   border-r-0 border-l-0  border-t-0 border border-black'>
                <p className=' font-medium'>CONTACT</p>
              </div>
          </div>
        </section>
          <main className=' bg-white  '>
            <section className="">
            
            <div className='right-0 flex gap-8 gap-y-20 flex-wrap justify-evenly px-12 pt-12'>
                
              <BoxTemp name="EXAMPLE-00" img1={img2} />      
              <BoxTemp name="EXAMPLE-01" img1={img6} />
              <BoxTemp name="EXAMPLE-02" img1={img3} />  
              <BoxTemp name="EXAMPLE-03" img1={img4} /> 
              <BoxTemp name="EXAMPLE-04" img1={img5} />
              <BoxTemp name="EXAMPLE-05" img1={img4} />  
              <BoxTemp name="EXAMPLE-06" img1={img5} />
              
            
              
            </div>
          </section>
          
          <section className="grid grid-cols-3 justify-between max-w-screen bottom-0 pt-4">
            <div className='hover:bg-red-300  transition-colors duration-1000 pl-2 h-12 border-l-0  border border-black'>
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
