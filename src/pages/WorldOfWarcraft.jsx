import React, { useContext } from 'react'
import ImgContainer from '../components/ImgContainer';
import wowImg from '../assets/wow.jpg';
import LanguageContext from '../context/Language';


const text = {
    Portuguese: {
        content: [
            {
                subtitle: "Sobre o jogo",
                paragraph: "World of Warcraft (WoW) é um jogo de RPG online multijogador massivo (MMORPG) lançado em 2004 pela Blizzard Entertainment. Situado no universo de fantasia de Warcraft, World of Warcraft se passa no mundo de Azeroth, aproximadamente quatro anos após os eventos do jogo anterior da série, Warcraft III: The Frozen Throne. O jogo foi anunciado em 2001 e foi lançado para o 10º aniversário da franquia Warcraft em 23 de novembro de 2004. Desde o lançamento, World of Warcraft teve oito grandes pacotes de expansão: The Burning Crusade (2007), Wrath of the Lich King ( 2008), Cataclysm (2010), Mists of Pandaria (2012), Warlords of Draenor (2014), Legion (2016), Battle for Azeroth (2018) e Shadowlands (2020)."
            },
            {
                subtitle: "Raças e facções",
                paragraph: "Para criar um novo personagem, de acordo com o enredo dos jogos anteriores de Warcraft, os jogadores devem escolher entre as facções opostas da Aliança ou da Horda; Pandarens, que foram adicionados em Mists of Pandaria, não se comprometem com uma facção até que a zona inicial seja concluída. Personagens das facções opostas podem realizar comunicação rudimentar (na maioria das vezes apenas 'emotes'), mas apenas membros da mesma facção podem falar, enviar mensagens, agrupar e ingressar em guildas. O jogador seleciona a raça do novo personagem, como orcs ou trolls para a Horda, ou humanos ou anões para a Aliança. Os jogadores devem selecionar a classe para o personagem, com opções como magos, guerreiros e sacerdotes disponíveis. A maioria das classes são limitadas a determinadas raças."
            },
            {
                subtitle: "Jogo no seu estilo",
                paragraph: "World of Warcraft contém uma variedade de mecanismos para jogar jogador contra jogador (PvP). Jogadores em servidores de jogador versus ambiente (PvE) podem optar por 'sinalizar' a si mesmos, tornando-se atacou jogadores da facção oposta. Dependendo do modo do reino, o combate PvP entre membros de facções opostas é possível em quase qualquer momento ou local no mundo do jogo - a única exceção são as zonas iniciais, onde a 'bandeira' PvP deve ser habilitada pelo jogador que deseja lutar contra jogadores da facção oposta. Servidores PvE (chamados normais ou RP), por outro lado, permitem que um jogador escolha se quer ou não entrar em combate contra outros jogadores. Em ambos os tipos de servidor, existem áreas especiais do mundo onde o combate livre para todos é permitido. Os campos de batalha, por exemplo, são semelhantes às masmorras: apenas um determinado número de personagens pode entrar em um único campo de batalha, mas cópias adicionais do campo de batalha podem ser feitas para acomodar jogadores adicionais. Cada campo de batalha tem um objetivo definido, como capturar uma bandeira ou derrotar um general adversário, que deve ser concluído para vencer o campo de batalha. Competir em campos de batalha recompensa o personagem com fichas e pontos de honra que podem ser usados ​​para comprar armaduras, armas e outros itens gerais que podem ajudar um jogador em muitas áreas do jogo. Ganhar um campo de batalha concede mais honra e fichas do que perder. Além disso, os jogadores também ganham honra quando eles ou companheiros de equipe próximos matam jogadores em um campo de batalha."
            }
        ]
    },
    English: {
        content: [
            {
                subtitle: "About the game",
                paragraph: "World of Warcraft (WoW) is a massively multiplayer online role-playing game (MMORPG) released in 2004 by Blizzard Entertainment. Set in the Warcraft fantasy universe, World of Warcraft takes place within the world of Azeroth, approximately four years after the events of the previous game in the series, Warcraft III: The Frozen Throne. The game was announced in 2001, and was released for the 10th anniversary of the Warcraft franchise on November 23, 2004. Since launch, World of Warcraft has had eight major expansion packs: The Burning Crusade (2007), Wrath of the Lich King (2008), Cataclysm (2010), Mists of Pandaria (2012), Warlords of Draenor (2014), Legion (2016), Battle for Azeroth (2018), and Shadowlands (2020)."
            },
            {
                subtitle: "Races and factions",
                paragraph: "To create a new character, in keeping with the storyline of previous Warcraft games, players must choose between the opposing factions of the Alliance or the Horde; Pandaren, which were added in Mists of Pandaria, do not commit to a faction until after the starting zone is completed. Characters from the opposing factions can perform rudimentary communication (most often just 'emotes'), but only members of the same faction can speak, mail, group and join guilds. The player selects the new character's race, such as orcs or trolls for the Horde, or humans or dwarves for the Alliance Players must select the class for the character, with choices such as mages, warriors, and priests available. Most classes are limited to particular races."
            },
            {
                subtitle: "Play at your style",
                paragraph: "World of Warcraft contains a variety of mechanisms for player versus player (PvP) play. Players on player versus environment (PvE) servers can opt to 'flag' themselves, making themselves attackable to players of the opposite faction. Depending on the mode of the realm, PvP combat between members of opposing factions is possible at almost any time or location in the game world—the only exception being the starting zones, where the PvP 'flag' must be enabled by the player wishing to fight against players of the opposite faction. PvE (called normal or RP) servers, by contrast, allow a player to choose whether or not to engage in combat against other players. On both server types, there are special areas of the world where free-for-all combat is permitted. Battlegrounds, for example, are similar to dungeons: only a set number of characters can enter a single battleground, but additional copies of the battleground can be made to accommodate additional players. Each battleground has a set objective, such as capturing a flag or defeating an opposing general, that must be completed to win the battleground. Competing in battlegrounds rewards the character with tokens and honor points that can be used to buy armor, weapons, and other general items that can aid a player in many areas of the game. Winning a battleground awards more honor and tokens than losing. In addition, players also earn honor when they or nearby teammates kill players in a battleground."
            }
        ]
    }
}

const WorldOfWarcraft = () => {
    const { language } = useContext(LanguageContext);
    return (
        <>
            <h1>World of Warcraft</h1>
            
            <ImgContainer imgPath={wowImg} imgAlt="World of Warcraft image" />

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

export default WorldOfWarcraft
