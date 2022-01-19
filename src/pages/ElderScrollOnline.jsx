import React, {useContext} from 'react';
import ImgContainer from '../components/ImgContainer';
import imgESO from '../assets/eso.jpg';
import LanguageContext from '../context/Language';

const text = {
    Portuguese: {
        content: [
            {
                subtitle: "Sobre o Jogo",
                paragraph: "Experimente uma história em constante expansão em toda Tamriel em The Elder Scrolls Online, um RPG online premiado. Explore um mundo rico e vivo com amigos ou embarque em uma aventura solo. Desfrute de controle total sobre a aparência e o jogo do seu personagem, desde as armas que você usa até as habilidades que aprende – as escolhas que você fizer moldarão seu destino. Bem-vindo a um mundo sem limites."
            },
            {
                subtitle: "Jogue do jeito que você preferir",
                paragraph: "Batalhe, crie, roube, sitie ou explore e combine diferentes tipos de armaduras, armas e habilidades para criar seu próprio estilo de jogo. A escolha é sua em um mundo persistente e crescente de Elder Scrolls."
            },
            {
                subtitle: "Conte a sua própria história.",
                paragraph: "Descubra os segredos de Tamriel enquanto parte para recuperar sua alma perdida e salvar o mundo de Oblivion. Experimente qualquer história em qualquer parte do mundo, na ordem que você escolher - com outras pessoas ou sozinho.",
            },
            {
                subtitle: "RPG Multi jogadores",
                paragraph: "Complete missões com amigos, junte-se a outros aventureiros para explorar masmorras perigosas e cheias de monstros ou participe de batalhas PvP épicas com centenas de outros jogadores."
            }
        ]
    },
    English: {
        content: [
            {
                subtitle: "About this game",
                paragraph: "Experience an ever-expanding story across all of Tamriel in The Elder Scrolls Online, an award-winning online RPG. Explore a rich, living world with friends or embark upon a solo adventure. Enjoy complete control over how your character looks and plays, from the weapons you wield to the skills you learn – the choices you make will shape your destiny. Welcome to a world without limits."
            },
            {
                subtitle: "Play the way you like",
                paragraph: "Battle, craft, steal, siege, or explore, and combine different types of armor, weapons, and abilities to create your own style of play. The choice is yours to make in a persistent, ever-growing Elder Scrolls world."
            },
            {
                subtitle: "Tell your own story",
                paragraph: "Discover the secrets of Tamriel as you set off to regain your lost soul and save the world from Oblivion. Experience any story in any part of the world, in whichever order you choose – with others or alone.",
            },
            {
                subtitle: "A MULTIPLAYER RPG",
                paragraph: "Complete quests with friends, join fellow adventurers to explore dangerous, monster-filled dungeons, or take part in epic PvP battles with hundreds of other players."
            }
        ]
    }
    
}

const ElderScrollOnline = () => {
    const { language } = useContext(LanguageContext);
    return (
        <>
            <h1>Elder Scroll Online</h1>
            <ImgContainer imgPath={imgESO} imgAlt="Elder Scroll Online Image"/>
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

export default ElderScrollOnline
