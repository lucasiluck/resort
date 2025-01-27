import { ServicesPet } from "../ServicesPet"
import { Container } from "./style"
import Whats from "../../assets/whats.svg"

export function SpecialServices() {
    return (
        <Container>
            <a
                href="https://wa.me/551935711771?text=Olá!%20Gostaria%20de%20mais%20informações."
                target="_blank" rel="noreferrer"
            >
                <button>
                    <img src={Whats}
                        alt="Enviar mensagem Whatsapp"
                        className="whats"
                    />
                </button>
            </a>


            <h2>No Resort Animal seu pet encontra</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed faucibus enim. </p>
            <div>
                <ServicesPet />
            </div>
        </Container>
    )
}