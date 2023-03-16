import React from 'react'
import Portfolio from './Portfolio'
import githubIcon from '../Pictures/github.png';
import linkedinIcon from '../Pictures/linkedin.png';
import profilePic from '../Pictures/profilepic.png';

const PDF_FILE_URL = "http:/bit.ly/barbara_dev_cv";

const AboutMe = () => {
  const downloadCV = (url) => {
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute('download', 'barbarabodaiCV');
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }

  return (
    <div className='container'>
      <div className='about-me'>
        <div className='description'>
          <h2>Hi there,</h2>
          <h1>My name is Barbara.</h1>
          <p>I'm a junior frontend developer.</p>
          <div className='contact-box'>
            <button className='download' onClick={() => downloadCV(PDF_FILE_URL)}>Download CV</button>
          <div>
            <a href="https://github.com/bobsabt/">
              <img className="icon icon-github" src={githubIcon} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/barbara-b%C3%B3dai-549601221/">
              <img className="icon" src={linkedinIcon} alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
      <img className="profil-picture" src={profilePic} alt="profilepic" />
    </div>
    <Portfolio />
    </div>
  )
}

export default AboutMe