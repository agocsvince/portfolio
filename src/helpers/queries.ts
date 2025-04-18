export const getPortfolioQuery = `
  query MyQuery {
    portfolio(where: {id: "cm94arbnbrz0a07uropv08eu4"}) {
      buttons
      email
      heading
      postHeading
      preHeading
      intro
      photos(first: 10) {
        fileName
        id
        url
        width
        height
      }
      portrait {
        fileName
        id
        url
      }
      videos(first: 10) {
        id
        date
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
      }
    }
  }
`;