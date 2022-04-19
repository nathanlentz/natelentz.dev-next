import { H2 } from '@common/components'
import { AnimatedLine } from '@common/components/AnimatedLine'

export const RecentWriting: React.FC = () => {
  return (
    <>
      <div>
        <H2 weight="boldItalic" css={{ fontSize: '$6', position: 'relative' }}>
          Writing
          <AnimatedLine axis="x" position="bottom" />
        </H2>
      </div>
    </>
  )
}
