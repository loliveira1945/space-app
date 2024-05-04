import { styled } from "styled-components"
import Image from "../Galery/Image"
import IconButton from "../IconButton"

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const DialogStyled = styled.dialog`
    position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`

const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito }) => {
    return (
        <>
            {foto && <>
                <Overlay />
                <DialogStyled open={!!foto} onClose={aoFechar}>
                    <Image 
                        foto={foto} expandida={true} 
                        aoAlternarFavorito={aoAlternarFavorito}/>
                    <form method="dialog">
                        <IconButton formMethod="dialog">
                            <img src="/icons/fechar.png" alt="Icone de fechar" />
                        </IconButton>
                    </form>
                </DialogStyled>
            </>}
        </>
    )
}

export default ModalZoom