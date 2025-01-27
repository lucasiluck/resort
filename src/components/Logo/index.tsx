import { Container } from "./style";
import logoImg from "../../assets/Logo.svg"
import logoText from "../../assets/Logo-Text.svg"

export function Logo(){
    return(
        <Container>
            <img src={logoImg} alt="" />
            <img src={logoText} alt="" />
        </Container>
    );
}