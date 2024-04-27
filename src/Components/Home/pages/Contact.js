


function Contact() {
    return (
        <>
            <div className="contact-container" id='contact'>
                <h1>Contact Us</h1>
                <div className="small-container">
                    <div className="contact-box">
                        <div className="inner-contact-box">
                            <i className="fas ifont fa-mobile-alt"></i>
                            <p>+91 7520302400</p>
                        </div>
                    </div>
                    <div className="contact-box">
                        <div className="inner-contact-box">
                            <i className="far ifont fa-comments"></i>
                            <p>+91 7520302400</p>
                        </div>
                    </div>
                    <div className="contact-box">
                        <div className="inner-contact-box">
                        <i className="far ifont fa-envelope"></i>
                            <p>farmanparvez07@gmail.com</p>
                        </div>
                    </div>
                    <div className="input-box">
                    <div className="inner-input-box">
                        <input className = "inner-input" type="text" placeholder = "first name" />
                        <input className = "inner-input" type="text" placeholder = "last name" />
                    </div>
                    <input type="text" style={{marginBottom: '15px'}} placeholder = "Enter your email" /><br />
                    <textarea name="" placeholder = "enter the text" ></textarea>
                    <div className="btn "> Contact Us</div>
                    </div>
 
                </div>
            </div>
        </>
    )
}
export default Contact
