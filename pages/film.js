import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const Film = ({swfilm}) => (
    <Layout>
      <div>
       <h1>Title: {swfilm.title}</h1>
       <p>Episode: {swfilm.episode_id}</p>
       <p>Release date: {swfilm.release_date}</p>
       <p>Director: {swfilm.director}</p>
       <p>Producer: {swfilm.producer}</p>
       </div>
    </Layout>
)

/* getInitialProps is used to retrieve
data from the star war API using the ID passed through from index.js.
The first argument of the function is the context object. 
It has a query field that we can use to fetch information.
In our example, we picked the ID from query params and fetched its show data from the Star war API. */
Film.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://swapi.dev/api/films/${id}`)
  const swfilm = await res.json()
 
  console.log(`Fetched show: ${ swfilm.title}`)
  console.log(`Fetched show: ${ swfilm.director}`)

  return { swfilm }
}

export default Film