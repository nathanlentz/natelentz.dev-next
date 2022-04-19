export interface MdxData {
  content: string
  metaData: any
  fileName: string
}

// export type FrontMatterPostParse = Omit<FrontMatterPreParse, 'publishDate'> & {
//   publishDate: string
// }

// export interface MdxMetaData = FrontMatterPostParse & {
//   readingTimeResults: ReadingTimeResults
//   year: string
//   month: string
//   date: string
// }
