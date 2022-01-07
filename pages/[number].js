async function getPokemonList() {
  return await fetch('https://pokeapi.co/api/v2/pokemon?limit=9&offset=151')
    .then(response => response.json())
    .then(data => data.results.map(pokemon => {
      return { params: { number: pokemon.url.split('/').filter(Boolean)[5] }}
    }))
    .catch(error => console.error('error getting list: ', error))
}

async function getPokemonData(number) {
  return await fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`)
    .then(response => response.json())
    .then((data) => ({
      name: data.name,
      sprites: data.sprites,
      stats: data.stats
    }))
    .catch(error => console.error('error getting data: ', error))
}

const Page = (props) => {
  return (
    <main>
      <h1>{props.data.name}</h1>
      <img src={props.data.sprites.front_default} alt={props.data.name} />
      <pre>
        {JSON.stringify(props.data.stats, null, 2)}
      </pre>
    </main>
  )
}

export default Page

export async function getStaticProps(context) {
  const { params: { number } } = context
  return {
    props: {
      number: number,
      data: await getPokemonData(number)
    }
  }
}

// which pages will be pre-rendered
export async function getStaticPaths() {
  return {
    paths: await getPokemonList(),
    fallback: false
  }
}
