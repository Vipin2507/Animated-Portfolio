import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Mobile</h4>
            <p>
              <a href="tel:+919238419902" data-cursor="disable">
                9238419902
              </a>
            </p>
            <h4>Email</h4>
            <p>
              <a href="mailto:vipintomar2507@gmail.com" data-cursor="disable">
                vipintomar2507@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>
              BTech, Artificial Intelligence (Sagar Group of Institutions - SISTec)
              <br />
              Aug 2023 - Jun 2027
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://vipin2507.github.io/Vipin-Portfolio"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Portfolio <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/vipintomar2507"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Vipin Tomar</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
