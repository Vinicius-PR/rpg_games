import React, { useContext } from 'react';
import pwiImg from '../assets/pwi.jpg';
import ImgContainer from '../components/ImgContainer';
import LanguageContext from '../context/Language';


const text = {
    Portuguese: {
        content: [
            {
                subtitle: "O Perfect World precisa de você",
                paragraph: "PWI é um impressionante MMORPG gratuito onde os habitantes do intocado Perfect World devem se unir para lutar contra os Wraith - criaturas mortas-vivas que procuram destruir toda a criação. Em meio a um reino de ambientes incrivelmente ricos, os jogadores podem voar livremente pelos céus, explorar masmorras perigosas ou participar de intensas batalhas PvP por poder e terra."
            },
            {
                subtitle: "PvP entre servidores",
                paragraph: "Batalhas de facções, com até 80 contra 80 jogadores, contra facções rivais para reivindicar território no jogo e ganhar riquezas incalculáveis."
            },
            {
                subtitle: "Voe de forma livre",
                paragraph: "O MMO original com vôo. Lute no ar assim que criar seu personagem e explore o mundo verticalmente."
            },
            {
                subtitle: "Mundo em constante evolução",
                paragraph: "Atualizado regularmente com conteúdo extenso, incluindo eventos em todo o servidor até masmorras desafiadoras no final do jogo."
            },
            {
                subtitle: "Crie o Personagem Perfeito",
                paragraph: "Personalize de acordo com o desejo do seu coração com um profundo sistema de criação de personagens. Escolha entre 6 corridas únicas com 12 classes distintas para melhor se adequar ao seu estilo de jogo."
            }
        ]    
    },
    English: {
        content: [
            {
                subtitle: "The Perfect World needs you",
                paragraph: "PWI is a stunning free-to-play MMORPG where inhabitants of the pristine Perfect World must unite to battle against the Wraith - undead creatures who seek to destroy all of creation. Amidst a realm of stunningly rich environments, players can fly freely through the skies, explore dangerous dungeons, or join intense PvP battles for power and land."
            },
            {
                subtitle: "Cross Server PvP",
                paragraph: "Faction battles, featuring up to 80 vs 80 players, against rival factions to claim in-game territory and gain untold riches."
            },
            {
                subtitle: "Free-form Flying",
                paragraph: "The original MMO featuring flight. Fight in the air as soon as you create your character and explore the world vertically."
            },
            {
                subtitle: "Constantly Evolving World",
                paragraph: "Regularly updated with extensive content, including server-wide events to challenging end-game dungeons."
            },
            {
                subtitle: "Create the Perfect Character",
                paragraph: "Customize to your heart’s desire with a deep character creation system. Choose among 6 Unique Races with 12 Distinct Classes to best fit your playstyle."
            }
        ]
    }
}

const PerfectWorld = () => {
    const { language } = useContext(LanguageContext);
    return (
        <>
            <h1>Perfect World Internation</h1>

            <ImgContainer imgPath={pwiImg} imgAlt="Perfect World Iternational" />
            
            {
                text[language].content.map((cont, index) => (
                    <div key={index}>
                        <h2>{cont.subtitle}</h2>
                        <p>{cont.paragraph}</p>
                    </div>
                ))
            }
        </>
    )
}

export default PerfectWorld;
