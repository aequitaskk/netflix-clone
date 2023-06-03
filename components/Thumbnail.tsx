import { Movie } from "@/typings";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  movie: Movie;
};

const Thumbnail = ({ movie }: Props) => {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[240px] md:hover:scale-105">
      <Link href={`/movie/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${
            movie.backdrop_path || movie.poster_path
          }`}
          alt="Thumbnail"
          fill
          className="rounded-sm object-cover md:rounded"
        />
      </Link>
    </div>
  );
};

export default Thumbnail;
