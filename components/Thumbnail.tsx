import { Movie } from "@/typings";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import useSWR from "swr";
import Modal from "@/components/Modal";

type Props = {
  movie: Movie;
};

const Thumbnail = ({ movie }: Props) => {
  let [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();

  console.log(movie.backdrop_path);

  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[240px] md:hover:scale-105">
      <Link href={`/movie/${movie.id}`}>
        <button onClick={() => setIsOpen(true)}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${
              movie.backdrop_path || movie.poster_path
            }`}
            alt="Thumbnail"
            fill
            className="rounded-sm object-cover md:rounded"
          />
        </button>
      </Link>
    </div>
  );
};

export default Thumbnail;
