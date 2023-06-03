"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import useSWR from "swr";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const MovieModalPage = () => {
  const { id } = useParams();

  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
    fetcher
  );
  const { data: video } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
    fetcher
  );
  const trailer = video?.results[0]?.key;

  let [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/10" aria-hidden="true" />
     
      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="mx-auto max-w-md rounded bg-gray-900">
        <Image
          src={`https://image.tmdb.org/t/p/w500${
            data?.backdrop_path || data?.poster_path
          }`}
          alt="Thumbnail"
          fill
          className="rounded-sm object-cover md:rounded -z-10 blur-[10px]"
        />
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${trailer}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default MovieModalPage;
