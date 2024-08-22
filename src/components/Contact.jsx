import './contact.css';

import { useState } from 'react';

const goHome = () => {
    document.querySelector('.home').scrollIntoView({ behavior: 'smooth' })
  }

const Contact = () => {
    const [value, setValue] = useState('');
  return (
    <>
    <div className='container'>
      <div className="contact">

        <h1>get in <span>touch</span></h1>

        <div className="text-input">
            <div className="texts">
                <h2>For Any Queries and Support</h2>
                <div className="textBox">
                    <div className="iconBox">
                        {<ion-icon name="location-outline"></ion-icon>}
                    </div>
                    <div className="text">
                        <h3>Location</h3>
                        <p>Barpeta Road, Assam, India</p>
                    </div>
                </div>
                <div className="textBox">
                    <div className="iconBox">
                        {<ion-icon name="mail-outline"></ion-icon>}
                    </div>
                    <div className="text">
                        <h3>Write to us at</h3>
                        <p>sketchstore.gs@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="inputBox">
                <input
                placeholder='Your Name'
                onChange={e => setValue(e.target.value)}
                type="text" />

                <input
                placeholder='Your Email'
                onChange={e => setValue(e.target.value)}
                type="text" />

                <input
                placeholder='Your Phone (optional)'
                onChange={e => setValue(e.target.value)}
                type="text" />

                <input
                placeholder='Subject'
                onChange={e => setValue(e.target.value)}
                type="text" />

                <input className='message'
                placeholder='Your Message (10-500 char)'
                onChange={e => setValue(e.target.value)}
                type='message' />

                <button onClick={goHome}>Send Message</button>
            </div>
        </div>

      </div>
    </div>

    {/* <div className="container">
        <div className="t1">
            <h2>SketchStore</h2>
            <p>Tools that makes development easier.</p>
        </div>
        <div className="t2">

        </div>
        <div className="t3"></div>
        <div className="t4"></div>
    </div> */}
    </>
  )
}

export default Contact
