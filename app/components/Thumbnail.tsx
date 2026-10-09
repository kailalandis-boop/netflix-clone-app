import Image from 'next/image'
import { Movie } from '../../typings'
import { modalState, movieState } from '@/atoms/modalAtom'
import { DocumentData } from 'firebase/firestore'
import { useAtom } from 'jotai'

interface Props {
  movie: Movie | DocumentData
}

function Thumbnail({ movie }: Props) {
const [showModal, setShowModal] = useAtom(modalState)
const [currentMovie, setCurrentMovie] = useAtom(movieState)

  return (
    <div
      className="relative h-28 min-w-45 cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-65 md:hover:scale-105"
      onClick={() => {
        setCurrentMovie(movie)
        setShowModal(true)
      }}
    >
      <Image
            src={`https://image.tmdb.org/t/p/w500${
              movie.backdrop_path || movie.poster_path
            }`}
            className="rounded-sm object-cover md:rounded"
            layout="fill" alt={''}      />
    </div>
  )
}

export default Thumbnail