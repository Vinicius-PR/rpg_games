import React, { useContext } from 'react';
import ImgContainer from '../components/ImgContainer';
import gw2Img from '../assets/gw2.jpg';
import LanguageContext from '../context/Language';


const text = {
    Portuguese: {
        content: [
            {
                subtitle: "Explore um mundo vivo",
                paragraph: "Tyria ganha vida com milhares de histórias que mudam com base nas ações de jogadores como você. Você nunca sabe o que descobrirá cada vez que jogar!"
            },
            {
                subtitle: "Combate Orientado à Ação",
                paragraph: "Experimente combates rápidos e de alto impacto e escolha entre um arsenal de profissões, armas e estilos de jogo. Ataque em movimento, desvie e role para longe dos golpes inimigos e venha para resgatar seus aliados no meio da batalha. No mundo aberto, você pode se juntar a todos os jogadores que encontrar - sem necessidade de agrupamento!"
            },
            {
                subtitle: "É a sua história",
                paragraph: "Tyria é irrevogavelmente moldada por seu passado e você desempenha um papel crucial em seu futuro. Crie um personagem único, decida como sua história evolui e descubra novas revelações, perguntas e verdades a cada escolha que você fizer."
            },
            {
                subtitle: "Jogo competitivo para todos",
                paragraph: "O jogo competitivo em Guild Wars 2 é fácil de aprender, mas oferece desafios para novos jogadores e PvPers hardcore. Se você decidir entrar em partidas rápidas e furiosas entre pequenos grupos de jogadores em PvP organizado ou se juntar a centenas de outros jogadores nas grandes batalhas de World vs. World, o PvP é onde você encontrará o desafio final!"
            }
        ]
    },
    English: {
        content: [
            {
                subtitle: "Explore a Living World",
                paragraph: "Tyria comes alive with thousands of stories that change based on the actions of players like you. You never know what you'll discover each time you play!"
            },
            {
                subtitle: "Action-Oriented Combat",
                paragraph: "Experience high-impact, fast-paced combat and choose from an arsenal of professions, weapons, and playstyles. Attack on the move, dodge and roll away from enemy blows, and come to your allies' rescue midbattle. In the open world, you can team up with every player you meet—no grouping required!"
            },
            {
                subtitle: "It’s Your Story",
                paragraph: "Tyria is irrevocably shaped by its past, and you play a crucial role in its future. Create a unique character, decide how their story evolves, and uncover new revelations, questions, and truths with every choice you make."
            },
            {
                subtitle: "Competitive Play for Everyone",
                paragraph: "Competitive play in Guild Wars 2 is easy to learn but offers challenges for new players and hardcore PvPers alike. Whether you decide to jump into quick, furious matches between small groups of players in organized PvP or join hundreds of other players in the grand battles of World vs. World, PvP is where you'll find the ultimate challenge!"
            }
        ]
    }
}

const GuildWar2 = () => {
    const { language } = useContext(LanguageContext);

    return (
        <>
            <h1>Guild War 2</h1>
            <ImgContainer imgPath={gw2Img} imgAlt="Guild War 2 Image" />
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

export default GuildWar2
