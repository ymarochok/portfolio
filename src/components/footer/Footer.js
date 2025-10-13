import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';


export default function Footer() {
    return (
        <div className='footer'>

            <div className='column contact_me'>
                <p>Contact me:</p>
                <div className='row-socials'>
                    <a href="https://github.com/ymarochok" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        {/* <FontAwesomeIcon icon={faGithub} size="2x" /> */}
                        <img 
                            src="./assets/github.png" 
                            alt="GitHub" 
                            // style={{ width: "48px", height: "48px"}} 
                            />
                   
                    </a>
                
                    <a href="https://www.linkedin.com/in/yaroslav-marochok-7b495a358/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        {/* <FontAwesomeIcon icon={faLinkedin} size="2x" /> */}
                        <img 
                            src="./assets/linkedin.png" 
                            alt="Linkedin" 
                            // style={{ width: "48px", height: "48px"}} 
                            />
                    </a>
                
                    <a href="https://t.me/@ukr_og_rick" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                        {/* <FontAwesomeIcon icon={faTelegram} size="2x" /> */}
                        <img 
                            src="./assets/telegram.png" 
                            alt="Telegram" 
                            // style={{ width: "48px", height: "48px"}} 
                            />
                    </a>
                
                    <a href="mailto:ymarochok@gmail.com" aria-label="Email">
                        {/* <FontAwesomeIcon icon={faEnvelope} size="2x" /> */}
                        <img 
                            src="./assets/envelope.png" 
                            alt="Gmail" 
                            style={{ width: "32px", height: "22px"}} 
                            />
                    </a>
                
                    <a href="tel:+421952155913" aria-label="Phone">
                        {/* <FontAwesomeIcon icon={faPhone} size="2x" /> */}
                        <img 
                            src="./assets/phone.png" 
                            alt="Phone" 
                            // style={{ width: "48px", height: "48px"}} 
                            />
                    </a>

                </div>
            </div>
            
            <div className='column created-text'>
                <p>Created by Yaroslav Marochok</p>
            </div>
            
            <div className='column dw_cv_btn_div'>
                <a  href="./assets/cv.pdf" download="./assets/cv.pdf"><button>Download CV</button></a>
            </div>

        </div>
    )
}