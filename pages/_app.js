import '../styles/globals.css'

if (process.env.TESTING === 'true') {
  require('../mocks')
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
