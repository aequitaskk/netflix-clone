"use client";
import { FaPlay } from "react-icons/fa";
import {AiOutlineInfoCircle} from "react-icons/ai";
import Link from "next/link";
import { genres } from "@/constants/genres";
import { Movie } from "@/typings";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import useSWR from "swr";
import { BiPlus } from "react-icons/bi";
import { FaRegThumbsUp } from "react-icons/fa";
import { HiOutlineVolumeOff } from "react-icons/hi";

type Props = {
  randomBannerMovie: Movie;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const BannerButton = ({ randomBannerMovie }: Props) => {
  let [isOpen, setIsOpen] = useState(false);

  const { data: video } = useSWR(
    `https://api.themoviedb.org/3/movie/${randomBannerMovie?.id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
    fetcher
  );
  const trailer = video?.results[0]?.key;

  const genreIds = randomBannerMovie?.genre_ids;
  const movieGenre = genres[0].genres.filter((genre) =>
    genreIds?.includes(genre.id)
  );

  // console.log(movieGenre);

  // console.log(genres[0].genres);

  return (
    <div className="flex space-x-3 items-center">
      <Link href={`/movie/${randomBannerMovie?.id}`}>
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
          Play
        </button>
      </Link>

      <button
        onClick={() => setIsOpen(true)}
        className="bannerButton bg-gray-100/40"
      >
        <AiOutlineInfoCircle className="text-xl" />
        More Info
      </button>

      {setIsOpen && (
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
            <Dialog.Panel className="mx-auto max-w-[850px] rounded bg-gradient-to-b from-gray-950 to-gray-900">
              <div className="relative">
                <iframe
                  width="850"
                  height="478"
                  src={`https://www.youtube.com/embed/${trailer}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>

                <div className="absolute bottom-5 flex w-full items-center justify-between px-8">
                  <div className="flex space-x-2">
                    <button className="flex items-center gap-x-2 rounded-md px-5 py-1.5 text-sm font-semibold transition hover:bg-gray-300 md:py-2.5 md:px-8 md:text-xl bg-white text-black">
                      <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
                      Play
                    </button>

                    <button className="text-gray-300 hover:text-white transition">
                      <BiPlus className="text-4xl border-[2px] rounded-full border-gray-400 hover:border-white" />
                    </button>

                    <button className="text-gray-300 hover:text-white transition">
                      <FaRegThumbsUp className="text-4xl p-2 border-[2px] rounded-full border-gray-400 hover:border-white" />
                    </button>
                  </div>

                  <button className="opacity-50 hover:opacity-100 transition">
                    <HiOutlineVolumeOff className="text-4xl p-1 border-[2px] rounded-full" />
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-start space-x-5 px-8 mt-4 mb-8">
                {/* Left */}
                <div className="flex flex-col flex-[1.7]">
                  <div className="flex space-x-2 items-center">
                    <p className="text-green-400">
                      {randomBannerMovie?.vote_average * 10}% Match
                    </p>
                    <p className="text-sm text-gray-400">
                      {randomBannerMovie?.release_date?.split("-")[0] ||
                        randomBannerMovie?.first_air_date?.split("-")[0]}
                    </p>
                    <p className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs text-gray-400">
                      HD
                    </p>
                  </div>

                  <div className="pt-5">
                    <p className="leading-5 text-[16px] font-light text-neutral-100">
                      {randomBannerMovie?.overview}
                    </p>
                  </div>
                </div>

                {/* Right */}
                <div className="flex flex-1">
                  <div className="flex items-center flex-wrap">
                    <p className="text-gray-400 text-[14px]">Genres:</p>
                    {movieGenre?.map((genre) => (
                      <p
                        key={genre.id}
                        className="text- text-white cursor-pointer hover:underline px-1 text-[14px] "
                      >
                        {genre.name}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* ... */}
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default BannerButton;
