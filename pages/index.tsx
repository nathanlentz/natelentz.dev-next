import { InferGetStaticPropsType } from 'next'
import HomeHero from '@/components/home-hero/home-hero'
import { allWritings, Writing } from 'contentlayer/generated'

export async function getStaticProps() {
  const writings = allWritings
  return { props: { writings } }
}

const Index = ({ writings }: InferGetStaticPropsType<typeof getStaticProps>) => {
  
  return (
    <>
      <HomeHero />
      <div>
      Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Cura
      </div>
    </>
  )
}

export default Index
