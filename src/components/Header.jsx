import React, { useEffect, useState, useContext } from 'react';
import Slider from './Slider';
import styles from '../styles/header.module.scss';
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import ThemeContext from '../context/Theme';
import LanguageContext from '../context/Language';

import Language from './Language';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
    })

    function handleMenuToggle() {
        setIsMenuOpen((v) => !v);
    }

    useEffect(() => {
        function handleResize() {
            setDimensions({
                width: window.innerWidth,
            })
        }
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (dimensions.width > 768 && isMenuOpen) {
            setIsMenuOpen(false);
        }
    }, [dimensions.width, isMenuOpen]);

    const { theme, handleTheme } = useContext(ThemeContext);
    const { language, setLanguage } = useContext(LanguageContext);

    return (
        <header className={`${styles.header} ${theme === "Light" ? styles.light : styles.dark}`}>
            <section className={styles.header__container}>
                <div className={styles.header__container__logo}>
                    <h1>Favorite RPGs</h1>
                </div>

                <nav className={`${styles.header__container__nav} 
                                 ${isMenuOpen ? styles.isActive : ""}
                                 ${theme === "Light" ? styles.light : styles.dark}`}>
                    {dimensions.width > 768 ? (
                        <ul className={styles.header__container__nav__main}>
                            <li><Link to="/">{ language === "Portuguese" ? "Inicio" : "Home" }</Link></li>
                            <li><span>{ language === "Portuguese" ? "Jogos" : "Games" }</span>
                                <ul className={styles.header__container__nav__main__submenu}>
                                    <li> <Link to="/perfect-world">Perfect World</Link> </li>
                                    <li> <Link to="/guild-war-2">Guild War 2</Link></li>
                                    <li> <Link to="/world-of-warcraft">World of Warcraft</Link></li>
                                    <li> <Link to="/elder-scroll-online">Elder Scroll Online</Link></li>
                                </ul>
                            </li>
                        </ul>
                    ) : (
                        <ul className={styles.header__container__nav__main}>
                            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                            <li> <Link to="/perfect-world" onClick={() => setIsMenuOpen(false)}>Perfect World</Link> </li>
                            <li> <Link to="/guild-war-2" onClick={() => setIsMenuOpen(false)}>Guild War 2</Link></li>
                            <li> <Link to="/world-of-warcraft" onClick={() => setIsMenuOpen(false)}>World of Warcraft</Link></li>
                            <li> <Link to="/elder-scroll-online" onClick={() => setIsMenuOpen(false)}>Elder Scroll Online</Link></li>      
                        </ul>
                    )}

                    <Language language={language} handleLanguage={setLanguage} />
    
                    <Slider theme={theme} handleTheme={handleTheme}/>
                </nav>

                <div className={styles.header__container__toggle}>
                    {!isMenuOpen ?
                        <BiMenu onClick={handleMenuToggle}/>
                        : <AiOutlineClose onClick={handleMenuToggle}/>
                    }
                </div>
            </section>
        </header>
    )
}

export default Header;
