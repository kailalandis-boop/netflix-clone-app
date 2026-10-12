"use client";

import Header from "./Header";
import Banner from "./Banner";
import Row from "./Row";
import useAuth from "../hooks/useAuth";
import { Movie } from "@/typings";
import { modalState } from "@/atoms/modalAtom";
import Modal from "./Modal";
import { useAtomValue } from "jotai/react";
import Plans from "./Plans";
import payments from "@/lib/stripe";
import { getProducts } from "@invertase/firestore-stripe-payments";

const products = await getProducts(payments, {
  includePrices: true,
  activeOnly: true,
})
  .then((res) => res)
  .catch((error) => console.log(error.message))
  
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
  products,
}: Props) => {
  const { loading } = useAuth()
  const showModal = useAtomValue(modalState)
  const subscription = false // Replace with your subscription logic

  if (loading || subscription === null) return null

  if (!subscription) return <Plans products={[]} /> // products={products} />

  return (
    <div className="{`relative h-screen bg-linear-to-b lg:h-[140vh]`} 
        ${showModal && 'h-screen! overflow-hidden'
      }"
    >
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