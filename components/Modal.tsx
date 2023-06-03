'use client'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Movie } from '@/typings'
import useSWR from 'swr'
import { useParams } from 'next/navigation'

type Props = {
  movie: Movie
}

function Modal({movie} : Props) {
  let [isOpen, setIsOpen] = useState(true)

  const { id } = useParams();

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
    fetcher
  );
  console.log(movie?.title)
  

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="mx-auto max-w-sm rounded bg-white">
          

          {/* ... */}
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default Modal