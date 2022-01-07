import Link from 'next/link'

async function getPokemon() {
  return await fetch('https://pokeapi.co/api/v2/pokemon?limit=9&offset=151')
    .then(response => response.json())
    .then(data => data.results)
    .catch(error => console.error('error: ', error))
}

export default function Home(props) {
  return (
    <main>
      <ul className='grid'>
        {props.pokemon.map(({ name, url: apiUrl }) => {
          const number = apiUrl.split('/').filter(Boolean)[5]
          return (
            <li key={name}>
              <Link href={number}>
                <a>
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`} alt={name} />
                  {name}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
      <pre>
        {JSON.stringify(props.pokemon, null,  2)}
      </pre>
    </main>
  )
}

export async function getStaticProps() {
  return {
    props: {
      pokemon: await getPokemon(),
    }
  }
}
