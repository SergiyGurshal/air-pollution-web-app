import React, { useState } from 'react'
import './footer.css'
import mailIcon from '../../images/social_media_icons/mail.svg'
import githubIcon from '../../images/social_media_icons/github.svg'
import linkedinIcon from '../../images/social_media_icons/linkedin.svg'
import FeedbackForm from '../feedback-form-modal/FeedbackForm'

const Footer = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <footer className="footer unselectable">
      {openModal && <FeedbackForm setOpen={setOpenModal} />}
      <h6 className="footer__copyright">Copyright © 2021 </h6>
      <div className="footer__social-media-linkicons">
        <div className="social-media-linkicons_link" onClick={(e) => setOpenModal(!openModal)}>
          <img src={mailIcon} alt="email icon" />
        </div>
        <a href="https://github.com/SergiyGurshal/air-pollution-web-app" className="social-media-linkicons_link" target="_blank">
          <img src={githubIcon} alt="github icon" />
        </a>
        <a href="https://www.linkedin.com/in/sergiy-gurshal/" className="social-media-linkicons_link" target="_blank">
          <img src={linkedinIcon} alt="linkedin icon" />
        </a>
      </div>
      <div className="footer__license-title">
        Icons made by{' '}
        <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect" target="_blank">
          Pixel perfect
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/" title="Flaticon" target="_blank">
          FlatIcon
        </a>
      </div>
    </footer>
  )
}

export default Footer
