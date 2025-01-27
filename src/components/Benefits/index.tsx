import { Container, Content } from "./style";
import { Data } from "./DadosBenefits";
import Vetor from '../../assets/benefits/retangulo.png'
import { useEffect, useState } from "react";

interface DataProps {
    src: string;
    name: string;
    description: string;
}

export function Benefits() {
    const [data, setData] = useState<DataProps[]>([]);

    useEffect(() => {
        setData(Data);
    }, [])

    return (
        <Container>
            <h1>Benefícios para os Donos de Pets</h1>
            <Content>
                {data.map((benefit, index) => (
                    <ul>
                        <li key={index}>
                            <img src={Vetor} alt="Quadrado Azul de fundo" />
                            <img src={benefit.src} alt={benefit.name} className="benefits"/>
                            <h2>{benefit.name}</h2>
                            <p>{benefit.description}</p>
                        </li>
                    </ul>
                ))}
            </Content>
        </Container>
    );
}