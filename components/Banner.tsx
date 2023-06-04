import Image from "next/image";
import { Movie } from "@/typings";
import { baseUrl } from "@/constants/movie";

import BannerButton from "./BannerButton";

type Props = {
  netflixOriginals: Movie[];
};

const Banner = async ({ netflixOriginals }: Props) => {
  const randomBannerMovie =
    netflixOriginals[Math.floor(Math.random() * netflixOriginals.length - 1)];

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-full">
        <Image
          src={`${baseUrl}${
            randomBannerMovie?.backdrop_path || randomBannerMovie?.poster_path
          }`}
          alt="Banner Image"
          fill
          className="object-cover"
        />
      </div>

      <h1 className="text-2xl text-shadow-md md:text-4xl lg:text-7xl font-bold">
        {randomBannerMovie?.title ||
          randomBannerMovie?.name ||
          randomBannerMovie?.original_name}
      </h1>
      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {randomBannerMovie?.overview}
      </p>

      <BannerButton randomBannerMovie={randomBannerMovie} />
    </div>
  );
};

export default Banner;
