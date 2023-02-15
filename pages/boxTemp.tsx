import React from 'react';
import Image from "next/image"

const BoxTemp = (props) => {
  return (
    
<div className="">
    <Image src={props.img1} alt={""} className= '  rounded-md '/>
    <div className='flex justify-between'>
      <h1 className=' text-l font-semibold'>{props.name}</h1>
      <p className='text-gray-400'>Brading Design</p>
    </div>
</div>

  );
}

export default BoxTemp;

