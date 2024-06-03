import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './ProjectCard.module.css';
export const ProjectCard = ({project:{title,imageSrc,description,skills,demo,source}}) => {
    
  return (
    <div d className={styles.container}> 
        <img src={getImageUrl(imageSrc)} alt={title} className={styles.image}/>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
            {skills.map((skill,id)=>{
                return <li key={id} className={styles.skill}>{<img src={getImageUrl(skill)} alt='Skill Image'/>}</li>;
            })}
        </ul>
        <div className={styles.links}>
            <a className={styles.link} href={demo} target="_blank">Demo</a>
            <a className={styles.link} href={source} target="_blank">Source</a>
        </div>
    </div>
  );
};
