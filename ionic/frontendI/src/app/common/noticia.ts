
export interface APINoticia {
  section: Section
  _id: string
  title: string
  subtitle: string
  author: string
  date: string
  content: string
  images: string[]
  __v: number
}

export interface Section {
  name: string
  icon: string
}
