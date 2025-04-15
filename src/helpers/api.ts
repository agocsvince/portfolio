import { LOCAL_DATA } from './localData';
import { getPortfolioQuery } from './queries';

const ENDPOINT = 'https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/cld1p2e6v05ma01um55kyflh8/master'
const ID = 'cm94arbnbrz0a07uropv08eu4'

const getPortfolio = async () => {
  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: getPortfolioQuery,
        variables: { id: ID }
      })
    })
    if (!response.ok) {
      throw Error(`Network error: ${response.status} ${response.statusText}`)
    }

    const result = await response.json()

    if (result.errors) {
      const errorMessages = (result.errors as { message: string }[]).map((err) => err.message).join(', ');
      throw new Error(`GraphQL error: ${errorMessages}`);
    }

    return result.data.portfolio || LOCAL_DATA.data.portfolio;
  } catch (error) {
    console.error('FetchGraphQL failed:', error);
  }
  
};

export default getPortfolio;
