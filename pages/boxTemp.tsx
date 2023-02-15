import React from 'react';
import Image from "next/image"

const BoxTemp = (props) => {
  return (
    
<div className="hover:scale-105 transition-all duration-300 ">
    <Image src={props.img1} alt={""} className= 'max-w-md  rounded-md border-black border border-dashed hover:animate-pulse'/>
    <div className='flex justify-between'>
      <h1 className='text-sm'>{props.name}</h1>
      <p className='text-gray-400 text-xs'>Branding | Design</p>
    </div>
</div>

  );
}

export default BoxTemp;

