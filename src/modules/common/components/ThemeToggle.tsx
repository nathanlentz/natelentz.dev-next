import { useTheme } from 'next-themes'
import { styled } from 'stitches.config'

type Theme = 'light' | 'dark' | 'system'

export const ThemeToggle: React.FC = () => {
  const theme = useTheme()

  return (
    <ToggleWrapper>
      <div>asdf</div>
      <div>asdf</div>
    </ToggleWrapper>
  )
}

const ToggleWrapper = styled('div', {})
