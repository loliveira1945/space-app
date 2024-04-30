import { styled } from "styled-components"
import TextField from "../TextField"

const HeaderStyled = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
`

const MainHeader = () => {
    return (
    <HeaderStyled>
        <img src="/images/logo.png" alt="" />
        <TextField />
    </HeaderStyled>
    )
}

export default MainHeader