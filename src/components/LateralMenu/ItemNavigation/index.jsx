import { styled } from "styled-components"

const ItemListStyled = styled.li`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${ props => props.$ativo ? '#7B78E5' : '#D9D9D9'};
    font-family: ${ props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
    display: flex;
    align-items: center;
    gap: 22px;
`

const ItemNavigation = ({children, iconActive, iconInactive, active = false}) => {
    return (
        <ItemListStyled $ativo = { active }>
            <img src = { active ? iconActive : iconInactive } alt="" />
            { children }
        </ItemListStyled>
    )
}

export default ItemNavigation