// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
var Writing = defineDocumentType(() => ({
  name: "Writing",
  filePathPattern: `**/*.md`,
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true
    },
    spoiler: {
      type: "string",
      description: "A small description of the post"
    },
    featured: {
      type: "boolean",
      description: "If the writing should be featured",
      default: false,
      required: false
    },
    status: {
      type: "enum",
      options: ["draft", "published"],
      required: true
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: ({ _raw }) => {
        return _raw.sourceFileName.replace(/\.mdx?$/, "");
      }
    }
  }
}));
var rehypePrettyCodeOptions = {
  theme: {
    dark: "github-dark",
    light: "github-light"
  },
  tokensMap: {
    fn: "entity.name.function",
    objKey: "meta.object-literal.key"
  },
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
    node.properties.className.push("syntax-line");
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("syntax-line--highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["syntax-word--highlighted"];
  }
};
var contentlayer_config_default = makeSource({
  contentDirPath: "./data/writing",
  documentTypes: [Writing],
  date: {
    timezone: "America/New_York"
  },
  mdx: {
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]]
  }
});
export {
  Writing,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-AYNS23FG.mjs.map
