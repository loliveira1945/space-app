import { styled } from "styled-components"
import IconButton from "../../IconButton"

const Figure = styled.figure`
    width: ${ props => props.$expandida ? '90%' : '460px' };
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
        }
        h3, h4 {
            margin: 0;
            font-size: 16px;
        }
    }
`

const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Image = ({ foto, expandida = false }) => {
    return (
        <Figure $expandida={expandida} id={`foto-${foto.id}`}>
            <img src={foto.path} alt={foto.alt} />
            <figcaption>
                <h3>{foto.titulo}</h3>
                <Footer>
                    <h4>{foto.fonte}</h4>
                    <IconButton>
                        <img src="/icons/favorito.png" alt="Icone de favorito" />
                    </IconButton>
                    {!expandida && <IconButton aria-hidden={expandida}>
                        <img src="/icons/expandir.png" alt="Icone de expandir" />
                    </IconButton>}
                </Footer>
            </figcaption>
        </Figure>
    )
}

export default Image