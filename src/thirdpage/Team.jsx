import React from 'react'
import '../App.css'

import { AiOutlineGithub } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";


const copy = () => {
  return (
    <>

      <h1 className='heading'>Fellows</h1>
      <div id="team_container">
        <div className="card-wrapper">
              
              <div className="card profile-two">
                
                <div className="card-image profile-img--two">
                  <img src="https://image.ibb.co/c9rY6J/profile02.jpg" alt="profile two" />
                </div>

                <ul className="social-icons" >
                  <li>
                    <a href="/">
                      
                    <AiOutlineGithub className='hover:text-mainpp-100' />
                    
                    </a>
                  </li>
                  <li>
                    <a href="/">
                    <AiFillInstagram/>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                    <AiFillLinkedin/>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                    <BsLink45Deg/>
                    </a>
                  </li>
                </ul>

                <div className="details users">
                    <h2>Jane Doe
                      <br/>
                      <span className="job-title">UI Designer</span>
                    </h2>
                </div>
            </div>
        </div>
        <div className="card-wrapper">
              
              <div className="card profile-two">
                
                <div className="card-image profile-img--two">
                  <img src="https://image.ibb.co/c9rY6J/profile02.jpg" alt="profile two" />
                </div>

                <ul className="social-icons">
                  <li>
                    <a href="/">
                      <BsGithub/>   
                    </a>
                  </li>
                  <li>
                    <a href="/">
                    <AiFillInstagram/>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                    <AiFillLinkedin/>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                    <BsLink45Deg/>
                    </a>
                  </li>
                </ul>

                <div className="details users">
                    <h2>Jane Doe
                      <br/>
                      <span className="job-title">UI Designer</span>
                    </h2>
                </div>
            </div>
        </div>
        <div className="card-wrapper">
              
              <div className="card profile-two">
                
                <div className="card-image profile-img--two">
                  <img src="https://image.ibb.co/c9rY6J/profile02.jpg" alt="profile two" />
                </div>

                <ul className="social-icons">
                  <li>
                    <a href="/">
                      <BsGithub/>   
                    </a>
                  </li>
                  <li>
                    <a href="/">
                    <AiFillInstagram/>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                    <AiFillLinkedin/>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                    <BsLink45Deg/>
                    </a>
                  </li>
                </ul>

                <div className="details users">
                    <h2>Jane Doe
                      <br/>
                      <span className="job-title">UI Designer</span>
                    </h2>
                </div>
            </div>
        </div>
        <div className="card-wrapper">
              
              <div className="card profile-two">
                
                <div className="card-image profile-img--two">
                  <img src="https://image.ibb.co/c9rY6J/profile02.jpg" alt="profile two" />
                </div>

                <ul className="social-icons">
                  <li>
                    <a href="/">
                      <BsGithub/>   
                    </a>
                  </li>
                  <li>
                    <a href="/">
                    <AiFillInstagram/>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                    <AiFillLinkedin/>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                    <BsLink45Deg/>
                    </a>
                  </li>
                </ul>

                <div className="details users">
                    <h2>Jane Doe
                      <br/>
                      <span className="job-title">UI Designer</span>
                    </h2>
                </div>
            </div>
        </div>
      </div>
      
    </>
  )
}

export default copy