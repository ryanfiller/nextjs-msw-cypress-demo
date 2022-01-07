// https://tomasgildev.com/posts/testing-nextjs-static-pages

import { rest } from 'msw'

const mockList = [
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

const mockStats = [
  { 'base_stat': 'MOCKED DATA', 'stat': { 'name': 'hp' } },
  { 'base_stat': 'MOCKED DATA', 'stat': { 'name': 'attack' } },
  { 'base_stat': 'MOCKED DATA', 'stat': { 'name': 'defense' } },
  { 'base_stat': 'MOCKED DATA', 'stat': { 'name': 'special-attack' } },
  { 'base_stat': 'MOCKED DATA', 'stat': { 'name': 'special-defense' } },
  { 'base_stat': 'MOCKED DATA', 'stat': { 'name': 'speed' }  }
]

export const handlers = [
  rest.get('https://pokeapi.co/api/v2/pokemon', async (req, res, ctx) => {
    return res(
      ctx.json({
        test: true,
        results: mockList
      })
    )
  }),

  rest.get('https://pokeapi.co/api/v2/pokemon/:number', async (req, res, ctx) => {
    const number = parseInt(req.params.number)

    if (number <= 9) {
      const realResponse = await ctx.fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
        .then(response => response.json())
  
      return res(
        ctx.status(200),
        ctx.json({
          ...realResponse,
          stats: mockStats
        })
      )
    } else {
      const dittoResponse = await ctx.fetch(`https://pokeapi.co/api/v2/pokemon/132`)
        .then(response => response.json())
  
      return res(
        ctx.status(200),
        ctx.json({...dittoResponse})
      )
    }
  })
]