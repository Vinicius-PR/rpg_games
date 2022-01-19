import React, { useContext } from 'react';
import LanguageContext from '../context/Language';


const text = {
    Portuguese: {
        title: "Seja bem vindo ao Favorite RPGs",
        content: [
            {
                subtitle: "O que vc irá encontrar aqui?",
                paragraph: "Oi, meu nome é Vinicius. Isso aqui é um projeto pessoal usando React, hooks e o contextAPI. O assunto é sobre os meus jogos RPG online favoritos. I gosto de jogar no meu tempo livre, muita das vezes a noite. Raramente eu jogo a tarde ou de manhã. Provavelmente você deve estar achando que eu sou um nerde, mas não sou. Ou talvez seja um pouco :). Além dos jogos, gosto também de estudar sobre programação, mercado de ações e cripto moedas."
            },
            {
                subtitle: "Qual é a melhor parte de jogar esses jogos online?",
                paragraph: "A melhor parte são as pessoas. Esse jogos seria nada sem as pessoas. A gente conversa, faz amizades, fazemos dungeons juntos e mais um monte de coisa. É bom para se divertir e passar o tempo."
            },
            {
                subtitle: "Algum lado ruim?",
                paragraph: "Não existe jogo perfeito. Todos tem algum problemas. Isso pode ser um bug, pessoas mal educadas e problemas com a engine do jogo."
            },
            {
                subtitle: "Qual deles você gosta mais?",
                paragraph: "Difícil de dizer. Um que eu jogo muito é o Perfect world Internation. É um jogo de graça para jogar mas tem que pagar para ganha. Eu jogo até hoje porque tenho amigos que ainda joga e tenho uma conta boa lá. Outro que eu gosto muito é o Guild War 2. Esse tem que comprar para jogar. A trilha sonora do jogo é perfeita e não precisa pagar para ganhar. Eu realmnete indico ele."
            }
                
        ]
    },
    English: {
        title: "Welcome to the Favorite RPGs",
        content: [
            {
                subtitle: "What will you find here?",
                paragraph: "Hi, my name is Vinicius. This is a personal project about my favorite RPG online games. I like to play at my free time, most at night. Rarely I play at afternoon or in the morning. Probably you think that I am a nerd, but I'm not. Or maybe I'm a little :). Besides of game, I also like to study about programing, stock market and cryptocurrencies."
            },
            {
                subtitle: "What is the best part of playing these games?",
                paragraph: "The best part are the people in it. These games would be nothing without people. We talk, make friends, do dungers together and a bunch more. It is good to have fun and kill some time."
            },
            {
                subtitle: "Any downsides?",
                paragraph: "There is no perfect game. All of them have some issue. It can be bugs, rude people and game engine problems."
            },
            {
                subtitle: "Which one you like more?",
                paragraph: "Hard to say.The one that I play the most is Perfect World.It is free to play but pay to win.I just play it until today because I have friends that sill play and I have a good account. The other that I also like a lot is Guild War 2. It is buy to play.The soundtrack is perfect and it is not pay to win.I really recomend this one."
            }
                
        ]
    }
}

const Home = () => {

    const { language } = useContext(LanguageContext);
    return (
        <>
            <h1>{text[language].title}</h1>
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

export default Home
