import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests'


export default function Home(props) {
  
  return (
    <div>
      <Head>
        <title>Stream TV and Movies Live and Online | Hulu Clone</title>
        <meta name="description" content="Hulu Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <Results results={props.movies.results}/>
    </div>
  )
}

export async function getServerSideProps(context){
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`)
  const movies = await request.json()

  return {
    props:{
      movies
    }
  };
}