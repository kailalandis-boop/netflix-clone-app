import requests from "../utils/requests";
import { Metadata } from 'next'
import Header from "./components/Header";
import Banner from "./components/Banner";
import { Movie } from "@/typings";
import Row from "./components/Row";

export const metadata: Metadata = {
  title: "Let's Build Netflix Clone with Next.js 13, Tailwind CSS, and TypeScript",
}

interface Props {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
}

export default async function Home() {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals)
      .then((res) => res.json())
      .then((data) => data.results as Movie[]),
    fetch(requests.fetchTrending)
      .then((res) => res.json())
      .then((data) => data.results as Movie[]),
    fetch(requests.fetchTopRated)
      .then((res) => res.json())
      .then((data) => data.results as Movie[]),
    fetch(requests.fetchActionMovies)
      .then((res) => res.json())
      .then((data) => data.results as Movie[]),
    fetch(requests.fetchComedyMovies)
      .then((res) => res.json())
      .then((data) => data.results as Movie[]),
    fetch(requests.fetchHorrorMovies)
      .then((res) => res.json())
      .then((data) => data.results as Movie[]),
    fetch(requests.fetchRomanceMovies)
      .then((res) => res.json())
      .then((data) => data.results as Movie[]),
    fetch(requests.fetchDocumentaries)
      .then((res) => res.json())
      .then((data) => data.results as Movie[]),
  ]);

  return (
    <div className="relative h-screen bg-linear-to-b lg:h-[140vh]">
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner netflixOriginals={netflixOriginals} />
        <section className="md:space-y-24">
          <Row title="Trending Now" movies={trendingNow} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies} />
          {/* My List Component */}
          <Row title="Comedies" movies={comedyMovies} />
          <Row title="Scary Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />
        </section>
      </main>
      {/* Modal */}
    </div>
  );
}