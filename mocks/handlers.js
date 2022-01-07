import { rest } from 'msw'

const results = [
  {
    'name': 'bulbasaur',
    'url': 'https://pokeapi.co/api/v2/pokemon/1/'
  },
  {
    'name': 'ivysaur',
    'url': 'https://pokeapi.co/api/v2/pokemon/2/'
  },
  {
    'name': 'venusaur',
    'url': 'https://pokeapi.co/api/v2/pokemon/3/'
  },
  {
    'name': 'charmander',
    'url': 'https://pokeapi.co/api/v2/pokemon/4/'
  },
  {
    'name': 'charmeleon',
    'url': 'https://pokeapi.co/api/v2/pokemon/5/'
  },
  {
    'name': 'charizard',
    'url': 'https://pokeapi.co/api/v2/pokemon/6/'
  },
  {
    'name': 'squirtle',
    'url': 'https://pokeapi.co/api/v2/pokemon/7/'
  },
  {
    'name': 'wartortle',
    'url': 'https://pokeapi.co/api/v2/pokemon/8/'
  },
  {
    'name': 'blastoise',
    'url': 'https://pokeapi.co/api/v2/pokemon/9/'
  }
]

export const handlers = [
  rest.get('https://pokeapi.co/api/v2/pokemon', async (req, res, ctx) => {
    return res(
      ctx.json({
        test: true,
        results: results
      })
    )
  }),

  // rest.get('https://pokeapi.co/api/v2/pokemon/:number', (req, res, ctx) => {
  //   const { number } = req.params
  //   console.log('number!!', number)
  //   return res(
  //     ctx.status(200),
  //     ctx.json({ results })
  //   )
  // }),
]