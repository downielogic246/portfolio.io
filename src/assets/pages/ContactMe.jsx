import React from "react";

const ContactMe = () => {
  return (
    <>
      <section>
        <h1 className="heading contact">Contact</h1>
        <div className="contact-container">
          <li className="contact-info">
            <i class="fa-solid fa-map-pin"></i>
            <span className="location"> Bridgetown, Barbados</span>
          </li>
          <li className="contact-info">
            <a
              className="email-link"
              href="mailto:downielogic@gmail.com?subject=Quick Question"
            >
              <i class="fa-solid fa-inbox"></i>
              <span className="email">downielogic@gmail.com</span>
            </a>
          </li>
        </div>
        <div className="social-container">
          <li>
            <a
              href="https://github.com/mardanca"
              target="_blank"
              className="social-links"
            >
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/marlon-downie-b33580265"
              target="_blank"
              className="social-links"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/downie.logic?igshid=ZDc4ODBmNjlmNQ=="
              target="_blank"
              className="social-links"
            >
              <i class="fa-brands fa-square-instagram"></i>
            </a>
          </li>
        </div>
      </section>
    </>
  );
};

export default ContactMe;
