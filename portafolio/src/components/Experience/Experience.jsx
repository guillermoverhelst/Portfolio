import React from 'react';
import { getImageUrl } from '../../utils';
import history from '../../data/history.json';
import certification from '../../data/certifications.json';
import styles from './Experience.module.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Certifications from './Certifications';

export const Experience = () => {
  const certificationobj = certification.map((certification,id)=>(
    <Certifications key={id}
      name = {certification.title}
      url = {certification.Image}
      link = {certification.link}
    />  
  ));
           
  

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <ul data-aos="zoom-in" className={styles.history}>
          {
            history.map((historyItem,id)=>{
              return <li className={styles.historyItem} key={id}>
                <img  className={styles.image} src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} Logo`}/>
                <div data-aos="fade-left" data-aos-delay="400" className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>{historyItem.experiences.map((experience,id)=>{
                    return <li key={id}>{experience}</li>;
                  })}</ul>
                  <p className={styles.skillstext}>Skills:</p>
                  <ul className={styles.skillsList}>
                    {historyItem.skills.map((skill, id) => (
                      <li key={id} className={styles.skillItem}>
                        <div className={styles.imageContainer}>
                          <img src={getImageUrl(skill.imgSrc)} alt={skill.title} />
                        </div>
                        <span className={styles.skillTitle}>{skill.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            })
          }
        </ul>
      </div>
      <h2 className={styles.title}>Certifications</h2>
      <div data-aos = "zoom-in" data-aos-delay="400" className={styles.slidercontainer}>
        <Carousel showDots={true} removeArrowOnDeviceType={["tablet", "mobile"]}  responsive={responsive}>
            {certificationobj}
        </Carousel>
      </div>
    </section>
  );
}
