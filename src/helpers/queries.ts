const portFolioId = 'cm94arbnbrz0a07uropv08eu4'

export const videosQuery = `
  videos(first: 10) {
    id
    description
    type
    title
    url
    asset {
      fileName
      url(transformation: {})
      id
      mimeType
    }
    date
  }
`

export const photosQuery = `
 photos(first: 20) {
    id
    alt
    asset {
      width
      url
      fileName
      height
    }
    title
  }
`

export const footerQuery = `
  footer {
    links(first: 10) {
      title
      url
      id
    }
    copyrightText
  }
`

export const webProjectsQuery = `
  webProjects {
    techStack
    url
    gitUrl
    id
  }
`

export const portraitQuery = `
  portrait {
    fileName
    id
    url
  }
`

export const getPortfolioQuery = `
  query MyQuery {
  portfolio(where: {id: "${portFolioId}"}) {
    buttons
    email
    heading
    postHeading
    preHeading
    ${photosQuery}
    ${portraitQuery}
    ${videosQuery}
    intro
    ${footerQuery}
    ${webProjectsQuery}
  }
}
`;
