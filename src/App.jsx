import { styled } from "styled-components"
import StyleGlobal from "./components/StyleGlobal"
import MainHeader from "./components/MainHeader"
import LateralMenu from "./components/LateralMenu"
import Banner from "./components/Banner"
import bannerBackground from './assets/banner.png'
import Galery from "./components/Galery"
import fotos from './fotos.json'
import ModalZoom from './components/ModalZoom'
import { useState } from "react"

const GradientBackground = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
  font-family: 'GandhiSansBold';
`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const GaleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }
    setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria => {
      return {
        ...fotoDaGaleria,
        favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
      }
    }))
  }

  return (
    <GradientBackground>
      <StyleGlobal />
      <AppContainer>
        <MainHeader />
        <MainContainer>
          <LateralMenu />
          <GaleryContent>
            <Banner
              text="A galeria mais completa de fotos do espaço!"
              backgroundImage={bannerBackground} 
            />
            <Galery 
              fotos={fotosDaGaleria}
              aoFotoSelecionada={foto => setFotoSelecionada(foto)} 
              aoAlternarFavorito={aoAlternarFavorito}
            />
          </GaleryContent>
        </MainContainer>
      </AppContainer>
      <ModalZoom 
        foto={fotoSelecionada}
        aoFechar={() => setFotoSelecionada(null)}
        aoAlternarFavorito={aoAlternarFavorito}
      />
    </GradientBackground>
  )
}

export default App