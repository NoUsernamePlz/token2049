import React from 'react'
import {GrLinkedinOption} from 'react-icons/gr';
import {FaTelegramPlane} from 'react-icons/fa';
import {BsYoutube} from 'react-icons/bs';
import {BiDice2} from 'react-icons/bi';
import {FaSquareThreads} from 'react-icons/fa6';





let Events =[
    {name:"TOKEN2049 Singapore",link:"/"},
    {name:"TOKEN2049 Dubai",link:"/"},
    {name:"TOKEN2049 Week",link:"/"},
    {name:"Tickets",link:"/"},
 
    
  ];


  let Services =[
    {name:"Terms & Conditions", link:"/"},
    {name:"Privacy Policy", link:"/"},
    {name:"Newsletter", link:"/"},
    {name:"Contact Us", link:"/"},
    {name:"Media Content", link:"/"},
  ]


  

function Footer() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-[60vh] xs:max-lg:h-auto bg-gray-100'>
      <div className='px-20vw h-[20vh] xs:max-lg:h-auto w-[80vw]  flex flex-row xs:max-lg:flex-col'>
        <div className='w-[50vw] xs:max-lg:w-[80vw] flex my-2 justify-center pt-10'><img src={require('../images/tokenlogo.png')} alt="Logo" className="h-6 w-100%" /></div>
        <div className='w-[25vw] xs:max-lg:w-[80vw] '>
        <ul className={`:flex flex-col items-center  lg:pb-0   md:static list-none font-semibold opacity-100   w-[100%]  md:pl-0   xs:bg-blueish-black xs:max-lg:w-[100%]   `}>
        {
          Events.map((link)=>(
            <li key={link.name} className='  text-xl lg:my-0 my-5 nav'>
              <a href={link.link} className=' hover:text-white duration-500 no-underline text-base '>{link.name}</a>
            </li>
          ))
        }</ul>
        </div>
        <div>

        <div className='w-[25vw] xs:max-lg:w-[80vw]'>
        <ul className={`lg:flex flex-col items-center  lg:pb-0   list-none font-semibold opacity-100   w-[100%] md:w-auto md:pl-0   `}>
        {
          Services.map((link)=>(
            <li key={link.name} className='  text-base lg:my-0 my-5 nav'>
              <a href={link.link} className=' hover:text-white duration-500 no-underline '>{link.name}</a>
            </li>
          ))
        }</ul>
        </div>
        </div>
      </div>


      <div>
      <h1 className='font-medium text-left text-lg mt-[5vh] xs:max-lg:w-[80vw]'>Stay connected</h1>
     <div className='flex items-start justify-start  w-[50vw]  xs:max-lg:w-[90vw]'>
       
        <div className='py-5 pr-5'><GrLinkedinOption className='w-6 h-6'/></div>
        <div className='p-5'><FaTelegramPlane className='w-6 h-6'/></div>
        <div className='p-5'><BsYoutube className='w-6 h-6'/></div>
        <div className='p-5'><BiDice2 className='w-6 h-6'/></div>
        <div className='p-5'><FaSquareThreads className='w-6 h-6'/></div>
      
        
        
       


     </div>
      </div>
      <div className='text-xs font-medium mt-[6vh] text-left  w-[50vw] py-4'>
      © 2023 TOKEN2049. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
