import React from 'react';
import styles from './Intro.module.css';
import { getImageUrl } from '../../utils';
import pdfFile from '../../../assets/intro/HV.pdf';
export const Intro = () => {
  
  return <section  className={styles.container}>
    <div data-aos="fade-right" data-aos-delay="100" className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Guillermo</h1>
        <p className={styles.description}>
          Back-End Developer with experience using Django and flask.
          Reach out if you'd like to learn more!
        </p>
        <div className={styles.botonContainer}>
        <a href='mailto:guillermoverhelst26@gmail.com'className={styles.contactBtn}>Contact me</a>       
        <a href={pdfFile} download="HV.pdf" className={styles.contactBtn}>Resume</a>
        </div>     
    </div>
    <img className={styles.imgOfMe} src={getImageUrl("intro/prueba.png")} alt = "Image of me"/>
    <div className={styles.topBlur}/>
    <div className={styles.BottomBlur}/>
  </section>;
}
