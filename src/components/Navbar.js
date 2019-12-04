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
        className="pt-4 pb-4 text-gray-70"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container flex justify-between">
          <div className="">
            <a href="https://play.google.com/store/apps/details?id=com.go.social" className="" title="Logo">
              <div className="font-black italic text-3xl uppercase text-primary">Go.READ</div>
            </a>
          </div>

          <div className="flex">
            <Link className="font-black italic text-xl flex items-center pl-4 pr-4 pl-4 pr-4" to="/tags/contest/">
              <img className="mr-2" src={contestIcon} alt=""/>
              Contest
            </Link>
            <Link className="font-black italic text-xl flex items-center pl-4 pr-4" to="/tags/challenges/">
              <img className="mr-2" src={challengesIcon} alt=""/>
              Challenges
            </Link>
            <Link className="font-black italic text-xl flex items-center pl-4 pr-4" to="/tags/blog/">
              <img className="mr-2" src={blogIcon} alt=""/>
              Blog
            </Link>
            <Link className="font-black italic text-xl flex items-center pl-4 pr-4" to="/tags/announcement">
              <img className="mr-2" src={announcementIcon} alt=""/>
              Announcement
            </Link>
          </div>

          <div className="">
            <a
              className=""
              href="https://play.google.com/store/apps/details?id=com.go.social.prod"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="">
                <img src={playstore} alt="Github" />
              </span>
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
