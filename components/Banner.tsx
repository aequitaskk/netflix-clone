import Image from "next/image";
import { Movie } from "@/typings";
import { baseUrl } from "@/constants/movie";
import { FaPlay } from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";

type Props = {
  netflixOriginals: Movie[];
};

const Banner = async ({ netflixOriginals }: Props) => {
  const randomBannerMovie =
    netflixOriginals?.results[
      Math.floor(Math.random() * netflixOriginals.results.length - 1)
    ];

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
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
          randomBannerMovie.original_name}
      </h1>
      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {randomBannerMovie?.overview}
      </p>

      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
          Play
        </button>
        <button className="bannerButton bg-gray-100/40">
          More Info
          <BsInfoCircleFill className="h-4 w-4 md:h-7 md:w-7" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
