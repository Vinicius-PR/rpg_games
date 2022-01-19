import React from 'react';
import styles from '../styles/language.module.scss';

const Language = ({ language, handleLanguage }) => {
    return (
        <div className={styles.language}>

            <label htmlFor="language">Language</label >

            <select name="language" id="language"
                onChange={(e) =>handleLanguage(e.target.value)}
            >
                <option value="Portuguese">Portuguese</option>
                <option value="English">English</option>
            </select>

        </div>
    )
}

export default Language;
