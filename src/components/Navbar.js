import React from 'react'
import { Link } from 'gatsby'
import playstore from '../img/playstore.svg';
import contestIcon from '../img/contest.svg';
import challengesIcon from '../img/challenges.svg';
import blogIcon from '../img/blog.svg';
import announcementIcon from '../img/announcement.svg';
// import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  render() {
    return (
      <nav
        className="py-2 sm:py-4 text-gray-70"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="max-w-container px-4 xl:px-0 ml-auto mr-auto flex justify-between">
          <div className="flex items-center">
            <Link href="/" className="" title="Logo">
              <div className="font-bold sm:font-black italic text-xl md:text-2xl lg:text-3xl uppercase text-primary">Go.READ</div>
            </Link>
          </div>

          <div className="hidden sm:flex">
            <Link className="font-black italic md:text-lg lg:text-xl flex items-center px-2 md:px-4" to="/tags/contest/">
              <img className="mr-2 hidden md:block" src={contestIcon} alt=""/>
              Contest
            </Link>
            <Link className="font-black italic md:text-lg lg:text-xl flex items-center px-2 md:px-4" to="/tags/challenges/">
              <img className="mr-2 hidden md:block" src={challengesIcon} alt=""/>
              Challenges
            </Link>
            <Link className="font-black italic md:text-lg lg:text-xl flex items-center px-2 md:px-4" to="/tags/general/">
              <img className="mr-2 hidden md:block" src={blogIcon} alt=""/>
              General
            </Link>
            <Link className="font-black italic md:text-lg lg:text-xl flex items-center px-2 md:px-4" to="/tags/announcement">
              <img className="mr-2 hidden md:block" src={announcementIcon} alt=""/>
              Announcement
            </Link>
          </div>

          <div className="flex items-center">
            <a
              className="inline-block"
              href="https://play.google.com/store/apps/details?id=com.go.social.prod"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-5 sm:w-6 lg:w-8" src={playstore} alt="Github" />
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
