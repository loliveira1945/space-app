import { styled } from "styled-components"
import Tittle from "../Tittle"
import Tags from "./Tags"
import Popular from "./Popular"
import Image from "./Image"

const GaleryContainer = styled.div`
    display: flex;
    gap: 24px;
`

const FluidSection = styled.section`
    flex-grow: 1;
`

const ImagesContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`

const Galery = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito }) => {
    return (
        <>
            <Tags />
            <GaleryContainer>
                <FluidSection>
                    <Tittle>Navegue pela galeria</Tittle>
                    <ImagesContainer>
                        {fotos.map(foto => <Image 
                            aoZoomSolicitado={aoFotoSelecionada}
                            aoAlternarFavorito={aoAlternarFavorito}
                            key={foto.id} 
                            foto={foto} />)
                        }
                    </ImagesContainer>
                </FluidSection>
                <Popular />
            </GaleryContainer>
        </>
    )
}

export default Galery