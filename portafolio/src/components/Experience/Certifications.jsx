import React from "react";
import { getImageUrl } from "../../utils";
import styles from './Experience.module.css';

export default function Certifications(props){
    return(
        <div className={styles.card}>
            <img src={getImageUrl(props.url)} alt={props.name}/>
            <h2>{props.name}</h2>
            <a href={props.link} target="_blank">See Certification</a>
        </div>
    );
}