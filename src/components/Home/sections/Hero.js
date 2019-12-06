import React from 'react';
import heroImg from './img/hero-image.png'

const Hero = () => {
  return (
   <section className="hero">
      <div className="max-w-5xl mx-auto sm:h-screen flex flex-col items-center relative justify-center px-6 sm:px-10 xl:px-0 mb-32" >
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-1/2 mt-64 sm:mt-20">
            <h1 className="font-black text-4xl sm:text-4xl md:text-6xl italic leading-tight">Creators, Let’s Gosocial</h1>
            <p className="text-xl mt-4">Take challenges and contests in photography, writing, and design. Get Inspired and earn rewards on the Go!</p>
            <div className="mt-16">
              <a href="https://play.google.com/store/apps/details?id=com.go.social.prod" className="text-white shadow sm:shadow-none mt-4 md:mt-0 flex-grow bg-primary py-4 px-6 rounded cursor-pointer" target="__new">
              <svg className="inline mr-2" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                <path fill="#fff" d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941a1.563 1.563 0 01-1.532-.011l-.192-.13zm9.469-11.56L1 22.115V2.093l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zM1.46.433A1.563 1.563 0 013.295.195L15.948 7.21l-3.846 3.835L1.46.433z"/>
              </svg>
              <span>Get it on Playstore</span>
              </a>
            </div>
              {/* <form 
                action="https://docs.google.com/forms/d/e/1FAIpQLSciUs-UEM1VcfqhjtUJSfpLCQdIku_bEj3lXGXIEfGqGQ65gg/formResponse" 
                className={`${submitted} max-w-4xl flex flex-col md:flex-row mx-auto mt-10 text-lg flex-wrap md:flex-no-wrap`}
                target="hidden_iframe"
                >
              <input value={email} onChange={(e)=>{setEmail(e.target.value)}} required name="entry.747163953" className="md:w-3/4 text-left bg-transparent border border-grey-12 py-4 px-6 rounded md:mr-2 focus:outline-none" type="email" placeholder="Your Email"/>
              <input onClick={()=>{if(email!==' '){setSubmitted('submitted')}}} className="text-white shadow sm:shadow-none mt-4 md:mt-0 flex-grow bg-primary py-4 px-6 rounded cursor-pointer" type="submit" value="Request Invite"/>
            </form>
            <iframe title="hidden_iframe" name="hidden_iframe" id="hidden_iframe" className="hidden"></iframe>
        
            <p className={`${submitted} form-feedback text-xl px-4 sm:px-0 sm:text-2xl mt-8 sm:mt-16 max-w-3xl mx-auto text-primary`}>Your email is going into our early invite list. The invitation will be on its way before new year. Thank you!
</p> */}
          </div>
          <div className="w-56 sm:w-1/2 absolute top-0 right-0">
            <img src={heroImg} alt="Hero"/>
          </div>
        </div>
        <div className="hidden sm:flex self-start flex-col items-center mt-16 ml-4 sm:ml-20">
          <svg  width="3" height="83" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.314 82V1" stroke="#000" strokeWidth="2" fill="none" fillRule="evenodd" strokeDasharray="4,4" strokeLinecap="square"/>
          </svg>
          <div className="bg-primary w-10 h-10 rounded-full flex justify-center items-center mt-4">
            <svg width="18" height="11" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.707.293L.293 1.707 9 10.414l8.707-8.707L16.293.293 9 7.586z" fill="#FFF" fillRule="nonzero"/>
            </svg>
          </div>
        </div>
      </div>
   </section>
  );
};

export default Hero;