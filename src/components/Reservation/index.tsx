import { Container, Content } from "./style";
import Dog from "../../assets/Dog2Mask.png"
import Vetor from "../../assets/OBJECTS.png"
import Arrow from "../../assets/arrow.svg"

export function Reservation() {
    return (
        <Container>
            <Content>
                <img src={Vetor} alt="" className="vetor"/>
                <h1>Faça sua reserva agora mesmo!</h1>
                <button>CLIQUE AQUI<img src={Arrow} alt="" /></button>
            </Content>
            <img src={Dog} alt="" className="dog"/>
        </Container>
    );

}