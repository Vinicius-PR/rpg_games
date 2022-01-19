import React from 'react';
import styles from '../styles/slider.module.scss';

const Slider = ({ theme, handleTheme }) => {
    
    return (
        <div className={styles.container}>
            <span>{theme}</span>
            <label className={styles.switch}>
                <div>
                    <input onClick={handleTheme} type="checkbox" />
                    <span className={styles.switch__slider} />
                </div>
            </label>
        </div>
    )
}

export default Slider;
