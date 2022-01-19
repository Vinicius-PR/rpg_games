import React, {useContext} from 'react';
import styles from '../styles/layout.module.scss';

import ThemeContext from '../context/Theme';


const Layout = ({ children }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <div className={`${styles.container} ${theme === "Light" ? styles.light : styles.dark}`}>
                {children}
            </div>
        </>
    )
}

export default Layout
