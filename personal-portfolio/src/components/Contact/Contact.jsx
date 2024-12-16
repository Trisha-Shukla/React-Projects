import React from "react";
import Email from '../../assets/contact/emailIcon.png'
import Github from '../../assets/contact/githubIcon.png'
import LinkedIn from '../../assets/contact/linkedinIcon.png'
import styles from "./Contact.module.css";


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={Email} alt="Email icon" />
          <a href="mailto:tshukla025@gmail.com">tshukla025@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={LinkedIn}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/trisha-shukla/">linkedin.com/in/trisha-shukla</a>
        </li>
        <li className={styles.link}>
          <img src={Github} alt="Github icon" />
          <a href="https://github.com/Trisha-Shukla">github.com/Trisha-Shukla</a>
        </li>
      </ul>
    </footer>
  );
};