import { styled } from 'stitches.config'
import { Container, Text, Grid } from "@common/components"

export const Footer: React.FC = () => {
  return (
      <FooterGrid>
        <Text>Made with ❤️ in Allendale, MI</Text>
      </FooterGrid>
  )
}

const FooterGrid = styled(Grid, {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  padding: '$s 0',
  margin: 'auto',
  textAlign: 'center'
})

