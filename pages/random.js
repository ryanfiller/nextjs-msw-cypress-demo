import { useState, useEffect } from 'react'

export default function Random(props) {
  const INITIAL = '???'
  const [number, setNumber] = useState(null)
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(INITIAL)

  async function getRandomPokemon() {
    setLoading(true)
    const min = 9 // skipped the mocked first 9
    const max = 898 // total possible number
    setNumber(Math.floor(Math.random() * (max - min + 1) + min))
  }

  useEffect(() => {
    if (number) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
        .then(response => response.json())
        .then(data => {
          // fake some response time here...
          setTimeout(() => {
            setError(false)
            setData(data)
            setLoading(false)
          }, 1000)
        })
        .catch(error => {
          setLoading(false)
          setError(true)
          console.error('error: ', error)
        })
    }
  }, [number])

  const render = () => {
    // the internet's worse state machine...
    if (data === INITIAL) return <span>?????</span>
    if (loading) return <span>loading...</span>
    if (error) return <span>uh oh, there was some error</span>
    
    return (
      <div>
        <img src={data.sprites.front_default} alt={data.name} />
        <br />
        {data.name}
        <br />
        {/* {JSON.stringify(data, null, 2)} */}
      </div>
    )
  }

  return (
    <>
      <main>
        {render()}
        <button onClick={() => getRandomPokemon()}>
          show me a random one
        </button>
      </main>

      <span className='env'>
        <span>at build time, process.env.TESTING was {props.isTesting}</span>
        <br/>
        <span>currently, process.env.TESTING is {(process.env.TESTING === 'true').toString()}</span>
      </span>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      isTesting: (process.env.TESTING === 'true').toString() || 'undefined'
    }
  }
}
