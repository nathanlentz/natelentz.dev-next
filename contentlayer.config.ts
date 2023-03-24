/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypePrettyCode, { Options } from 'rehype-pretty-code';

export const Writing = defineDocumentType(() => ({
  name: 'Writing',
  filePathPattern: `**/*.md`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    spoiler: {
      type: 'string',
      description: 'A small description of the post'
    },
    featured: {
      type: 'boolean',
      description: 'If the writing should be featured',
      default: false,
      required: false
    },
    status: {
      type: 'enum',
      options: ['draft', 'published'],
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: ({ _raw }: any) => {
        return _raw.sourceFileName.replace(/\.mdx?$/, '');
      },
    },
  },
}))

const rehypePrettyCodeOptions: Partial<Options> = {
  theme: {
    dark: 'github-dark',
    light: 'github-light',
  },
  tokensMap: {
    fn: 'entity.name.function',
    objKey: 'meta.object-literal.key',
  },
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
    node.properties.className.push('syntax-line');
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push('syntax-line--highlighted');
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ['syntax-word--highlighted'];
  },
};

export default makeSource({
  contentDirPath: './data/writing',
  documentTypes: [Writing],
  date: {
    timezone: 'America/New_York',
  },
  mdx: {
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
  },
})