import { Container } from './style';
import Food from '../../assets/servicos1.png'
import Swimming from '../../assets/servicos2.png'
import Tour from '../../assets/servicos3.png'
import HistoryTell from '../../assets/servicos4.png'
import Spa from '../../assets/servicos5.png'


export function ServicesPet(){
    return(
        <Container>
            <div>  
                <img src={Food} alt="Cachorro comendo" />
                <h2>Comidas saudáveis<br/>e naturais.</h2>
            </div>
            <div>
                <img src={Swimming} alt="Cachorro nadando" />
                <h2>Natação</h2>
            </div>
            <div>
                <img src={Tour} alt="Cão e tutora passeando" />
                <h2>Passeios de expedição<br/>e exploração de cheiros.</h2>
            </div>
            <div>
                <img src={HistoryTell} alt="Cachorro dormindo" />
                <h2>Contação de histórias<br/>para dormir.</h2>
            </div>
            <div>
                <img src= {Spa} alt="Cachorro enrolado em toalha de banho" />
                <h2>Sala de spa<br/>e massagens.</h2>
            </div>
        </Container>
    )
}