import requests from "../utils/requests";
import { Metadata } from 'next'
import { Movie } from "@/typings";
import HomeClient from "./components/HomeClient";

export const metadata: Metadata = {
  title: "Let's Build Netflix Clone with Next.js 13, Tailwind CSS, and TypeScript",
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
    <HomeClient
      netflixOriginals={netflixOriginals}
      trendingNow={trendingNow}
      topRated={topRated}
      actionMovies={actionMovies}
      comedyMovies={comedyMovies}
      horrorMovies={horrorMovies}
      romanceMovies={romanceMovies}
      documentaries={documentaries}
    />
  );
}