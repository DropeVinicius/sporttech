import React, { useRef } from 'react';
import './PreFooter.css';
import avatar1 from '../../assets/avatarone.png';
import avatar2 from '../../assets/avatartwo.png';
import avatar3 from '../../assets/avatarthree.png';
import lojasbanner from '../../assets/Google Play e Apple.svg';
import { Link } from 'react-router-dom'; // não esqueça disso no topo

export default function PreFooter() {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            const cardWidth = carouselRef.current.querySelector('.card-depoimento').offsetWidth;
            carouselRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            const cardWidth = carouselRef.current.querySelector('.card-depoimento').offsetWidth;
            carouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      };

    return (
        <div className="prefooter-container">
            <div className="linha-depoimentos">
                <div className="depoimento-fixo">
                    <h2>Depoimentos</h2>
                </div>

                <div className="carousel-depoimentos" ref={carouselRef}>
                    {/* Cards de depoimentos */}
                    {[1, 2, 3, 4, 5, 6].map((_, index) => {
                        const avatars = [avatar1, avatar2, avatar3];
                        const depoimentos = [
                            {
                                texto: "A SportTech transformou minha forma de ensinar! Hoje consigo alcançar mais alunos...",
                                autor: "SOFIA MENDES",
                            },
                            {
                                texto: "Com a SportTech, aprendi com os melhores professores e consegui evoluir muito mais rápido...",
                                autor: "BRUNO SILVA",
                            },
                            {
                                texto: "Adoro como a SportTech conecta a gente com pessoas que têm a mesma vibe...",
                                autor: "CAMILA ROCHA",
                            },
                            {
                                texto: "Acompanhar meu desempenho ficou muito mais fácil. A interface é clara...",
                                autor: "Personal Trainer",
                            },
                            {
                                texto: "Sempre fui sedentário, mas a SportTech me ajudou a criar uma rotina...",
                                autor: "Iniciante no Fitness",
                            },
                            {
                                texto: "A gamificação e os desafios semanais me fazem voltar toda vez...",
                                autor: "Usuário Ativo",
                            },
                        ];

                        const depo = depoimentos[index];

                        return (
                            <div className="card-depoimento" key={index}>
                                <div className="avatar-info">
                                    <img src={avatars[index % 3]} alt={`Avatar ${index + 1}`} className="avatar-img" />
                                    <p className="nome-usuario">{depo.autor}</p>
                                </div>
                                <p className="texto-depoimento">{depo.texto}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="navegacao-setas">
                <button className="seta" onClick={scrollLeft}>←</button>
                <button className="seta" onClick={scrollRight}>→</button>
            </div>

            <div className="frase-final">
                <h3 className="frase-texto">Conecte-se. Evolua. Inspire.</h3>
                <div className="lojas">
                    <Link to="/download">
                        <img src={lojasbanner} alt="App Stores" />
                    </Link>
                </div>
            </div>
        </div>
    );
}