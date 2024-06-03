import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './Contact.module.css';
export const Contact = () => {
  return (
   <footer id = 'contact' className={styles.container} data-aos="fade-up" data-aos-delay="800">
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/email.png")} alt='Email icon'/>
            <a href='mailto:guillermoverhelst26@gmail.com' >guillermoverhelst26@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedin.png")} alt='linkedin icon'/>
            <a href='https://www.linkedin.com/in/guillermo-andres-verhelst-hoyos/' target="_blank">linkedin.com/in/guillermo-andres-verhelst-hoyos</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/github.png")} alt='Github icon'/>
            <a href='https://github.com/guillermoverhelst' target="_blank">github.com/guillermoverhelst</a>
        </li>
    </ul>
   </footer>
  );
}
