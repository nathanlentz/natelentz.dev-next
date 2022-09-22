import { ReactNode } from 'react'
import Head from 'next/head'
import { styled } from '@stitches/react'
import { useRouter } from 'next/router'

type ContainerProps = {
  customMeta?: {
    title?: string
    description?: string
  }
  children: ReactNode
}

export const Container: React.FC<ContainerProps> = (props) => {
  const router = useRouter()
  const { children, customMeta } = props
  const meta = {
    title: 'Nate Lentz - Developer, husband, father of one',
    description: 'Full-stack Developer from the midwest.',
    image: '',
    type: 'website',
    ...customMeta,
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://natelentz.dev${router.asPath}`}
        />
        <link rel="canonical" href={`https://natelentz.dev${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Nate Lentz" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nathanlentz" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <Wrapper>{children}</Wrapper>
    </>
  )
}

const Wrapper = styled('div', {
  width: '$full',
  d: 'flex',
  ai: 'center',
  flexFlow: 'column',
  // minHeight: '$sh',
  // height: '$full',
  px: '$s',
})
