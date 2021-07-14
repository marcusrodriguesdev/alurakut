import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
const Box = styled.div`
  background: #ffff;
  border-radius: 8px;
`;

const MainGrid = styled.main`
  display: grid;
  grid-gap: 10px;
  padding: 16px;

  @media(min-width: 860px) {
    grid-template-areas: 'profileArea welcomeArea profileRelationsArea';
    grid-templates-columns: 160px 618px 312px;
  }
`

export default function Home() {
  return (
    <MainGrid> 
      <div style={{ gridArea: 'profileArea' }}>
        <Box>
          Imagem
        </Box>
      </div>
      <div style={{ gridArea: 'welcomeArea' }}>
        <Box>
          Bem-Vindo
        </Box>
      </div>
      <div style={{ gridArea: 'profileRelationsArea' }}>
        <Box>
          Pessoas da comunidade
        </Box>
        <Box>
          Comunidade
        </Box>
      </div>
    </MainGrid>
  )
}
