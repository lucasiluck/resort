import { Container } from "./style";
import DogMask from "../../assets/MaskDog.png"
import Vetor from "../../assets/Vector 2.png"

export function About() {
    return (
        <Container>
            <div>
                <h3>SOBRE O RESORT ANIMAL</h3>
                <h2>O hotel perfeito para o<br />seu doguinho!</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi sed faucibus enim. Nunc turpis ipsum, ultrices varius interdum et, sollicitudin nec elit.<br/><br/>
                </p>
                <p>
                    Pellentesque in turpis sapien. Suspendisse sollicitudin leo et odio ornare,
                    id consequat urna tristique. Donec pretium quam commodo nisl mattis, eu cursus metus iaculis.
                </p>
            </div>
            <img src={DogMask} alt="Imagem de um cachorro" className="dog"/>
            <img src={Vetor} alt="" />
        </Container>
    )
}