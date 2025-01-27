import { Logo } from '../Logo'
import { Options } from '../Opt';
import { Button, Container, Content } from "./style";

export function Header() {
    return (
        <Container>
            <Content>
                <Logo />
                <div>
                    <Options />
                    <Button>RESERVAS ONLINE</Button>
                </div>
            </Content>
        </Container>
    )
}