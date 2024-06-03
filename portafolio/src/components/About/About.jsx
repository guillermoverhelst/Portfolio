import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './About.module.css';
import skills from "../../data/skills.json";

export const About = () => {
  return (
  <section  className={styles.container} id="about">
    <h2 className={styles.title} >About</h2>
    <div className={styles.content}>
        <p data-aos="fade-right"  data-aos-delay="200" className={styles.text}>
        My name is Guillermo Andres Verhelst Hoyos, I'm a software developer from Colombia.
        I am a responsible person, self-taught, willing to learn and perform the tasks assigned to me.
        I have honed my skills in front-end technologies such as React, CSS, HTML as well as back-end technologies such as Django, 
        Flask, JavaScript, Node.js, MySQL, SQL Server and PostgreSQL.
        <br/>
        
        <br/>
        Continuous learning is at the core of my professional journey, and I am always on the lookout for opportunities 
        where I can contribute my expertise, learn, and grow as a developer.
        
        </p>
        
        <div data-aos="fade-left" data-aos-delay="400" className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>    
    </div>

  </section>);
  
}
