import { styled } from "styled-components"
import ItemNavigation from "./ItemNavigation"

const ListStyled = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`

const LateralMenu = () => {
    return (
        <aside>
            <nav>
                <ListStyled>
                    <ItemNavigation 
                        iconActive="/icons/home-ativo.png" 
                        iconInactive="/icons/home-inativo.png"
                        active={true}
                    >
                        Início
                    </ItemNavigation>
                    <ItemNavigation 
                        iconActive="/icons/mais-vistas-ativo.png" 
                        iconInactive="/icons/mais-vistas-inativo.png"
                    >
                        Mais vistas
                    </ItemNavigation>
                    <ItemNavigation 
                        iconActive="/icons/mais-curtidas-ativo.png" 
                        iconInactive="/icons/mais-curtidas-inativo.png"
                    >
                        Mais curtidas
                    </ItemNavigation>
                    <ItemNavigation 
                        iconActive="/icons/novas-ativo.png" 
                        iconInactive="/icons/novas-inativo.png"
                    >
                        Novas
                    </ItemNavigation>
                    <ItemNavigation 
                        iconActive="/icons/surpreenda-me-ativo.png" 
                        iconInactive="/icons/surpreenda-me-inativo.png"
                    >
                        Surpreenda-me
                    </ItemNavigation>
                </ListStyled>
            </nav>
        </aside>
    )
}

export default LateralMenu