import { Container } from "./style";
import Arrow from "../../assets/arrow.svg"

export function Home() {
    return (
        <Container>
            <button>VÍDEO SOBRE O RESORT ANIMAL</button>
            <div>
                <h1>Respeito e cuidado que o</h1>
                <h1>seu pet merece!</h1>
            </div>
            <button>CONHEÇA O RESORT ANIMAL <img src={Arrow} alt="Seta apontando para cima" /></button>
        </Container>
    )
}