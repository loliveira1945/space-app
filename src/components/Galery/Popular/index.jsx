import { styled } from "styled-components"
import Tittle from "../../Tittle"

import fotos from './fotos-populares.json'

const ColumnPhotos = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const Image = styled.img`
    max-width: 212px;
    border-radius: 20px;
`

const Button = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
`;

const Populares = () => {
    return (
        <section>
            <Tittle $alinhamento='center'>Populares</Tittle>
            <ColumnPhotos>
                {fotos.map(foto => <Image key={foto.id} src={foto.path} alt={foto.alt}/>)}
            </ColumnPhotos>
            <Button>Ver mais</Button>
        </section>
    )
}

export default Populares