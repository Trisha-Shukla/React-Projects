import React from "react";

import styles from "./About.module.css";
import AboutImg from '../../assets/about/aboutImage.png'
import CursorIcon from '../../assets/about/cursorIcon.png'
import ServerIcon from '../../assets/about/serverIcon.png'
import UIIcon from '../../assets/about/uiIcon.png'


export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={AboutImg}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={CursorIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with expertise in building responsive and optimized websites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={ServerIcon} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have expertise developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={UIIcon} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};