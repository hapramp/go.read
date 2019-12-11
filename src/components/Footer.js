import React from 'react'

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <section className={`form sm:mt-10 bg-secondary`}>
          <div
            className="max-w-7xl sm:px-3 text-white lg:mx-auto pt-8 pb-12 sm:pt-12 sm:pb-16 text-center relative bg-left-bottom bg-no-repeat">
            <h2 className="font-black text-2xl sm:text-4xl md:text-5xl italic">Get Going, Keep Going!</h2>
            <p className="text-base sm:text-base md:text-lg mt-2 px-4">We believe the most important thing for creators is to never stop creating.</p>
            <div className="sm:mt-10">
              <a href="https://play.google.com/store/apps/details?id=com.go.social.prod" className="inline-flex text-white hover:text-white shadow sm:shadow-none mt-4 md:mt-0 flex-grow bg-primary p-3 sm:py-4 sm:px-6 rounded cursor-pointer" target="__new">
                <svg className="inline mr-2" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                  <path fill="#fff" d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941a1.563 1.563 0 01-1.532-.011l-.192-.13zm9.469-11.56L1 22.115V2.093l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zM1.46.433A1.563 1.563 0 013.295.195L15.948 7.21l-3.846 3.835L1.46.433z" />
                </svg>
                <span>Get it on Playstore</span>
              </a>
            </div>
          </div>
        </section>
      </footer>
    )
  }
}

export default Footer
