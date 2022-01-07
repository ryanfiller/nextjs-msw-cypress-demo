import '../styles/globals.css'

if (process.env.TESTING === 'true') {
  console.log('we are mocking fetch requests!')
  require('../mocks')
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
