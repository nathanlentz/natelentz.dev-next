import { allWritings, Writing } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks';
import { MDX_ELEMENTS } from '@/utils/mdx.constants';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { pageHeader } from '@/styles/primitives/text.css';

const Writing = ({ writing }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXContent = useMDXComponent(writing.body.code)
  return (
    <>
      <h1 className={pageHeader}>{ writing.title }</h1>
      <MDXContent components={{ ...MDX_ELEMENTS }}/>
    </>
    
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
