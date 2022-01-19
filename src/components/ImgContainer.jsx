import React from 'react';
import styles from '../styles/imgContainer.module.scss';

const ImgContainer = ({imgPath, imgAlt}) => {
    return (
        <div className={styles.imgContainer}>
            <img src={imgPath} alt={imgAlt} />
        </div>
    )
}

export default ImgContainer;
