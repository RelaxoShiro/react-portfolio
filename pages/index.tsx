import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'

import { AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import Image from 'next/image'
import avatar from '../public/avatar.png'
import BoxTemp from './boxTemp'
import { DiIllustrator, DiPhotoshop } from 'react-icons/di'
import {SiBlender, SiVisualstudiocode} from 'react-icons/si'
export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='flex '>
        <section className='flex-auto w-1/5 order-first sticky top-0 h-screen left-0 bg-white border-r border-black'>
          <h1 className='py-2 px-2 text-4xl font-bold'>Dario Maier Tolic</h1>
          <p className='py-2 px-2 text-gray-800 text-sm'>Designer and Developer based in Germany who loves to being creative,organized and playful in my work.</p>
          <div className='text-5xl flex justify-center gap-16 px-4 py-3 text-black'>
        
        <DiIllustrator/>
        <DiPhotoshop/>
        <SiBlender/>
        <SiVisualstudiocode/>
      </div>
      
            
            <div className='bottom-0 absolute '>
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
       








   
      <div className=' overflow-hidden mx-auto relative border-4 border-white  w-80 h-80'>
          
          <Image src={avatar} layout="fill" objectFit="cover"alt={''}/>
        </div>
        <div className=' text-center p-10 '>
          <h2 className='text-5xl py-2 text-blac font-medium'>Dario Maier Tolic</h2>
          <h3 className='text-2xl py-2 text-blac'>Developer and designer.</h3>
          <p className='text-md py-5 leading-8 text-blac'>
          Hallo, ich bin Dario Maier Tolic ein Junior Softwareentwickler. 
Seit vor über 7 Jahren wurde mein Interesse zur Entwicklung 
geweckt und bilde seitdem mich seitdem fort.
          </p>
        </div>
          <div className='w-3/4 right-0 flex flex-wrap '>
          
          <BoxTemp name="new projects"/>
      <BoxTemp name="projects"/>
      <BoxTemp name="design work"/><BoxTemp name="new projects"/>
      <BoxTemp name="projects"/>
      <BoxTemp name="design work"/><BoxTemp name="new projects"/>
      <BoxTemp name="projects"/>
      <BoxTemp name="design work"/><BoxTemp name="new projects"/>
      <BoxTemp name="projects"/>
      <BoxTemp name="design work"/><BoxTemp name="new projects"/>
      <BoxTemp name="projects"/>
      <BoxTemp name="design work"/>
      
          </div>
       </section>
      </main>
      </div>
    </>
  )
}
