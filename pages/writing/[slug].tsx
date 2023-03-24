import { allWritings, Writing } from 'contentlayer/generated'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'

const Writing = ({ writing }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <h1>{ writing.title }
    </h1>
  )
}

export const getStaticProps: GetStaticProps<{
  writing: Writing;
}> = ({ params }) => {
  const { slug } = params!
  const writing = allWritings.find((writing) => writing.slug === slug)

  if (!writing) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      writing,
    },
  }
}

export const getStaticPaths: GetStaticPaths<{ slug: string}> = () => {
  const paths = allWritings.map((writing) => {
    return {
      params: {
        slug: writing.slug,
      },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
}

export default Writing
