import React from 'react';
import p1 from "../public/pxfuel.jpg"
import Image from "next/image"
const BoxTemp = (props: { name: string }) => {
  return (
    
<div className=" max-w-lg">
    <Image src={p1} alt={""} className=' rounded-md '/>
    <div className='flex justify-between'>
      <h1 className=' text-l font-semibold'>{props.name}</h1>
      <p className='text-gray-400'>Brading Design</p>
    </div>
</div>

  );
}

export default BoxTemp;

