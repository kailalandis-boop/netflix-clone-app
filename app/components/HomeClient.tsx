"use client";

import Header from "./Header";
import Banner from "./Banner";
import Row from "./Row";
import useAuth from "../hooks/useAuth";
import { Movie } from "@/typings";
import { modalState } from "@/atoms/modalAtom";
import Modal from "./Modal";
import { useAtomValue } from "jotai/react";


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
const HomeClient = ({
  netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow,
}: Props) => {
  const { loading } = useAuth()
  const showModal = useAtomValue(modalState)

  if (loading) return null

  return (
    <div className="relative h-screen bg-linear-to-b lg:h-[140vh]">
      <Header />
      <main className="relative isolate pl-4 pb-24 lg:space-y-24 lg:pl-16">
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
      {showModal && <Modal />}
    </div>
  );
}

export default HomeClient