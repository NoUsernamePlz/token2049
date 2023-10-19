import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Home = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };


      const videoId = 'i6APpOGbgOI&t=7s'; 
      const thumbnailUrl = 'URL_TO_YOUTUBE_THUMBNAIL';

  return (
    <div>
      <div className="h-screen xs:max-lg:h-[60vh]  flex items-center justify-center bg-[#5920e8] z-10  relative">
        <video className="absolute top-0 left-0 w-full h-full object-cover z-0  " autoPlay muted loop>
          <source src={require('../images/background3.mp4')} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="z-10 text-white text-3xl xs:max-lg:text-xl font-semibold w-[70vw] px-[10vw] xs:max-lg:px-2  text-left absolute top-1/4 xs:max-lg:top-1/8">
          TOKEN 2049
        </div>
        <div className="z-10 text-white text-6xl xs:max-lg:text-3xl font-bold w-[70vw] px-[10vw] xs:max-lg:px-2 text-left absolute top-1/2 xs:max-lg:top-1/3">
          WE BRING TOGETHER THE LEADING VOICES IN CRYPTO
        </div>
      </div>

      {/* second page */}

      <div className='w-full px-[10vw] xs:max-lg:px-2 my-[10vh] xs:max-lg:my-[5vh]'>
        <h1 className='text-5xl xs:max-lg:text-3xl font-semibold my-[10vh]'>Delivering the best crypto events.</h1>
        <div className='flex xs:max-lg:flex-col justify-center items-center'>
          <div className='w-[40vw] xs:max-lg:w-[80vw] p-1 h-[40vh] xs:max-lg:h-[60vw] relative'>
            <img src={require('../images/dubai.png')} alt="Dubai" className="w-full h-[100%]" />
            <div className="absolute uppercase top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
               Dubai
            </div>
            <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-semibold">
              18-19 September 2024
            </div>
            <button className="absolute bottom-5 uppercase left-1/2 transform -translate-x-1/2 p-1  border-2 border-white text-white shadow-inner hover:border-opacity-50 shadow-white hover:text-opacity-75 w-[10vw] xs:max-lg:w-[40vw]">
              Learn More
            </button>
          </div>
          <div className='w-[40vw] xs:max-lg:w-[80vw] p-1 h-[40vh] xs:max-lg:h-[60vw] relative'>
            <img src={require('../images/singapore.png')} alt="Singapore" className="w-full h-[100%]" />
            <div className="absolute uppercase top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
               Singapore
            </div>
            <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-semibold">
              18-19 September 2024
            </div>
            <button className="absolute bottom-5 uppercase left-1/2 transform -translate-x-1/2 p-1 border-2 border-white text-white shadow-inner hover:border-opacity-50 shadow-white hover:text-opacity-75 w-[10vw] xs:max-lg:w-[40vw]">
              Learn More
            </button>
          </div>
        </div>
      </div>


      {/* third component */}
      <div className='mt-[25vh] xs:max-lg:mt-[5vh]'>
      <div className='h-[100vh] xs:max-lg:h-auto w-full bg-[#4a29cf] flex flex-col justify-center items-center py-[80vh] xs:max-lg:py-[5vh]'>
        <div className='flex flex-row xs:max-lg:flex-col  justify-center items-center'>
        <div className='w-[30%] h-[100%] xs:max-lg:w-[90%] p-4'>
            <h1 className='text-left text-6xl xs:max-lg:text-3xl font-medium text-white'>What is TOKEN2049?</h1>
            <h3 className='text-white text-left mt-10'>
            Cras turpis metus, laoreet vitae libero vitae, fringilla ullamcorper diam. Quisque nulla mauris, ornare id quam in, fringilla suscipit nunc. Pellentesque euismod nibh et ullamcorper gravida. Etiam fringilla efficitur mi, sit amet commodo augue vehicula eu. Quisque sapien mi, pulvinar sed fermentum sit amet, posuere sit amet eros. Vestibulum vulputate mi est, eu venenatis sem mollis malesuada. Phasellus lacinia nisl ac lorem fermentum, et ultrices nibh tempus. In vel orci neque. Vestibulum vel malesuada nunc, eget feugiat ligula. Ut ultricies velit orci, ac vehicula sem lobortis rutrum. Vestibulum velit magna, tristique ac risus aliquet, egestas porttitor nisl.Aliquam erat volutpat. Nullam condimentum tortor erat, cursus ultrices massa ornare a. Nulla id felis justo.


            </h3>

        </div>
        <div className='w-[30%] h-[100%] relative ml-[15vh] my-[20vh] sm:max-lg:my-[30vh] sm:max-lg:px-3'>
          <div className='h-[40vh] w-[40vh] xs:max-lg:h-[60vw] xs:max-lg:w-[60vw] rounded-full absolute top-1/3 right-[40%] xs:max:lg:right-[40%] ' style={{ backgroundColor: 'rgba(255, 0, 0, 0.6)' }}>
            <h1 className='absolute text-sm top-[30%] w-[40%] mx-10 text-left font-semibold text-white z-20 opacity-[100]'>
            Integer sit amet ipsum vel arcu posuere pellentesque et nec nulla
            </h1>
            <h1 className='absolute text-sm top-[48%] left-[53%] w-[15%] mx-10 text-left font-semibold text-yellow-500 z-20 opacity-[100]'>
             TOKEN2049 
            </h1>

          </div>
          <div className='h-[40vh] w-[40vh] xs:max-lg:h-[60vw] xs:max-lg:w-[60vw] rounded-full bg-purple-700 absolute top-1/3 left-[33%] xs:max-lg:left-[-35%] opacity-[0.7]'>
          <h1 className='absolute top-[30%] left-[30%] w-[40%] mx-10 text-left font-semibold z-40 text-white text-sm '>
            Integer sit amet ipsum vel arcu posuere pellentesque et nec nulla
            </h1>

          </div>
          <div>

          </div>
        </div></div>
      
   
        <div className='w-[80%] flex flex-row xs:max-lg:flex-col my-[10vh] items-center justify-center xs:max-lg:pt-[20vh]' >
            <div className='px-10 xs:max-lg:py-6 text-2xl font-bold text-white'>10,000+ <br></br> Attendees</div>
            <div className='px-10 text-2xl xs:max-lg:py-6 font-bold text-white'>300+ <br></br> Speakers</div>
            <div className='px-10 text-2xl xs:max-lg:py-6 font-bold text-white'>400+ <br></br> Sponsors</div>
            <div className='px-10 text-2xl xs:max-lg:py-6 font-bold text-white'>5,000+ <br></br> Companies</div>
            <div className='px-10 text-2xl xs:max-lg:py-6 font-bold text-white'>400+ <br></br> Side Events</div>
        </div>
        <Slider {...settings} className='w-[80vw] h-[40vh] xs:max-lg:w-[90vw] xs:max-lg:h-auto'>
        <div>
          <img src={require('../images/pic1.png')} className="w-full h-auto" />
        </div>
        <div>
          <img src={require('../images/pic2.png')} className="w-full h-auto" />
        </div>
        <div>
          <img src={require('../images/pic3.png')} className="w-full h-auto" />
        </div>
        <div>
          <img src={require('../images/pic4.png')} className="w-full h-auto" />
        </div>
        <div>
          <img src={require('../images/pic5.png')} className="w-full h-auto" />
        </div>
        <div>
          <img src={require('../images/pic6.png')} className="w-full h-auto" />
        </div>
        <div>
          <img src={require('../images/pic7.png')} className="w-full h-auto" />
        </div>
        {/* Add more slides as needed */}
      </Slider>

  






      </div>
      </div>

      {/* fourth page */}

<div className='w-full h-[100vh] xs:max-lg:h-auto xs:max-lg:py-[10vh] xs:max-lg:mt-[5vh] py-[100vh] flex flex-col items-center justify-center '>
    <h1 className='text-6xl xs:max-lg:text-3xl font-semibold text-left py-[5vh] xs-max-lg:py-[1vh] w-[80vw] ml-[25vw]  '>Past Speakers</h1>
    <div className='flex flex-row xs:max-lg:flex-col '>
    <div className='flex flex-col'>
    <div className='w-[30vh] h-[30vh] m-10 rounded-full bg-gradient-to-r from-purple-700 to-pink-600' >
        
    
      
      
        <img
          src={require('../images/expert1.png')}
          alt="Your Image"
          className="w-full h-auto rounded-lg"
        />
     
       
    </div>
    <div className='flex flex-col'>
        <h1 className='text-purple-800 font-semibold'>Vitalik Buterin</h1>
        <h1> Co-Founder</h1>
        <h1>Ethereum</h1>
    </div></div>
    <div className='flex flex-col'>
    <div className='w-[30vh] h-[30vh] m-10  rounded-full bg-gradient-to-r from-purple-700 to-pink-600' >
    
     
      
        <img
          src={require('../images/expert1.png')}
          alt="Your Image"
          className="w-full h-auto rounded-lg"
        />
     
       
    </div>
    <div className='flex flex-col'>
        <h1 className='text-purple-800 font-semibold'>Vitalik Buterin</h1>
        <h1> Co-Founder</h1>
        <h1>Ethereum</h1>
    </div></div>


    
    <div className='flex flex-col'>
    <div className='w-[30vh] h-[30vh] m-10  rounded-full bg-gradient-to-r from-purple-700 to-pink-600' >
    
      
      
        <img
          src={require('../images/expert2.png')} 
          alt="Your Image"
          className="w-full h-auto rounded-lg"
        />
     
       
    </div>
    <div className='flex flex-col'>
        <h1 className='text-purple-800 font-semibold'>Dovey Wan</h1>
        <h1> Founding Partner</h1>
        <h1>Primitive Venture</h1>
    </div>
    
    </div></div>

    <div className='flex flex-row xs:max-lg:flex-col'>
        <div className='flex flex-col'>
    <div className='w-[30vh] h-[30vh] m-10 rounded-full bg-gradient-to-r from-purple-700 to-pink-600' >
    
    
      
        <img
          src={require('../images/expert1.png')}
          alt="Your Image"
          className="w-full h-auto rounded-lg"
        />
     
       
    </div>
    <div className='flex flex-col'>
        <h1 className='text-purple-800 font-semibold'>Vitalik Buterin</h1>
        <h1> Co-Founder</h1>
        <h1>Ethereum</h1>
    </div>
    
    </div>

    <div className='flex flex-col'>
    <div className='w-[30vh] h-[30vh] m-10  rounded-full bg-gradient-to-r from-purple-700 to-pink-600' >
    
   
      
        <img
          src={require('../images/expert2.png')}
          alt="Your Image"
          className="w-full h-auto rounded-lg"
        />
     
       
    </div>
    <div className='flex flex-col'>
        <h1 className='text-purple-800 font-semibold'>Dovey Wan</h1>
        <h1> Founding Partner</h1>
        <h1>Primitive Venture</h1>
    </div>
    </div>

    <div className='flex flex-col'>
    <div className='w-[30vh] h-[30vh] m-10  rounded-full bg-gradient-to-r from-purple-700 to-pink-600' >
    
   
      
        <img
          src={require('../images/expert2.png')}
          alt="Your Image"
          className="w-full h-auto rounded-lg"
        />
     
       
    </div>
    <div className='flex flex-col'>
        <h1 className='text-purple-800 font-semibold'>Dovey Wan</h1>
        <h1> Founding Partner</h1>
        <h1>Primitive Venture</h1>
    </div>
    </div>
    
    
    </div>

{/* second row */}
    <div className='flex flex-row xs:max-lg:flex-col'>
    <div className='flex flex-col'>
    <div className='w-[30vh] h-[30vh] m-10  rounded-full bg-gradient-to-r from-purple-700 to-pink-600' >
    
   
      
        <img
          src={require('../images/expert2.png')}
          alt="Your Image"
          className="w-full h-auto rounded-lg"
        />
     
       
    </div>
    <div className='flex flex-col'>
        <h1 className='text-purple-800 font-semibold'>Dovey Wan</h1>
        <h1> Founding Partner</h1>
        <h1>Primitive Venture</h1>
    </div>
    </div>
    <div className='flex flex-col'>
    <div className='w-[30vh] h-[30vh] m-10  rounded-full bg-gradient-to-r from-purple-700 to-pink-600' >
    
   
      
        <img
          src={require('../images/expert2.png')}
          alt="Your Image"
          className="w-full h-auto rounded-lg"
        />
     
       
    </div>
    <div className='flex flex-col'>
        <h1 className='text-purple-800 font-semibold'>Dovey Wan</h1>
        <h1> Founding Partner</h1>
        <h1>Primitive Venture</h1>
    </div>
    </div>
    <div className='flex flex-col'>
    <div className='w-[30vh] h-[30vh] m-10  rounded-full bg-gradient-to-r from-purple-700 to-pink-600' >
    
   
      
        <img
          src={require('../images/expert2.png')}
          alt="Your Image"
          className="w-full h-auto rounded-lg"
        />
     
       
    </div>
    <div className='flex flex-col'>
        <h1 className='text-purple-800 font-semibold'>Dovey Wan</h1>
        <h1> Founding Partner</h1>
        <h1>Primitive Venture</h1>
    </div>
    </div></div>


</div>



{/* fifth page starts here */}

<div className=' w-[100vw] bg-[#5920e8] flex flex-col justify-center items-center py-[10vh]'>
    <h1 className='text-7xl xs:max-lg:text-3xl text-white font-semibold w-[80%] text-left my-10  '>Attended By World Leaders.</h1>
   <div>
   <img
          src={require('../images/comapnies.png')}
          alt="Your Image"
          className="w-[80vw] h-auto"
        />
   </div>

    <h1 className='text-7xl xs:max-lg:text-3xl text-white font-semibold w-[80%] text-center my-10 '>Relive our previous events.</h1>
    
    <div className="grid grid-cols-2 xs:max-lg:grid-cols-1 gap-6 w-[100%] my-10 lg:px-[10vw]  ">
      <div className='xs:max-lg:flex xs:max-lg:flex-col xs:max-lg:items-center xs:max-lg:justify-center'>
      <iframe width="500"  height="250" className="xs:max-lg:w-[80vw] h-[20vh] lg:h-[30vh]" src="https://www.youtube.com/embed/i6APpOGbgOI?si=-jM_8PwStN-weFfH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

      <div className='xs:max-lg:flex flex-col items-center justify-center'><iframe width="500" height="250" className="xs:max-lg:w-[80vw] h-[20vh] lg:h-[30vh]" src="https://www.youtube.com/embed/Qt_tlQR6N2U?si=BuGJANIzpWUj3lK8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
      
      <div className='xs:max-lg:flex flex-col items-center justify-center'><iframe width="500" height="250" className="xs:max-lg:w-[80vw] h-[20vh] lg:h-[30vh]" src="https://www.youtube.com/embed/qoXgzYwieYY?si=ojLM2g1PT84WLs4R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>

      <div className='xs:max-lg:flex flex-col items-center justify-center'><iframe width="500" height="250" className="xs:max-lg:w-[80vw] h-[20vh] lg:h-[30vh]" src="https://www.youtube.com/embed/EnpzLJ4piuQ?si=OQgZF3tf81FBdF6R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>

 <div className='xs:max-lg:flex flex-col items-center justify-center'><iframe width="500" height="250"   className="xs:max-lg:w-[80vw] h-[20vh] lg:h-[30vh]" src="https://www.youtube.com/embed/x6wtntxNQV0?si=NtzTEyKTinxBC1sM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>

 

 
</div>

{/* fifth page */}
<div className='w-[100vw] h-[60vh] flex flex-row xs:max-lg:flex-col mt-[10vh]'>
  <div className='w-[50vw] h-[60vh] xs:max-lg:w-[100%]'>
  <img
          src={require('../images/sideimage1.png')}
          alt="Your Image"
          className="w-[100vw] h-full"
        />
  </div>
  <div className='bg-purple-700 text-white font-medium w-[25vw] xs:max-lg:w-[100%] p-3 h-[60vh] flex  flex-col items-center justify-center text-xl'>
    
"It was incredible to reconnect in person with the crypto community at TOKEN2049 in London."
<h3 className='text-white font-light mt-5 text-lg'>Kain Warwick<br></br>Founder, Synthetix</h3>
  </div>
<div className='w-[25vw] xs:max-lg:w-[100%] h-[60vh]'>
<img
          src={require('../images/sideimage2.png')}
          alt="Your Image"
          className="w-[100vw] h-full"
        />
</div>
</div>

<div className='w-[100vw] h-[60vh] flex flex-row  xs:max-lg:flex-col'>
  <div className='w-[25vw] xs:max-lg:w-[100%] h-[60vh] bg-[#5920e8] text-white font-medium text-xl flex  flex-col items-center justify-center p-3'>
  "It was incredible to reconnect in person with the crypto community at TOKEN2049 in London."
<h3 className='text-white font-light mt-5 text-lg'>Kain Warwick<br></br>Founder, Synthetix</h3>
  </div>
  <div className='bg-[#5920e8] text-white font-medium w-[50vw] xs:max-lg:w-[100%] h-[60vh] flex  flex-col items-center justify-center text-xl'>
    
  <img
          src={require('../images/lowerpic.png')}
          alt="Your Image"
          className="w-[100vw] h-full"
        />
</div>
  
<div className='w-[25vw] xs:max-lg:w-[100%] h-[60vh] bg-[#5920e8] text-white font-medium text-xl flex  flex-col items-center justify-center p-3'>
"TOKEN2049 was a resounding success. I was impressed with the consistently high caliber of talent."

<h3 className='text-white font-light mt-5 text-lg'>Emin Gün Sirer<br></br>Founder and CEO, Ava Labs</h3>
</div>
</div>





</div>
<div className='w-[100vw] h-[40vh] flex flex-col items-center justify-center xs:max-lg:my-[20vh]'>
  <h1 className='text-2xl font-medium text-gray-800  my-[10vh]  xs:max-lg:my-[5vh] '>
Subscribe for the latest event updates.</h1>

<div className='flex mb-[10vh] xs:max-lg:mb-[2vh]'>
<input placeholder='Email Address'  className='border-b-2 border-gray-800 focus:outline-none p-4'>
</input>
<button className='w-38 h-23 p-4 bg-pink-700 text-gray-800 uppercase rounded-md ml-8'>Get updates</button>
</div></div>

    </div>
  )
}

export default Home;
