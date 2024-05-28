import fetch from 'isomorphic-unfetch'
import Layout from '../components/MyLayout'
import Link from 'next/link'

const Index = ({props}) => (
  <Layout>
  <div>
    <h1>Star Wars Films</h1>
    <ul>
      {/* Loop through the array of films objects and link each film to their own pages */}
       {props.swfilms?props.swfilms.map((show,index) => (
        <li key={show.episode_id}  type="1">
          <Link as={`/film/${index + 1}`} href={`/film?id=${index +1}`} legacyBehavior>
            <a>{show.title} </a>
          </Link>
        </li>
      )):null}
    </ul>
  </div>
  </Layout>
)

//getInitialProps fetch star war films data from swap API.
//The array that contain the films detail (results) is returend to Index component
Index.getInitialProps = async function() {
  const res = await fetch('https://swapi.dev/api/films/');
  const response = await res.json();
  const data = response;

  console.log(`Show data fetched. Count: ${data.length}`)
  console.log(data)

  return {
    props: { swfilms: response.results}
  }
}
export default Index