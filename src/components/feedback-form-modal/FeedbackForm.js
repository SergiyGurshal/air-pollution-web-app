import React, { useState, useRef, useEffect } from 'react'

import './feedback-form.css'

const FeedbackForm = ({ setOpen }) => {
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')

  const modal = useRef()

  const submitForm = (e) => {
    e.preventDefault()
    window.open(`mailto:seergiygurshall@gmail.com?subject=${subject}&body=${body}`)
    setOpen(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', onOutsideClick)
    return () => {
      document.removeEventListener('mousedown', onOutsideClick)
    }
  }, [])

  const onOutsideClick = (e) => {
    if (!modal.current.contains(e.target)) {
      setOpen(false)
    }
  }

  return (
    <div className="feedback-form">
      <div className="feedback-form__wrapper" ref={modal}>
        <h1 className="feedback-form__title">Contact Us</h1>
        <form className="feedback-form__form" onSubmit={submitForm}>
          <input type="text" id="name" placeholder="Name" className="feedback-form__input" />
          <input type="text" id="lname" placeholder="Email" className="feedback-form__input" />
          <input
            type="text"
            id="lname"
            placeholder="Subject"
            className="feedback-form__input"
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            id="message"
            cols="30"
            rows="10"
            placeholder="Message"
            className="feedback-form__input feedback-form__textarea"
            onChange={(e) => setBody(e.target.value)}
          />
          <button className="feedback-form__submitbtn">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default FeedbackForm
